import React from "react";
import Navbar from "../componants/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { clearCart } from "../features/cartSlice";
import Footer from "../componants/Footer";
const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const cartProducts = useSelector((state) => state.cart.cart);
  const total = cartProducts.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const darkMode = useSelector((state) => state.theme.darkMode);
  const handleHome = () => {

    dispatch(clearCart());
    navigate('/')
  };
  return (
    <>
      <div
        className={`min-h-screen p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <Navbar />

        <div className="p-4 text-white">
          <div
            className={`h-screen rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto relative flex flex-col md:flex-row items-stretch transition-all duration-300 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div
              className={`w-full  px-10 py-12 flex flex-col justify-center items-center text-center space-y-6 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
              }`}
            >
              <div className="text-4xl font-bold text-green-500">
                ✅ Order Placed!
              </div>
              <p className="text-lg">
                Thank you for your purchase. Your order has been placed
                successfully.
              </p>
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto text-gray-800 space-y-4">
  <h2 className="text-2xl font-semibold border-b pb-2">Order Summary</h2>
  <div className="space-y-2">
    {cartProducts.map((prods, index) => (
      <div
        key={index}
        className="flex justify-between items-center border-b pb-1 text-sm"
      >
        <span>{prods.title}</span>
        <span className="font-medium">x {prods.count}</span>
      </div>
    ))}
  </div>
  <div className="flex justify-between pt-4 border-t text-lg font-semibold">
    <span>Total</span>
    <span>₹{total}</span>
  </div>
</div>

              <button
                onClick={handleHome}
                className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition duration-200"
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
