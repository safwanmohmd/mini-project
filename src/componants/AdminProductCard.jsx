import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import { editProduct, deleteProduct } from "../features/productSlice";

const AdminProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const cartItems = useSelector((state) => state.products.items);

  const [editMode, setEditMode] = useState(false);
  const [editAmount, setEditAmount] = useState(product.price);
  const [title, setTitle] = useState(product.title);

  const handleEdit = () => {
    toast.success("Updated product successfully");
    dispatch(editProduct({ id: product.id, price: editAmount, title }));
    setEditMode(false);
  };

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <Toaster />

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Product list is empty.</p>
      ) : (
        <div className="space-y-6">
          <div
            key={product.id}
            className={`flex flex-col sm:flex-row justify-between items-center shadow-md rounded p-4 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="font-semibold">
                  {editMode ? (
                    <input
                      className={`w-30 px-2 py-1 border rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-800"
                      }`}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="Enter title"
                    />
                  ) : (
                    product.title.slice(0, 40)
                  )}
                </h2>
                <p className="text-sm text-gray-500">
                  {editMode ? (
                    <input
                      className={`w-20 px-2 py-1 border rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-800"
                      }`}
                      value={editAmount}
                      onChange={(e) => setEditAmount(e.target.value)}
                      type="text"
                      placeholder="Enter amount"
                    />
                  ) : (
                    `Price: ${product.price}`
                  )}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-4 sm:mt-0">
              {editMode ? (
                <>
                  <button
                    onClick={handleEdit}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      dispatch(deleteProduct(product));
                      toast.success("Deleted product successfully");
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductCard;
