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
      toast.success(`${product.title} - Added To Cart!`);
      dispatch(addToCart(product));
    }
  };

  return (
    <div
      className={`mt-3 max-w-sm rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl border ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-orange-200 text-gray-800"
      }`}
    >
      <div
        className={`h-30 flex items-center justify-center overflow-hidden ${
          darkMode ? "bg-gray-700" : "bg-orange-50"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3
          className={`text-lg font-semibold truncate ${
            darkMode ? "text-orange-400" : "text-orange-700"
          }`}
        >
          {product.title}
        </h3>
        <p className={`text-sm line-clamp-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {product.description ||
            "A mouth-watering meal crafted with fresh ingredients."}
        </p>
        <p
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-orange-500"
          }`}
        >
          ₹{product.price || "199"}
        </p>

        <button
          onClick={handleAddToCart}
          className={`mt-2 w-full py-2 rounded-lg transition duration-300 ${
            darkMode
              ? "bg-gray-900 hover:bg-gray-700"
              : "bg-orange-500 hover:bg-orange-600"
          } text-white`}
        >
          Add to cart
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductCard;
