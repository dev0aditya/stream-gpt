import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
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
      <form className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-col px-14 py-12  flex bg-black/70 text-[#fcfcfc] w-3/12 rounded-md">
        <h1 className="text-3xl px-2 font-bold mb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className=" m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none "
          />
        )}
        {isSignIn && (
          <input
            type="number"
            placeholder="Phone"
            className=" m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className=" m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none "
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 bg-gray-700/80 px-5 py-3 text-lg rounded-md focus:outline-none"
        />
        <button className="p-2 m-2 mt-8 bg-[#E50914] text-lg font-semibold tracking-wide rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="border-b-2 w-fit cursor-pointer mt-3"
        >
          {isSignIn
            ? "New To Stream? Sign Up!!"
            : "Already Registerd? Sign In!!"}
        </p>
      </form>
    </div>
  );
}

export default Login;
