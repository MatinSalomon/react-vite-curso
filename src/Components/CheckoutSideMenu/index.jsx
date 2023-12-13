import './style.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BackspaceIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter( product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            data: '22.11.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return(
        <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'> My order </h2>
                <div
                    onClick={() => context.closeCheckoutSideMenu()}
                    className='cursor-pointer'
                >
                    <BackspaceIcon className="h-6 w-6 text-black" />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1 ' >
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key = {product.id}
                    id = {product.id}
                    title ={product.title}
                    imageUrl = {product.images}
                    price = {product.price}
                    handleDelete = {handleDelete}
                    /> 
                ))
            }
            </div>
            <div className='px-6 '>
                <p className='flex justify-between items-center mb-3'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 mb-5 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu