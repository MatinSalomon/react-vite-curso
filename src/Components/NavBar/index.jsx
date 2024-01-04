import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4';

    // Sing out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const handleSignOut = () => {
        const stringfiedSignOut = JSON.stringify(true)
        localStorage.setItem('signOut', stringfiedSignOut)
        context.setSignOut(true)
    }

    //account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
     //Has account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length == 0 : true
    const noAccountInLocalState = parsedAccount ? Object.keys(context.account).length == 0 : true
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return(
                <>
                <li className='text-black/60'>
                    {parsedAccount.email}
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My orders    
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My account    
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}
                    >
                        sign in
                    </NavLink>
                </li>                
            </>
                
            )
        }else{
            return (
            <li>
                <NavLink 
                to='/sign-in'
                className={({ isActive }) => isActive ? activeStyle : undefined}
                onClick={() => handleSignOut()}
                >
                    Sign out
                </NavLink>
            </li>
           
            )
        }
      }




    return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
        <ul className='flex items-center gap-3'>

            <li className='font-semibold text-lg'>
                <NavLink 
                to={`${!isUserSignOut ? '/sign-in' : '/'}`}
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
           {renderView()}
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