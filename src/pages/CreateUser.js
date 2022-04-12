import {React , useState , useEffect , useContext} from 'react'
import style from './createuser.module.css'
import { UserContext } from '../context/UserContext';
import { Formik , Field, Form } from 'formik';
import { ContextLogin } from '../context/Contexto';
import Loading from '../components/Loading';
import Erro from '../components/Erro';

import api from '../api.js';
import {useLocation} from 'react-router-dom'
import moment from 'moment';

function CreateUser() {
    const location = useLocation();
    const {arrayPessoas , setArrayPessoas} = useContext(UserContext);
    const {redirect} = useContext(ContextLogin);
    const [atualizarId , setAtualizarId] = useState(location.pathname.substring('13'));
    const [array , setArray] = useState([]);
    console.log(arrayPessoas);

    useEffect(()=>{
        redirect()
    },[]);

    async function CreateNewUser(values){
        try{
            const {nome , email ,cpf ,dataNascimento} = values;
            let newDate = moment(dataNascimento , 'DD/MM/YYYY').format('YYYY-MM-DD');  
            const {data} = await api.post('pessoa/' ,{nome:nome , email:email ,cpf:cpf , dataNascimento:newDate });
            alert('Usuario cadastrado');
            window.location.reload(false);
        }catch(erro){
            console.log(erro)
            alert('Ops algo deu errado');
        } 
    }

    async function AtualizarUsuario(values){
        try{
            const {nome , email ,cpf ,dataNascimento} = values;
            let newDate = moment(dataNascimento , 'DD/MM/YYYY').format('YYYY-MM-DD');  
            const {data} = await api.put(`pessoa/${atualizarId}` ,{nome:nome , email:email ,cpf:cpf , dataNascimento:newDate });
            alert('Usuario Foi Atualizado')
            setArrayPessoas([]);
        }catch(erro){
            console.log(erro)
        }
    }
    return (
    <div className={style.divMain}>
        {atualizarId ?
            <h1>Atualizar Usuario</h1> 
        :
             <h1>Adicionar Usuario</h1> 
        }
     <div>
     <Formik
      initialValues={{
        nome:arrayPessoas.nome,
        email: arrayPessoas.email,
        cpf: arrayPessoas.cpf,
        dataNascimento: arrayPessoas.dataNascimento

    }}
    
    onSubmit={async (values) => {
        if(!atualizarId){
            CreateNewUser(values)
        }else{
            AtualizarUsuario(values)
        };
    }}
    >
      <Form autoComplete='off' className={style.formLocal} >
          
        <label htmlFor="nome">Nome: </label>
        <Field id="nome" name="nome" placeholder="Nome"/>
        <br />
        <label htmlFor="cpf">CPF: </label>
        <Field id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" />
        <br />
        <label htmlFor="email">Email: </label>
        <Field
          id="email"
          name="email"
          placeholder="usuario@dbccomapny.com"
        />
         <br />
        <label htmlFor="dataNascimento">dataNascimento: </label>
        <Field id="dataNascimento" name="dataNascimento" placeholder="dd/mm/aaaa" />
        <br />
        {atualizarId ?
        <>
            <button className={style.btnAtt} type="submit">Atualizar</button>
        </>
        :
        <>
            <button className={style.btnAdd} type="submit">Adicionar</button>
        </>
        }
      </Form>
    </Formik>
    
     </div>
    </div>
  )
}

export default CreateUser