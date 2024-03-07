import React, { useState } from 'react';
import {headerLogo} from '../../assets/images'
import {cart, hamburger, user} from '../../assets/icons'
import { navLinks } from '../constants';
import { NavLink, useNavigate } from 'react-router-dom';
const Nav = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const navigate = useNavigate()
    function renderNavItems (color) {
        return (
        navLinks.map((item) => (
            <li key={item.label}>
                <a href={item.href} className='font-montserrat leading-normal text-md text-slate-gray' style={{color: color}}>
                {item.label}
                </a>
            </li>
        )))
    }
    function openHamburger () {
        return (
            <div className=' w-[200px] h-[300px] bg-coral-red text-white shadow-lg rounded-md absolute right-5 mt-3 flex flex-col justify-center'>
                <button onClick={ () => {setIsHamburgerOpen(!isHamburgerOpen)}} className=' flex ml-[90%] mb-[250px] absolute'>x</button>
                <ul className='flex flex-col gap-8 items-center justify-center text-white '>
                    {renderNavItems('white')}
                </ul>
            </div>
        )
    }
  return (
    <header className='padding-x py-8 relative z-10 w-full bg-white'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo}
                alt='logo'
                width={130}
                height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {renderNavItems()}
            </ul>
            <ul className='flex flex-row gap-10 justify-center items-center cursor-pointer'> 
                <li><img width={22} src={user} onClick={() => navigate('/login')}/></li>
                <li><img width={22} src={cart}/></li>
                
            </ul>
            <div className='hidden max-lg:block'>
                <button onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} >
                <img src={hamburger} alt='hamburger' width={25}/>
                </button>
                {isHamburgerOpen && openHamburger()}
               
            </div>
        </nav>
    </header>
  )
}

export default Nav
