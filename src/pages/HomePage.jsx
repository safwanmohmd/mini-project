import Navbar from "../componants/Navbar";
import { fetchProducts,filterProducts } from "../features/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../componants/ProductCard";
import { addUser } from "../features/authSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);
  const total = cartProducts.reduce((acc, item) => acc + item.price * item.count, 0);

  const { items, loading , filtered} = useSelector((state) => state.products);
  const existUser = useSelector((state) => state.auth.userList);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    dispatch(fetchProducts());
 dispatch(filterProducts());  
    const exists = existUser.find((x) => x.role === "admin");
    if (!exists) {
      dispatch(addUser({ user: "admin", pass: "admin@123", role: "admin" }));
    }
  }, []);

  return (
    <>
    <div className={`min-h-screen p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900" }`} >
      <Navbar />

      <div className=" p-4 text-white"   >
        <div className={`h-screen rounded-3xl overflow-hidden shadow-lg max-w-7xl mx-auto relative flex flex-col md:flex-row items-stretch ${
            darkMode ? "bg-gray-800" : "bg-white"}`}  >
         
          <div className={`w-full md:w-[60%] px-10 py-12 flex flex-col justify-between ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"  }`}
            >
            <div className="max-w-xl space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Order your <br />
                <span
                  className={`font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  favourite Foods
                </span>
              </h1>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Fresh and tasty seafood curry sit amet, consectetur Curabitur
                accumsan auctor pulvinar.
              </p>
              <h2
                className={`text-2xl ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                Total order :{" "}
                <span className="font-bold text-orange-400">{total}$</span>
              </h2>

              <div className="flex items-center space-x-4">
                <Link to="/cart">
                  <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700 transition">
                    🛒 Buy Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[300px] mt-6 pr-2">
              <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  filtered.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`w-full md:w-[40%] relative md:h-auto h-[250px] ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <img
              src="/food.png"
              alt="Food"
              className="w-full h-full object-contain rounded-r-3xl"
            />
            <Link to="/menu">
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
                Go To Menu
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
