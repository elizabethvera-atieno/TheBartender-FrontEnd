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

  function handleDelete(id){

    fetch(`https://dry-harbor-82835.herokuapp.com/cocktails/${id}`,{
      method: 'DELETE'
    })
    const remainingDrinks = drinkData.filter(drink => drink.id !== id)
    setDrinkData(remainingDrinks)
    console.log(remainingDrinks)
  }
  console.log(drinkData)
  return (
    <>
    {drinkData.map((drink) => (
      <div key={drink.id} className="flex">
      <div className="container mx-auto pt-7">
      <h2 className="font-bold text-[#07074D]">{drink.name}</h2>
      <div className="flex">
        <div>
          <img
            src={drink.image}
            alt="name"
            width={250}
            height={250}
            objectfit="cover"
          />
        </div>
        <div className="pl-5 text-[#07074D] font-bold">
          <p>Cocktail Name: <span className="text-white">{drink.name}</span></p>
          <p className="pt-2">Category: <span className="text-white">{drink.alcohol}</span></p>
          <p className="pt-2">Type of glass: <span className="text-white">{drink.glass} </span></p>
          <p className="pt-2">Ing1: <span className="text-white">{drink.ingredients.map((ing) => (ing.ing1))}</span></p>
          <p className="pt-2">Ing2: <span className="text-white">{drink.ingredients.map((ing) => (ing.ing2))}</span></p>
          <p className="pt-2">Ing3: <span className="text-white">{drink.ingredients.map((ing) => (ing.ing3))}</span></p>
          <p className="pt-2 pb-1">Ing4: <span className="text-white">{drink.ingredients.map((ing) => (ing.ing4))}</span></p>
          <button
              onClick={()=>handleDelete(drink.id)}
              className="hover:bg-red-400 rounded-md bg-red-200 py-1 px-5 text-base font-semibold text-[#07074D] outline-none">
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
