import {React , useState , useContext , useEffect} from 'react'
import style from './adress.module.css'
import apiviacep from './apiviacep'
import { ContextLogin } from '../context/Contexto';
function Adress() {
  const {redirect} = useContext(ContextLogin)
  
  useEffect(()=>{
    redirect()
  },[])
  const [dados , setDados] = useState([]);
  const [cep , setCep] = useState('');
  const [bairro , setBairro] = useState('');
  const [ddd , setDdd] = useState('');
  const [localidade , setLocalidade] = useState('');
  const [logradouro , setLogradouro] = useState('');
  const [uf , setUf] = useState('');
  const [numeroCasa , setNumeroCasa] = useState('');
  
  let test = '01001000';
 async function getCep(){
    try{
      let cepTratado = cep.split('-').join('');
      cepTratado.toString()
      const {data} = await apiviacep.get('ws/' + cepTratado + '/json/')
       
      const {bairro , ddd , localidade , logradouro , uf} = data;
      setDados({...dados , bairro:bairro , ddd:ddd , localidade:localidade , logradouro:logradouro , uf:uf}) 
      setBairro(bairro)
      setDdd(ddd)
      setLocalidade(localidade)
      setLogradouro(logradouro)
      setLogradouro(uf)    
    }catch(erro){
      console.log(erro);
      alert('CPF inválido');
    }
  }
    // function formatCep (cep){
    //   return cep.slice(0,5) + "-" + cep.slice(5,8)
    // }

    function submitForm(){
      setDados({...dados , numeroDaCasa:numeroCasa});
      if(bairro === '' || numeroCasa === ''){
        alert('Ops! Preencha os campos')
      }else{
        alert('Tudo Certo!')
        alert(JSON.stringify(dados));
        console.table(dados)
      } 
  }
  return (

       <div className={style.divFormLocal}>
         <h1>Endereço</h1>
           <form action="" className={style.formLocal} onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="">CEP:</label>
            <input type="text" maxLength="9" onChange={(e)=> setCep(e.target.value) }/>
            {/* <input type="text" onChange={(e)=> e.target.value = test}/>  */}
           <button onClick={()=>getCep()}>Buscar por CEP</button>
           <label htmlFor="">Bairro:</label>
           <input type="text" defaultValue={bairro} />
           <label htmlFor="">Localidade:</label>
           <input type="text" defaultValue={localidade} />
           <label htmlFor="">Logradouro:</label>
           <input type="text" defaultValue={logradouro} />
           <label htmlFor="">DDD:</label>
           <input type="text" defaultValue={ddd} />
           <label htmlFor="">Numero Da Casa:</label>
           <input type="text" onChange={(e)=>setNumeroCasa(e.target.value)} />
           <button onClick={()=>submitForm()}>Enviar!</button>
           </form>

       </div>
  
  )
}

export default Adress