import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import CartItemCard from '../componants/CartItemCard';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  const total = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <>
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </button>
      </div>

      <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
        {cartProducts.length === 0 ? (
          <p className="text-center col-span-full">Your cart is empty.</p>
        ) : (
          cartProducts.map((item) => (
            <CartItemCard key={item.id} product={item} />
          ))
        )}
      </div>

      {cartProducts.length > 0 && (
        <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-xl w-full max-w-md mx-auto mt-8 mb-8">
          <div className="text-xl font-semibold text-gray-800">
            Total: ₹{total.toFixed(2)}
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
