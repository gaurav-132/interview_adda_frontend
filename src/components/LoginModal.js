"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";


const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen}   size="xxl">
        <div className="flex flex-col items-center justify-center p-2 pb-10 bg-[#6F63F6] rounded-lg">
        
        <div className="flex justify-between items-center w-full mb-4 py-2 px-4">
            <h2 className="text-white text-2xl font-bold">InterviewAdda</h2>
            <button 
                className="text-white text-3xl hover:text-red-500 flex items-center justify-center" 
                onClick={onClose}  
            >
                ✖
            </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-xl font-bold" style={{fontSize:26}}>Let's </h2>
          <h3 className="text-xl font-bold" style={{fontSize:26}}>Start Preparation</h3>
          <p className="text-gray-500 text-sm mt-1">Please login or sign up to continue</p>
            <div className="m-4">
                <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg mt-2 focus:outline-none"
                />
                <input
                type="password"
                placeholder="Your Password"
                className="w-full p-3 border rounded-lg mt-2 focus:outline-none"
                />
            </div>
          
            <div  className="m-4">
                <button className="w-full bg-[#6F63F6] text-white p-3 rounded-lg  hover:bg-[#564ccf]" style={{fontWeight:'bold',borderRadius:30}}>
                    Login 
                </button>
            </div>
         
            <div className="m-4">
                <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-lg  hover:bg-gray-100" style={{borderRadius:30}}>
                    {/* <Image src="/images/google.png" alt="Google Logo" width={20} height={20} /> */}
                       <h3 style={{fontWeight:500, color:'#6F63F6'}}>Google</h3> 
                </button>
            </div>

            <p className="text-gray-500 text-sm mt-3">
               Don't Have An Account? <a href="#" style={{color:'#6F63F6'}}>Signup</a>
            </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
