import React, { useRef } from 'react'
import s from './Banner.module.scss';
import Button from '../Button/Button';
import image from '../../assets/banner.svg'
import { Link } from 'react-router-dom';


export default function Banner() {
  

  

    const clickHandle = () => {
      const saleElement = document.getElementById('sale');
      saleElement.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className={s.banner}>
        <div className={s.banner__content}>
            <h2 className='block__title'>Sale</h2>
            <h3>New season</h3>
            {/* <Link to='/sales'><Button className={'button_sale'} name={'Sale'} clickHandle={clickHandle}/></Link> */}
            <Button className={'button_sale'} name={'Sale'} clickHandle={clickHandle}/>
        </div>
        <img src={image} alt="banner" />
    </div>
  )
}
