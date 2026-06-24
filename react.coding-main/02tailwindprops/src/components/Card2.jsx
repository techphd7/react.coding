import React from "react";

function Card2({user,price="null"}){
    return(
<div className="w-72 p-4 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group scale-80">
      <div>
        <img
          src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
          alt="test"
          width="200"
          height="200"
           className="rounded-lg w-full h-60 object-cover"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200 mt-5">
 {user}
</h2>   
         
        </div> <h2 className="text-xl font-bold text-gray-200 mt-5">
  Modern Monkey Digital Art Collection
</h2>
   
        <div className=" text-gray-100 text-sm leading-relaxed  flex justify-between  p-6 ">
          <p>#345</p>
          <p> price :{price}</p>
        </div>
      </div>
    </div>
    )
}

export default Card2;