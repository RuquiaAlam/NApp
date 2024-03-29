import React, { useRef, useState } from 'react'
import Header from './Header';
import checkValidData from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase" ;

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BACKGROUND_IMG, USER_AVATAR} from "../utils/constants";

const Login = () => {
const [isSignInForm,setIsSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);

const email=useRef(null);
const name=useRef(null);

const dispatch=useDispatch();
const password=useRef(null)
const handleButtonClick=()=>
{
//Validate the form data 


const message= checkValidData(email.current.value,password.current.value);
setErrorMessage(message);
console.log(message);

if(message) return
//Sign In Sign Up logic
if(!isSignInForm)
{
  //SignUp logic
  createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid ,email,displayName,photoURL}= auth.currentUser;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL})
          );
 
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
  console.log(user);
 

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+ errorMessage)
  });
}
else{

//Sign In Logic
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
}

}
  const toggleSignInForm=()=>
  {
setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header />
    <div className="absolute bg-opacity-70  bg-black " >
    <img src={BACKGROUND_IMG} alt="background"/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg  bg-opacity-80">
<h1 className="font-bold text-3xl p-2 mx-0">{isSignInForm?"Sign In":"Sign Up"}</h1>
{!isSignInForm&&
<input ref={name} type="text" placeholder="Full Name " 
className="p-4 my-4 w-full bg-gray-600 text-white "></input>}
      <input ref={email} type="text" placeholder="Email Address " className="p-4 my-4 w-full bg-gray-600 text-white "></input>
      <input ref={password}type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 text-white" ></input>
      <p className="text-red-500">{errorMessage}</p>
      <button className="p-4 my-4 bg-red-700  w-full" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className="py-4  cursor-pointer"onClick={toggleSignInForm}> {isSignInForm?"New to Netflix ?Sign up now":"Already a member Sign In now"}</p>
      </form>

    </div>
  );
};

export default Login