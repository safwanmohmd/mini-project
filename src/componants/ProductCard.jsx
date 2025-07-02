import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import toast, { Toaster } from 'react-hot-toast';




const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const loggedUser = useSelector((state) => state.auth.user);
  const handleAddToCart = () => {
    if (!loggedUser) {
      navigate("/login");
    } else {
     toast.success(`${product.title} - Added To Cart!`)
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md border border-orange-200 bg-white transition hover:shadow-xl">
      <div className="h-30 bg-orange-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-orange-700 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description ||
            "A mouth-watering meal crafted with fresh ingredients."}
        </p>
        <p className={`text-xl font-bold ${darkMode ? 'text-gray-900' : 'text-orange-500'}`}>
          ₹{product.price || "199"}
        </p>

      

        <button
          onClick={handleAddToCart}
          className={`mt-2 w-full ${darkMode ? 'bg-gray-900' : 'bg-orange-500'} text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300`}
        >
          Add to cart
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductCard;
