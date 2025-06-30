import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const AdminInputs = () => {

    
  return (
    <>
    <div className='w-[screen] '>
        <div className="flex items-center justify-center  px-4">
              <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
              
                <form className="space-y-5">
                  <input
                    // onInput={(e) => setUser(e.target.value)}
                    type="text"
                    placeholder="Product title"
                    className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    // onInput={(e) => setPass(e.target.value)}
                    type="text"
                    placeholder="Product Price"
                    className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    // onClick={(e) => handleLogin(e)}
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                  >
                    Create Product
                  </button>
                </form>
              
              </div>
              <Toaster />
            </div>
    </div>
    </>
  )
}

export default AdminInputs