import React from "react";
import { Link } from "react-router-dom";

function Cards({Drinks}){


  return(
    <div className=" cards text-center">
    <h3 className="text-2xl  pt-4 text-textcolor font-bold">
    Experience a blast of flavours
    </h3>
    <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-5 lg:px-32">
            <div className="flex flex-col md:flex-row place-content-center flex-wrap -m-1 md:-m-2">
              {Drinks.map((drink)=>(
                   <div key={drink.idDrink} className="flex flex-wrap w-1/3">
                   <div className="w-full p-1 md:p-2">
                       <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/display/${drink.idDrink}`}>
                            <img
                               className="rounded-t-lg"
                               src={drink.strDrinkThumb}
                               alt=""
                           />
                        </Link>
                           <div className="flex justify-between p-1">
                               <h5 className="mb-2  tracking-tight text-textcolor dark:text-white">
                                   {drink.strDrink}
                               </h5>
                           </div>
                       </div>
                   </div>
               </div>
              ))} 
            </div>
        </div>
    </section>
</div>
);
}

export default Cards