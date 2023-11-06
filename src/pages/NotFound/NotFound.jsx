import React from 'react'
import notFoundImg from '../../assets/not_found.svg'
import s from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div>
        
        <img src={notFoundImg} alt="not found"  className={s.img}/>
    </div>
  )
}
