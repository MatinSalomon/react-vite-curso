import {ChevronRightIcon} from '@heroicons/react/24/solid'



const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

    return (
        <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80">
           <div className='flex justify-between w-full '>
            <p className='flex flex-col'>
                <span className='font-light'>01.02.23</span>
                <span className='font-light'>articles: {totalProducts}</span>
            </p>
            <p className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronRightIcon  className='w-6 h-6 text-black'/>
           </p>
           </div>
        </div>
    )
}


export default OrdersCard