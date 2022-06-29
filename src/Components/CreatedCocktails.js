import React from "react";

function CreatedCocktails(){
  return (
    <div className="container mx-auto pt-7">
      <h2 className="font-bold text-textcolor">Cocktail Name</h2>
      <div className="flex">
        <div>
          <img
            src= 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg'
            alt= 'name'
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="pl-5 text-textcolor font-bold">
          <p>Cocktail Name: </p>
          <p>Category: </p>
          <p>Type of glass: </p>
          <p>Ing1:</p>
          <p>Ing2:</p>
          <p>Ing3:</p>
          <p>Ing4:</p>
          <p></p>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default CreatedCocktails