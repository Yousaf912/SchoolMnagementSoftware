import React, { useContext } from 'react';
import style from './header.module.css';
import headpic from '../assets/IMG-20240528-WA0011.jpg';
import { Contex } from '../contextStore';


const Header = () => {
  const inptval = useContext(Contex);
  console.log(inptval);
  
  return (
    <div className={`${style.heder} border-0 rounded-4 p-2 d-flex justify-content-between align-items-center`}>
        
        <input type="text" className={style.inpt} readOnly value={inptval.urlname} />
        <div>
            <img src={headpic} width={50} height={50} className='border-0 rounded-circle' />
        </div>
    </div>
  )
}

export default Header