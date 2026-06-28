import React,{useContext} from "react";
import UserContext from "../src/context/UserContext";

function Profile(){
    const {user}=useContext(UserContext)
    
      if (!user) {
    return (
      <div className="mt-6 text-center text-red-500 font-semibold">
        Please Login
      </div>
    );
  }

  return (
    <div className="mt-6 bg-green-100 border border-green-300 rounded-lg p-4">

      <h2 className="text-green-700 font-bold text-xl">
        Welcome {user.username} 🎉
      </h2>

      <p className="text-gray-600 mt-2">
        Login Successful
      </p>

    </div>
    );
}

export default Profile;