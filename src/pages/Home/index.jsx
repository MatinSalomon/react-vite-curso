import React from 'react'
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
function Home() {
  const context = useContext(ShoppingCartContext)
  

  const renderView = () => {
    if  (context.searchByTittle?.length > 0) {

        if(context.filteredItems?.length > 0) {
          return (
            context.filteredItems?.map(item => 
            <Card key={item.id} data={item} />
          ))
        }else {
          return <h1>No results found</h1>
        }


    } else {
      return (
      context.items?.map(item => 
      <Card key={item.id} data={item} />
      ))  
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input
       type="text" 
       placeholder='search a product' 
       className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
       onChange={e => context.setSearchByTittle(e.target.value)}
       value={context.searchByTittle}
       />
      <div
      className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'
      >
        { renderView() }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home