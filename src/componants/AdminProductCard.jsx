import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import { editProduct } from "../features/productSlice";

import { deleteProduct } from "../features/productSlice";

const AdminProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);
 const [editMode,setEditMode] = useState(false)
const [editAmount, setEditAmount] = useState(product.price)
const [title,setTitle] = useState(product.title)
  const cartItems = useSelector((state) => state.products.items);

const handleEdit= ()=>{
  toast.success("updated product successfully");
dispatch(editProduct({id : product.id , price : editAmount, title :title}))
setEditMode(false)
}
  return (
   <div className="p-6">
     
<Toaster/>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">products is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
           
              <div
                key={product.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded p-4"
              >
                
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.title} className="w-20 h-20 object-contain" />
                  <div>
                    <h2 className="font-semibold">{editMode ? (<input className="w-30 px-2 py-1 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="enter the emount"/>) : product.title.slice(0, 40)}</h2>
                    <p className="text-sm text-gray-500">{editMode ? (<input className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={editAmount} onChange={(e)=> setEditAmount(e.target.value)} type="text" placeholder="enter the emount"/> ) : (`Price: ${product.price}`)} </p>
                   
                  </div>
                </div>

                <div className="flex gap-3">

                {editMode ? ( <div className="flex gap-2"><button
                   onClick={handleEdit}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  update
                </button>  <button
                   onClick={() => setEditMode(false)}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  cancel
                </button> </div> ) : (<div className="flex gap-2"> <button
                   onClick={() => { dispatch(deleteProduct(product)),  toast.success("deleted product successfully");}}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button
                  onClick={()=> setEditMode(!editMode)}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Edit
                </button></div>)}
               
                </div>
              </div>
           
          </div>

         
        </>
      )}
    </div>
  );
};

export default AdminProductCard;
