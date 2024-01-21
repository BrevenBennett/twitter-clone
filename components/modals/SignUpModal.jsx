"use client";
import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  function handleSignUp() {

  }

  return (
    <>
      <button
        className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">Or</h1>
            <h1 className="mt-4 font-bold text-4xl">
              Create Your Account
            </h1>
            <input
              placeholder="Full Name"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type="email"
            />
            <input
              placeholder="Email"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type="password"
            />
            <input
              placeholder="Password"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type="text"
            />
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
