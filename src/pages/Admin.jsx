import React, { useEffect, useState } from "react";
import { fetchProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import AdminProductCard from "../componants/AdminProductCard";
import { FaPlus } from "react-icons/fa";
import Navbar from "../componants/Navbar";
import AdminInputs from "../componants/AdminInputs";

const Admin = () => {
  const [addProduct, setAddProduct] = useState(false);
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen px-4 py-6 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {/* Add Product Button aligned right */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setAddProduct(!addProduct)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition ${
              darkMode
                ? "bg-gray-800 text-green-400 hover:bg-gray-700"
                : "bg-green-50 text-green-600 hover:bg-green-100"
            }`}
          >
            <FaPlus />
            {addProduct ? "Cancel" : "Add Product"}
          </button>
        </div>

        {addProduct && <AdminInputs />}

        {loading ? (
          <div>Loading</div>
        ) : (
          items.map((item) => (
            <AdminProductCard key={item.id} product={item} />
          ))
        )}
      </div>
    </>
  );
};

export default Admin;
