import React from "react";
import { useParams } from "react-router-dom";



function User(){
    const {userid}=useParams()
    return(
       <div className="flex justify-center items-center w-full h-20  bg-blue-100">
      <div className="bg-gray-600 text-white px-2 py-2 rounded-lg text-3xl font-bold">
        User:{userid}
      </div>
    </div>
    )
}

export default User;