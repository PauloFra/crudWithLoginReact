import React from 'react'
import style from './loading.module.css'
import imgLoad from '../imgs_gifs/loading.gif'
function Loading() {
  return (
   <>
       <div className={style.divLoading}><img src={imgLoad} alt="loading" /></div>
    </>
  )
}

export default Loading