import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate  } from 'react-router-dom'
import { ShoppingCartProvider , initializeLocalStorage , ShoppingCartContext} from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SingIn'
import NavBar from '../../Components/NavBar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import Clothes from '../Clothes'
import Electronics from '../Electronics'
import Furniture from '../Furniture'
import Toys from '../Toys'
import Others from '../Others'
import './App.css'

const AppRoutes = () =>{

  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut


  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Clothes /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Electronics /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/furniture', element: hasUserAnAccount && !isUserSignOut ? <Furniture /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Toys /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Others /> : <Navigate replace to={'/sign-in'} /> },
    {path: "/sign-in", element: <SignIn />},
    {path: "/my-account", element: <MyAccount />},
    {path: "/my-order", element: <MyOrder />},
    {path: "/my-orders", element: <MyOrders />},
    {path: "/*", element: <NotFound />},
  ])

  return routes
}

function App() {
  initializeLocalStorage()

  return (

    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
