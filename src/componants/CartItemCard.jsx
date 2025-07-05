import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { updateQty } from "../features/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import { removeItem } from "../features/cartSlice";
const CartItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const [newqty, setNewQty] = useState(product.count);
  const handleQtyChange = (e) => {
    setNewQty(e.target.value);
    if (newqty >= 1) {
      toast.success(`Updated Quantity`);
     dispatch(updateQty({ id: product.id, count: e.target.value }));
    }
  };

  const handleRemove=()=>{
    toast.success(`removed item ${product.title}`);
    dispatch(removeItem(product))
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md"
      />

      <div>
        <h3 className="text-lg font-semibold text-orange-700">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm">₹{product.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Qty:</label>
        <input
          type="number"
          min="1"
          value={newqty}
          onChange={handleQtyChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button onClick={handleRemove} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
           <MdDeleteForever />
          </button>
      </div>
      <Toaster />
      <div className="text-right font-semibold text-orange-600">
        Total: ₹{newqty * product.price}
      </div>
    </div>
  );
};

export default CartItemCard;
