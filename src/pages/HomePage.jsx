import Navbar from "../componants/Navbar";
import { fetchProducts } from "../features/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../componants/ProductCard";
import { addUser } from "../features/authSlice";
const HomePage = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cart.cart);
  const total = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
  const { items, loading } = useSelector((state) => state.products);
  const existUser = useSelector((state) => state.auth.userList);
  useEffect(() => {
    dispatch(fetchProducts());

    const exists = existUser.find((x) => x.role == "admin");
    if (!exists) {
      dispatch(addUser({ user: "admin", pass: "admin@123", role: "admin" }));
    }
  }, []);
  return (
    <>
       <Navbar /> 
    
      <div className="min-h-screen bg-gray-400 p-4">
        <div className="h-screen rounded-3xl overflow-hidden shadow-lg bg-white max-w-7xl mx-auto relative flex flex-col md:flex-row items-stretch">
          {/* Left Content - 60% */}
          <div className="w-full md:w-[60%] px-10 py-12 bg-gray-50 z-10 flex flex-col justify-between">
            <div className="max-w-xl space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Order your <br />
                <span className="text-gray-600 font-medium">
                  favourite Foods
                </span>
              </h1>
              <p className="text-gray-500">
                Fresh and tasty seafood curry sit amet, consectetur Curabitur
                accumsan auctor pulvinar.
              </p>
              <h2 className="text-2xl text-gray-700">
                Total order :{" "}
                <span className="font-bold text-black">{total}$</span>
              </h2>

              <div className="flex items-center space-x-4">
                <Link to="/cart">
                  <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
                    🛒 Buy Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[300px] mt-6 pr-2">
              <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loading ? (
                  <div>Loading</div>
                ) : (
                  items.map((item) => {
                    return <ProductCard key={item.id} product={item} />;
                  })
                )}
              </div>
            </div>
          </div>

          {/* Right Image - 40% */}
          <div className="w-full md:w-[40%] relative md:h-auto h-[250px]">
            <img
              src="/food.png"
              alt="Salad"
              className="w-full h-full object-contain rounded-r-3xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md">
              Salad ★ 4.7 | ⏱ 10–18 mins
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
