import { createContext, useState, useEffect } from "react";
 
export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
    const accountInLocalStorage  = localStorage.getItem('account')
    const signOutInLocalStorage  = localStorage.getItem('singOut')
    let parsedAccount
    let parsedSignOut

    if(accountInLocalStorage){
        parsedAccount = JSON.parse(accountInLocalStorage)
    } else {
        parsedAccount = {}
    }
    if(signOutInLocalStorage){
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    //product Detail | open/close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // product detail | show product
    const [productToShow, setProductToShow] = useState({})

    //shoppi cart | add product to cart
    const [cartProducts, setCartProducts] = useState([])

    //checkput side menu | open/close 
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)
    
    // Shopping Cart | Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

     // Get products by search
     const [searchByTittle, setSearchByTittle] = useState("")


    useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
    },[])

    const filteredItemsByTittle = (items, searchByTittle) => {
     return items?.filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
    } 

    useEffect(() => {
        if(searchByTittle){
            setFilteredItems(filteredItemsByTittle(items, searchByTittle))
        }
        },[items, searchByTittle])


    const [account, setAccount] = useState({}) 

    const [signOut, setSignOut] = useState(false) 

    return(
        <ShoppingCartContext.Provider 
        value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            setProductToShow,
            productToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenu,
            setIsCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            setOrder,
            order,
            items,
            setItems,
            searchByTittle,
            setSearchByTittle,
            filteredItems, 
            setFilteredItems,
            account,
            setAccount,
            signOut,
            setSignOut, 
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}