import React from "react";

function Makecocktail(){

  return(
    <div className="flex items-center justify-center p-5">
      <div className="mx-auto w-full max-w-[800px]">
        <form>
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
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Choose Category
            </label>
            <select name="cocktail_category_id" id="categories" className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md">
              <option >Alcoholic</option>
              <option >Non-Alcoholic</option>
            </select>
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
              placeholder="Ingredient Name"
              className="w-full rounded-md border border-formcolor bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-categories focus:shadow-md"
            />
          </div>
          <button
              className="hover:shadow-form rounded-md bg-red-200 py-3 px-8 text-base font-semibold text-[#07074D] outline-none">
              Add Cocktail
          </button>
        </form>
      </div>
    </div>
  )

}

export default Makecocktail