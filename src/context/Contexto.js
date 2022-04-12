import { createContext , useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from '../api.js';
import Loading from "../components/Loading.js";


export const ContextLogin = createContext();

function ContextProvider({children}){
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token){
            api.defaults.headers.common['Authorization'] = token;
        }
    },[])

    const navigate = useNavigate();
    const [pessoas , setPessoas] = useState([])
    const [token , setToken] = useState('');
    const [login , setLogin] = useState(true)
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token){
            api.defaults.headers.common['Authorization'] = token;
        }
        setLogin(false)
    },[])
    
    async function ChamarLogin(values){
        try{
            const {data} = await api.post('/auth' , values);
            setToken(data);
            localStorage.setItem('token' , data);  
            navigate('../users')   
            window.location.reload(false);  
        }
        catch(erro){
            console.log(erro)
            alert('usuario ou senha invalido')
        }
    }
    function Logout(){
        localStorage.removeItem('token');
        navigate('../login') 
    }

    function redirect(){
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
    }
    if(login){
        return(<Loading />)
    }
    return(
        <ContextLogin.Provider value={{ChamarLogin ,Logout ,redirect  ,pessoas , token }}>
            {children}
        </ContextLogin.Provider>
    )
}
export default ContextProvider;