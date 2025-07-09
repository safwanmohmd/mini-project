import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import CartItemCard from '../componants/CartItemCard';
import Navbar from '../componants/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../componants/Footer';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  const darkMode = useSelector((state) => state.theme.darkMode); // You must have a theme slice
  const total = cartProducts.reduce((acc, item) => acc + item.price * item.count, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-gray-100 text-gray-900 min-h-screen'}>
      <Navbar />

      <div className="flex justify-between items-center mb-4 px-4 pt-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
      </div>

      <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
        {cartProducts.length === 0 ? (
          <p className="text-center col-span-full text-lg">Your cart is empty.</p>
        ) : (
          cartProducts.map((item) => (
            <CartItemCard key={item.id} product={item} />
          ))
        )}
      </div>

      {cartProducts.length > 0 && (
        <div className={`flex justify-between items-center p-4 shadow-md rounded-xl w-full max-w-md mx-auto mt-8 mb-8
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          <div className="text-xl font-semibold">
            Total: ₹{total.toFixed(2)}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              Checkout
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
