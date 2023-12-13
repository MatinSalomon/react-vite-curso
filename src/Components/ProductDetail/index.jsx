import './style.css'
import { useContext } from 'react'
import { BackspaceIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'> Detail </h2>
                <div
                    onClick={() => context.closeProductDetail()}
                    className='cursor-pointer'
                >
                    <BackspaceIcon className="h-6 w-6 text-black" />
                </div>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-50 rounded-lg' 
                    src={context.productToShow.images}
                    alt={context.productToShow.title} 
                />
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                    <span className='font-medium text-md'>{context.productToShow.title}</span>
                    <span className='font-light text-sm'>{context.productToShow.description}</span>
                </p>
            </figure>
        </aside>
    )
}

export default ProductDetail