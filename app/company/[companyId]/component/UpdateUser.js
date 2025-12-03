"use client";
import { useForm } from "react-hook-form";

export default function UpdateUser({closePop, }) {

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        <div className="min-h-0 bg-slate-300 p-12 rounded-lg ">
          <form 
        //   onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label className="text-slate-600 font-bold">Name</label>
              <input
                type="text"
                defaultValue={"aasish"} //defaultvalue instead of value, cuz if value only it will re-render
                className=" focus:outline-0 p-2 rounded-lg bg-white  "
              />
            </div>

            <div className="flex flex-col my-5">
              <label className="text-slate-600 font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className=" focus:outline-0 p-2 rounded-lg bg-white"
              />
              
            </div>

            <div className="flex flex-col">
              <label className="text-slate-600 font-bold">Address</label>
              <input
                type="text"
                placeholder="Enter address"
                className=" focus:outline-0 p-2 rounded-lg bg-white"
              />
            </div>

            <div className="flex flex-col mt-8">
              <button className="bg-blue-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-blue-800 cursor-pointer">
                Update
              </button>

              <button
                onClick={closePop}
                className="bg-blue-600 px-8 py-3 mt-3 rounded-lg text-white font-bold hover:bg-blue-800 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


