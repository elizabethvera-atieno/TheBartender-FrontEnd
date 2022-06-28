import React from "react";
import { useState } from "react";


function About({updateDrinks}){
  const [name, setName] = useState("")

  function handleSubmit (event, ctname){
    event.preventDefault()
    ctname = name

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ctname}`)
      .then((response) => response.json())
      .then((data) => {
        updateDrinks(data.drinks)
      })
     setName("") 
  }


  return (
    <div className="about text-center">
      <h3 className="heading  md:text-2xl pt-20 text-white font-bold">THE BARTENDER<br></br>
      Taste of Heaven and a little bit of hell</h3>
      <h4 className="text-white md:text-xl font-bold pt-8">Search for cocktail by name</h4>
      <div className="text-center font-bold">
            <form onSubmit={handleSubmit} className=" pt-3">
                <input className="focus:bg-blue py-2" type="text" placeholder="Search.." name="search" onChange={(e) => setName(e.target.value)} value={name}/>
                <button className="bg-textcolor text-white hover:bg-sky-700 w-5xl px-4 py-2" type="submit">Enter</button>
            </form>
        </div>
    </div>
  )
}

export default About