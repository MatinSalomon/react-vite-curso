import React from 'react'
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import Card from '../../Components/Card'

function Electronics() {
  const context = useContext(ShoppingCartContext)

  const renderElectronics = () =>{
  const electronics = context.items?.filter(item => item.category.name.includes('Electronics'));
  const electronicsFilter = electronics?.filter(item => item.title.includes(context.searchByTittle));

  if (electronicsFilter?.length > 0) { 
    return  electronicsFilter?.map(item => <Card key={item.id} data={item} />)    
  }else{ 
    return  <p>No items found</p> 
  }  
    
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Electronics</h1>
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
        {renderElectronics()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Electronics