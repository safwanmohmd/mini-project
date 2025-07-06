import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from '../componants/ProductCard';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import { filterProducts } from "../features/productSlice";
const Menu = () => {
    const { filtered, loading } = useSelector((state) => state.products);
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch()
    useEffect(()=>{
 dispatch(filterProducts());  
    },[])
  return (
    
    <> 
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen`}>
  <Navbar />
  <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-6">
        {loading ? (
          <div>Loading</div>
        ) : (
          filtered.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })
        )}
      </div>
      </div>
        <Footer />
    </>
  )
}

export default Menu