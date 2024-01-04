import React, { useContext, useState, useRef} from 'react'
import { Link, Navigate } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'


function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  //account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  //Has account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length == 0 : true
  const noAccountInLocalState = parsedAccount ? Object.keys(context.account).length == 0 : true
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }


  const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
      name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
     // Create account
     const stringifiedAccount = JSON.stringify(data)
     localStorage.setItem('account', stringifiedAccount)
     context.setAccount(data)
     // Sign In
     handleSignIn()
  }

  
  
  const renderLogIn = () => {
    return(
      <>
      <h1 className='font-bold text-3xl mb-6'>Sing In</h1>
      <form className="flex flex-col gap-4 w-80">
                <label className="flex flex-col gap-1">
                    Email:
                    <input 
                    type="email" 
                    name="email" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    value={parsedAccount?.email}
                    disabled='disabled'
                   />
                </label>
                <label className="flex flex-col gap-1">
                    Password:
                    <input 
                    type="password" 
                    name="password" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    value={parsedAccount?.password}
                    disabled='disabled'
                    />
                </label>
                <Link 
                  to="/" 
                >
                  <button 
                  className="bg-black text-white text-lg w-full rounded-lg p-3 mb-4"
                  onClick={() => handleSignIn()}  
                  disabled={!hasUserAnAccount}
                  >
                    Sign In
                  </button>
                </Link> 
                <button 
                className="bg-white text-black text-lg w-full   border border-black rounded-lg p-3 mb-4"
                onClick={() => setView('create-user-info')}
                disabled={hasUserAnAccount}
                >
                    Sign Up
                  </button>
            </form>
          </>
      )
  }
  const renderCreateUserInfo = () => {
    return(
      <>
       <h1 className='font-bold text-3xl mb-6'>Sing Up</h1>
      <form ref={form} className="flex flex-col gap-4 w-80">
                <label className="flex flex-col gap-1">
                    Name:
                    <input 
                    type="name" 
                    name="name" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    defaultValue={parsedAccount?.name}
                   />
                </label>
                <label className="flex flex-col gap-1">
                    Email:
                    <input 
                    type="email" 
                    name="email" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    defaultValue={parsedAccount?.email}
                   />
                </label>
                <label className="flex flex-col gap-1">
                    Password:
                    <input 
                    type="password" 
                    name="password" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    defaultValue={parsedAccount?.password}
                    />
                </label>
                <Link 
                  to="/" >
                  <button 
                  type="submit" 
                  className="bg-black text-white text-lg w-full rounded-lg p-3 mb-4"
                  onClick={() => createAnAccount()}
                  >
                    Create
                  </button>
                </Link> 
            </form>
            </>
      )
      
  }

  const renderView = () => view == 'create-user-info' ? renderCreateUserInfo() : renderLogIn(); 
  
  return (
    <Layout>
        {renderView()}
    </Layout>
  )
}

export default SignIn