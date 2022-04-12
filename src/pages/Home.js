import {React , useContext , useEffect} from 'react'
import { ContextLogin } from '../context/Contexto'
function Home() {
    const {redirect} = useContext(ContextLogin)
    useEffect(()=>{
        redirect()
    },[])
  return (
   <section>
      <div>
        <h1>Home</h1>
    </div>
   </section>
  )
}

export default Home