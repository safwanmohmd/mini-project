import React, { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import AdminProductCard from "../componants/AdminProductCard";
import { FaPlus   } from 'react-icons/fa'; 
import Navbar from "../componants/Navbar";
import AdminInputs from "../componants/AdminInputs";
import { useState } from "react";
const Home = () => {
  const [addProduct, setAddProduct] = useState(false)
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
<Navbar />
      <div>
        <button
   onClick={()=> setAddProduct(!addProduct)}
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-600 font-semibold hover:bg-green-100 transition"
>
  <FaPlus />
  Add Product
</button>
{addProduct && <AdminInputs />}

        {loading ? (
          <div>Loading</div>
        ) : (
          
          items.map((item) => {
            return <AdminProductCard key={item.id} product={item} />;
          })
        )}
      </div>
    </>
  );
};

export default Home;
