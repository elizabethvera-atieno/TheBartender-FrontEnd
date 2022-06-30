import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase-config";
import {Redirect} from "react-router-dom"

function Login({user, setUser}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser) =>{
      console.log(currentUser)
      setUser(currentUser)
    })
  },[setUser])

  const handleLoginSubmit=async(event)=>{
    event.preventDefault()
      try{
        const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword)
        console.log(user)
      } catch (error) {
        console.log(error.message)
      }
  }

  if (user){
    return <Redirect to="/makeyours"/>
  }

  return (
    <>
      {/* <p className="text-white text-center">Current user:</p> */}
      {/* <p className="text-white text-center">{user?.email} </p> */}
      <div className="pt-10 flex place-content-center justfify-center">
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Login to our platform
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
                onChange={(event)=>{setLoginEmail(event.target.value)}}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                onChange={(event)=>{setLoginPassword(event.target.value)}}
              />
            </div>
            <div className="flex items-start"></div>
            <button
              type="submit"
              className="w-full text-white bg-bodybackground hover:bg-textcolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </form>
          <div className="flex items-center h-5 py-10">
            <p className="pt-10 font-medium ">
              Don't have an account?{" "}
              <Link to={"/signup"}>
                <span className="text-blue-800 hover:text-bodybackground">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
