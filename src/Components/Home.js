import React from "react";
import About from "./About";
import Cards from "./Cards";
import { useEffect } from "react";
import { useState } from "react";


function Home(){

  const [drinkData, setDrinkData] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=c`)
      .then((r) => r.json())
      .then((data) => setDrinkData(data.drinks));
  }, []);

return(
  <div className="bg-bodybackground">
    <About updateDrinks={setDrinkData}/>
    <Cards Drinks={drinkData}/>
  </div>
)
}

export default Home