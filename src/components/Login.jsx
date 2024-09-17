import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth, db } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const phone = useRef();

  const toggleSignInForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleButtonClicked = (e) => {
    const msg = checkValidData(
      email.current.value,
      password.current.value,
      phone.current?.value,
      isSignUp
    );
    setErrorMsg(msg);
    if (msg) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          });

          setDoc(doc(db, "users", user.uid), {
            phone: phone.current.value,
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen overflow-hidden ">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="login banner img"
        />
      </div>
      <form
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-col px-14 py-12  flex bg-black/70 text-[#fcfcfc] w-3/12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl px-2 font-bold mb-5">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className=" m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none "
            ref={name}
          />
        )}
        {isSignUp && (
          <input
            type="number"
            placeholder="Phone"
            className=" m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            ref={phone}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className=" m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none "
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none"
          ref={password}
        />

        <p className="text-red-500">{errorMsg}</p>

        <button
          className="p-2 m-2 mt-8 bg-[#E50914] text-lg font-semibold tracking-wide rounded-md"
          onClick={handleButtonClicked}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="border-b-2 w-fit cursor-pointer mt-3"
        >
          {isSignUp
            ? "Already Registerd? Sign In!!"
            : "New To Stream? Sign Up!!"}
        </p>
      </form>
    </div>
  );
}

export default Login;
