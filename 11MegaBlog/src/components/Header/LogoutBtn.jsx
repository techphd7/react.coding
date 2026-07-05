import React from "react";
import {useDispatch} from 'react-redux'
import authService from '../../appWrite/config'
import {logout} from '../../store/authSlice'


function LogoutBtn(){

    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return(
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 
        rounded-lg transition duration-200"></button>
    )
}

export default LogoutBtn;