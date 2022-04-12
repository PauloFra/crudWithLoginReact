import {createContext , useEffect , useState} from "react";
import React from 'react'
import api from "../api";
import Loading from "../components/Loading";


export const UserContext = createContext();

function UserProvider({children}) {
    const [pessoas , setPessoas] = useState([])
    const [load , setLoad] = useState(true)
    const [error , setError] = useState(false)
    const [arrayPessoas , setArrayPessoas] = useState([]);
    const [login , setLogin] = useState(true);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token){
            api.defaults.headers.common['Authorization'] = token;
        }
        setLogin(false)
    },[])
    async function GetPessoa(){
        try {
            const {data} = await api.get('/pessoa');
            setLoad(false)
            setError(false)            
            setPessoas(data);
        }
        catch(erro){
            console.log(erro);
            setLoad(false)
            setError(true)
        }
    }
  
  if(login){
        return(<Loading />)
    }
  return (
    <UserContext.Provider value={{GetPessoa ,pessoas , load ,error,setArrayPessoas ,arrayPessoas}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider