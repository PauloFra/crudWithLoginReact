import React from 'react'
import raio from '../imgs_gifs/Lightning.gif' 
import style from './erro.module.css'
function Erro() {
  return (
    <div className={style.divErro}>
        <h1>Erro</h1>
        <img src={raio} alt=""  />
        <h2>Ops , ocorreu algum erro</h2>
    </div>
  )
}
export default Erro