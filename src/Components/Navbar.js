import React from "react";


function Navbar(){
  return (
    <nav className="navbar md:flex justify-between px-5 border-gray-200 px-2 sm:px-4  rounded">
      <h2 className="md:text-lg pl-6 pt-0 text-textcolor">
        <a href="/">The Bartender</a>
      </h2>
      <div className="flex md:justify-end  w-full  " id="mobile-menu">
        <h2 className=" md:text-md pl-6 pt-3 text-textcolor">
          <a href="/">Home</a>
        </h2>
        <h2 className=" md:text-md pl-4 pt-3 text-textcolor">
          <a href="/makeyours">Create a recipe</a>
        </h2>
        <h2 className=" md:text-md pl-4 pt-3 text-textcolor">
          <a href="/createdcocktails">New Recipes</a>
        </h2>
        <h2 className=" md:text-md pl-4 pt-3 text-textcolor">
          <a href="/login">Login</a>
        </h2>
      </div>
    </nav>
  )
}

export default Navbar;