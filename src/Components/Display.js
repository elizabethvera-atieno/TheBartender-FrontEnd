import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Display() {
  const [drinkData, setDrinkData] = useState([]);

  const id = Number(window.location.pathname.split("/").pop());
  console.log(id);
  console.log(drinkData);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((r) => r.json())
      .then((data) => setDrinkData(data.drinks));
  }, [id]);

  return (
    <>
      {drinkData.map((drink) => (
        <div key={drink.idDrink} className="bg-bodybackground">
          <div className=" pt-5 text-center">
            <h2 className="text-2xl text-textcolor font-bold">
              {drink.strDrink}
            </h2>
          </div>
          <div className="pt-2 place-content-center flex ">
            <div className=" max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg " src={drink.strDrinkThumb} alt="" />

              <div className="flex justify-between p-1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-textcolor dark:text-white">
                  {drink.strDrink}
                </h5>
              </div>
            </div>
          </div>
          <div className="text-center pt-5">
            <h2 className="text-xl text-textcolor font-bold">Ingredients:</h2>
            <ul className="text-white text-md">
              <li>{drink.strIngredient1}</li>
              <li>{drink.strIngredient2}</li>
              <li>{drink.strIngredient3}</li>
              <li>{drink.strIngredient4}</li>
            </ul>
            <h2 className="text-xl text-textcolor font-bold">Glass:</h2>
            <p className="text-white text-md">{drink.strGlass}</p>
            <h2 className="text-xl text-textcolor font-bold">Alcohol:</h2>
            <p className="text-white text-md">{drink.strAlcoholic}</p>
            <h2 className="text-xl text-textcolor font-bold">Method:</h2>
            <p className="text-white text-md">{drink.strInstructions}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Display;
