import React, { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../componants/ProductCard";
import Navbar from "../componants/Navbar";
import { addUser } from "../features/authSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const existUser = useSelector((state)=>state.auth.userList)
  useEffect(() => {
    dispatch(fetchProducts());

     const exists = existUser.find((x) => x.role == 'admin')
 if(!exists){
dispatch(addUser({user:'admin', pass:'admin@123' , role : 'admin'}))

 }
    
  }, []);
  return (
    <>
<Navbar />
      <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {loading ? (
          <div>Loading</div>
        ) : (
          items.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })
        )}
      </div>
    </>
  );
};

export default Home;
