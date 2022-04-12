import {useContext , useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import {ContextLogin} from '../context/Contexto.js'

import style from './login.module.css'
export default function Login() {
     const {ChamarLogin , token , error , load} = useContext(ContextLogin);
    return (
   <section>
     <div>
       <h1>Login</h1>
        <div className={style.divLog}>
        <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={async (values) => {
          await ChamarLogin(values)
        }}
      >
        <Form className={style.FormLogin}> 
          <label htmlFor="usuario">Usuario:</label>
          <Field id="usuario" name="usuario" placeholder="Usuario" />

          <label htmlFor="senha">Senha:</label>
          <Field id="senha" name="senha" placeholder="Senha" />
          <button type="submit">Logar</button>
        </Form>
      </Formik>
      </div>
    </div>
   </section>
    
  )
}
