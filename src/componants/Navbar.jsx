import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa' // Make sure to install react-icons
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cartCount = useSelector((state)=>state.cart.cart.length) // You can replace this with state or Redux value

  return (
    <div className="h-[60px] bg-orange-500 w-full flex items-center justify-between px-6 shadow-md text-white">
      <h1 className="text-xl font-bold">🍽️ Foodie's Hub</h1>

      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/menu" className="hover:underline">Menu</Link>
        <Link to="/login" className="hover:underline">Login</Link>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default Navbar
