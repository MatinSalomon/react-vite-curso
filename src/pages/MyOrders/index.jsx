import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'


function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      {
        context.order.map( (order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice = {order.totalPrice}
                totalProducts = {order.totalProducts}
              />
            </Link>
          ) 
        
        })
      }
    </Layout>
    
  )
}

export default MyOrders