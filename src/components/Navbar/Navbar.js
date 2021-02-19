import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
      <div className='navbar-container container'>
        <NavLink to='/' className="navbar-logo">
          <MdRestaurantMenu className='navbar-icon' />
          PREPPED NOLA
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/meals' className='nav-links' onClick={closeMobileMenu}>
              Meals
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/meals/new' className='nav-links' onClick={closeMobileMenu}>
              Add meal
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/meals/planner' className='nav-links' onClick={closeMobileMenu}>
              Create Weekly Planner
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;