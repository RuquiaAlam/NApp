import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from './../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';


const Header = () => {
  // useNowPlayingMovies();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
 
  const handleSignOut=()=>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
     
 dispatch(removeUser())

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

const handleLanguageChange=(e)=>
{
console.log(e.target.value);
dispatch(changeLang(e.target.value));


}
const handleGptSearchClick=()=>
{

  //Toggle Gpt Search
  dispatch(toggleGptSearchView());

}

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO }alt="logo"/>


{user && (
<div className="flex p-2">
{ showGptSearch && <select className="p-2 m-2 bg-gray-900 rounded-lg text-white" onChange={handleLanguageChange}>
    {
    SUPPORTED_LANGUAGES.map((item)=>
     <option value={item.identifier} key={item.identifier}>
      {item.name}
     </option>)}
    
  </select>}
  <button className="bg-purple-800 py-2 px-2 mx-4 my-2 cursor-pointer rounded-lg text-white" onClick={handleGptSearchClick}>GPT Search </button>

<img className="w-14 h-14 p-2" alt="usericon" src={user?.photoURL}/>
<button onClick={handleSignOut} className="font-bold text-white cursor-pointer" >Sign Out</button>
</div>
)}
    </div>
  )
}

export default Header