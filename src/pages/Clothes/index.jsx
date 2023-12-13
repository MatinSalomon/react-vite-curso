import React from 'react'
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import Card from '../../Components/Card'

function Clothes() {
  const context = useContext(ShoppingCartContext)

  
  const renderClothes = () =>{
  const clothes = context.items?.filter(item => item.category.name.includes('Clothes'));
  const clothesFilter = clothes?.filter(item => item.title.includes(context.searchByTittle));

  if (clothesFilter?.length > 0) { 
    return  clothesFilter?.map(item => <Card key={item.id} data={item} />)    
  }else{ 
    return  <p>No items found</p> 
  }   
    
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Clothes</h1>
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
        {renderClothes()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Clothes