import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from './../utils/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Header = () => {
  // useNowPlayingMovies();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
 
  const handleSignOut=()=>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
     
 

    }).catch((error) => {
      // An error happened.
     
    });
  }
  useEffect(()=>
{


const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid ,email,displayName,photoURL}= user;
dispatch(
  addUser({
    uid:uid,
    email:email,
    displayName:displayName,
    photoURL:photoURL})
    );
    navigate("/browse")
  }
   else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/");

  }
});
//unsubscribe when component unmount
return()=>unsubscribe
},[]);

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO }alt="logo"/>


{user && (
<div className="flex">
<img className="w-14 h-14 p-2" alt="usericon" src={user?.photoURL}/>
<button onClick={handleSignOut} className="font-bold text-white cursor-pointer" >Sign Out</button>
</div>
)}
    </div>
  )
}

export default Header