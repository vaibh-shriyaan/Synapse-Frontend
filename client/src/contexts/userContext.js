import {createContext,useContext,useState,useEffect} from 'react'

//creating context
const userContext=createContext();

//custom hook for using context
 export const useUser=()=>useContext(userContext);

 //context provider
 export const UserProvider=({children})=>{
    const [user,setUser]=useState("");

    const login=(userData)=>{
      setUser(userData);
      localStorage.setItem("user",JSON.stringify(userData))
    }

    const logout=()=>{
        setUser("");
        localStorage.removeItem("user");
        
    }

    useEffect(()=>{
     const stored =localStorage.getItem("user");
     if(stored) setUser(JSON.parse(stored));
    },[])

    return(
      <userContext.Provider value={{user,login,logout}}>
        {children}
      </userContext.Provider>
    );
 }
