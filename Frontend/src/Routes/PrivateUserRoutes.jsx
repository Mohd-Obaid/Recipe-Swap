import React from 'react'
import Cookies from "js-cookie";
import { Navigate, useLocation } from 'react-router-dom';


export function PrivateUserRoutes({children}) {

    let token = Cookies.get("login_token");
    let role = Cookies.get("login_role");
    let location = useLocation()

    if(!token || !role || role!=="user"){
        return <Navigate to="/login" state={location.pathname} replace={true} />
    }
    

    return children;
}
