import { useContext } from "react"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (e, productData) => {
        e.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }
    
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id == id).length > 0

        if(isInCart){
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center m-2 items-center bg-black w-6 h-6  rounded-full"
                    >
                    <CheckIcon className="h-4 w-4 text-white"></CheckIcon>
                </div>
            )
            }else{
                return (
                    <div 
                        className="absolute top-0 right-0 flex justify-center m-2 items-center bg-white w-6 h-6  rounded-full"
                        onClick={(e) => addProductsToCart(e, data.data)}
                        >
                            <PlusIcon className="h-4 w-4 text-black"></PlusIcon>
                    </div>
                )
            }
        
    }
    
    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProduct(data.data)}
        >
            <figure 
            className="relative mb-3 w-full h-4/5"
            >
                <span 
                className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"
                >
                    {data.data.category.name}
                </span>
                <img 
                className='w-full h-full object-cover rounded-lg'
                src={data.data.images[0]} 
                alt={data.data.title}
                >
                </img>
                {renderIcon(data.data.id)}
            </figure>
            <p 
            className="flex justify-between items-center"
            >
                <span 
                className="text-sm font-light "
                >
                    {data.data.title}
                </span>
                <span 
                className="text-lg font-bold"
                >
                    ${data.data.price}
                </span>
            </p>
        </div>
    )
}

export default Card