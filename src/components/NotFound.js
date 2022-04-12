import React from 'react'
import style from './notFound.module.css'
import lightning from '../imgs_gifs/Lightning.gif'
function NotFound() {
  return (
    <div className={style.divNF} >Not Found <span><img src={lightning} alt="" /></span></div>
  )
}

export default NotFound