import React from 'react'
import { addToCart } from '../features/cartSlice'
import { useDispatch,useSelector } from 'react-redux'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md border border-orange-200 bg-white transition hover:shadow-xl">
      <div className="h-56 bg-orange-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-orange-700 truncate">{product.name || 'Delicious Dish'}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description || 'A mouth-watering meal crafted with fresh ingredients.'}</p>
        <p className="text-xl font-bold text-orange-600">₹{product.price || '199'}</p>
        <button onClick={()=> dispatch(addToCart(product))} className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">
         Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
