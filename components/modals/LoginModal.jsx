"use client";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <>
      <button
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7] hover:bg-opacity-20"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl">Sign In to Your Account</h1>
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
            <button className="bg-white text-black w-full font-bold text-lg p-2 my-8 rounded-md">
              Sign In
            </button>
            <h1 className="text-center font-bold text-lg">Or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
