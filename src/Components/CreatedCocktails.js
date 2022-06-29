import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CreatedCocktails() {
  const [drinkData, setDrinkData] = useState([])

  useEffect( () => {
    fetch('https://dry-harbor-82835.herokuapp.com/cocktails')
      .then((r) => r.json())
      .then((data) => (setDrinkData(data)))
  }, [])
  console.log(drinkData)
  return (
    <>
    {drinkData.map((drink) => (
      <div key={drink.id} className="flex">
      <div className="container mx-auto pt-7">
      <h2 className="font-bold text-textcolor">{drink.name}</h2>
      <div className="flex">
        <div>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"
            alt="name"
            width={300}
            height={300}
            objectfit="cover"
          />
        </div>
        <div className="pl-5 text-textcolor font-bold">
          <p>Cocktail Name: </p>
          <p className="pt-2">Category: </p>
          <p className="pt-2">Type of glass: </p>
          <p className="pt-2">Ing1:</p>
          <p className="pt-2">Ing2:</p>
          <p className="pt-2">Ing3:</p>
          <p className="pt-2 pb-10">Ing4:</p>
          <button
              className="hover:shadow-form rounded-md bg-red-200 py-3 px-8 text-base font-semibold text-[#07074D] outline-none">
              Delete
          </button>
        </div>
      </div>
    </div>
      </div>
    ))}
    </>
  );
}

export default CreatedCocktails;
