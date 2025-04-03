import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

const UserProvider = ({children})=>{

  

    const [user  , setUser] = useState(null);
    const [error , setError] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("jwt_token")
        if(token){
           const decoded =  jwtDecode(token)
            setUser(decoded)
        }
    } , [])

    const setLogin = (token , userData)=>{
       localStorage.setItem("jwt_token" , token)
             const LocalToken = localStorage.getItem("jwt_token")
             setUser(userData)
    }
    

    return <UserContext.Provider value={{user , error , setLogin }}>
        {children}
    </UserContext.Provider>

}

export const useUser = ()=>{
    return useContext(UserContext)
}

export {UserContext , UserProvider}