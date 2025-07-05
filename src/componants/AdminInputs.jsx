import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { createProduct } from '../features/productSlice'; // Adjust path as needed

const AdminInputs = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc || !price || !category || !image) {
      toast.error("Please fill out all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      description: desc,
      price: parseFloat(price),
      image,
      category,
    };

    dispatch(createProduct(newProduct));
    toast.success("Product Created Successfully");

    setTitle('');
    setDesc('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product Name"
          className="px-4 py-2 border border-green-300 rounded-lg"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="px-4 py-2 border border-green-300 rounded-lg"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price (₹)"
          className="px-4 py-2 border border-green-300 rounded-lg"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="px-4 py-2 border border-green-300 rounded-lg"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="px-4 py-2 border border-green-300 rounded-lg lg:col-span-2"
        />
        <button
          type="submit"
          className="col-span-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Create Product
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default AdminInputs;
