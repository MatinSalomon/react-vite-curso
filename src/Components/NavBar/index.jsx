import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4';
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>

            <li className='font-semibold text-lg'>
                <NavLink 
                to='/'
                >
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/'
                className={({ isActive }) =>  
                isActive ? activeStyle : undefined}
                >
                    all
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/clothes'
                className={({ isActive }) =>  
                isActive ? activeStyle : undefined}
                >
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics'
                className={({ isActive }) =>  
                isActive ? activeStyle : undefined}
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/furniture'
                className={({ isActive }) =>  
                isActive ? activeStyle : undefined}
                >
                    Furniture
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/toys'
                className={({ isActive }) =>  
                isActive ? activeStyle : undefined}
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/others'
                className={({ isActive }) =>  
                isActive ? activeStyle : undefined}
                >
                    Others
                </NavLink>
            </li>
        </ul>

        <ul className='flex items-center gap-3'>
            <li className='text-black/40'>
                salomonmartin21@gmail.com
            </li>
            <li>
                <NavLink to='/my-orders'>
                    My orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                    My account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in'>
                    Singin
                </NavLink>
            </li>
            <li>
                <div className='flex'>
                    <ShoppingCartIcon className="h-6 w-6 text-black"/>{context.cartProducts.length}
                </div>
            </li>
        </ul>
    </nav>

)
}

export default NavBar