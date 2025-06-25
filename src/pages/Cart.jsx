import React from 'react'
import { addToCart } from '../features/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from '../componants/ProductCard'
import { clearCart } from '../features/cartSlice'
const Cart = ({ product }) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state)=> state.cart.cart)
  return (
    <>
    <button className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition' onClick={()=>dispatch(clearCart())}>Clear</button>
     <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {
          cartProducts.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })
        }
      </div>
    </>
  )
}

export default Cart
