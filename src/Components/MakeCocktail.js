import React from "react";
import { useState } from "react";
import {Redirect} from "react-router-dom"

function Makecocktail(){
  const[newCocktail, setNewCocktail] = useState(null)
  const[cocktailId, setCocktailId] = useState(0)
  const[cocktailData, setCocktailData] = useState({
    name : "",
    glass : "",
    image : "",
    alcohol : ""
  })

  const[ingData, setIngData] = useState({
    ing1 : "",
    ing2 : "",
    ing3 : "", 
    ing4 : "",
    cocktail_id : cocktailId
  })

  function submitHandler(e){
    e.preventDefault()
    fetch('https://dry-harbor-82835.herokuapp.com/cocktails',{
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(cocktailData)
    })
    .then((r) => r.json())
    .then((newCocktail) => setNewCocktail(newCocktail));

    console.log(cocktailData)

    if (newCocktail){
      fetch('https://dry-harbor-82835.herokuapp.com/ingredients',{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          ...ingData,
          cocktail_id : newCocktail.id
        })
      })
      .then((r) => r.json())
      .then((data) => console.log(data))
    }
    <Redirect to='/createdcocktails'/>
  }

  return(
    <div className="flex items-center justify-center p-5">
      <div className="mx-auto w-full max-w-[800px]">
        <form onSubmit={submitHandler}>
        <div className="mb-5">
        <h3 className="md:text-2xl text-textcolor">Make those spirits intermingle</h3>
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Cocktail Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Cocktail Name"
              value={cocktailData.name}
              onChange = {(e) => setCocktailData({
                ...cocktailData,
                name: e.target.value
              })}
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Category
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={cocktailData.alcohol}
              onChange = {(e) => setCocktailData({
                ...cocktailData,
                alcohol: e.target.value
              })}
              placeholder="Alcoholic / Non-Alcoholic"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Type of Glass
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={cocktailData.glass}
              onChange = {(e) => setCocktailData({
                ...cocktailData,
                glass: e.target.value
              })}
              placeholder="Glass Name"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image URL
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={cocktailData.image}
              onChange = {(e) => setCocktailData({
                ...cocktailData,
                image: e.target.value
              })}
              placeholder="Image URL"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ingredient1
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={ingData.ing1}
              onChange = {(e) => setIngData({
                ...ingData,
                ing1: e.target.value
              })}
              placeholder="Ingredient Name"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ingredient2
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={ingData.ing2}
              onChange = {(e) => setIngData({
                ...ingData,
                ing2: e.target.value
              })}
              placeholder="Ingredient Name"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ingredient3
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={ingData.ing3}
              onChange = {(e) => setIngData({
                ...ingData,
                ing3: e.target.value
              })}
              placeholder="Ingredient Name"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Ingredient4
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={ingData.ing4}
              onChange = {(e) => setIngData({
                ...ingData,
                ing4: e.target.value
              })}
              placeholder="Ingredient Name"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          {/* <Link to={'/createdcocktails'}> */}
          <button
              type="submit"
              className="hover:shadow-form rounded-md bg-red-200 py-3 px-8 text-base font-semibold text-[#07074D] outline-none">
              Add Cocktail
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  )

}

export default Makecocktail