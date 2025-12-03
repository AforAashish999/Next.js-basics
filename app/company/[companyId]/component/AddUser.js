"use client";
import { useForm } from "react-hook-form";

export default function AddUser({ companyId, closePop }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        address: data.address,
        //cid , i sent cid={companyId} through props but it didn't work as if i sent cid it will create
        //a  new user with cid, to store companyId: 1or 2 i have to write here exact that input field name
        companyId,
      };
      //adding data in backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed to store data");


      //just checking in console
      const userDetails = await res.json();
      console.log("User Details", userDetails);
      reset();
      closePop();
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Submission Failed");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        <div className="min-h-0 bg-slate-300 p-12 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className="text-slate-600 font-bold">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className=" focus:outline-0 p-2 rounded-lg bg-white  "
                {...register("name", { required: "Please fill your name" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 "> {errors.name.message} </p>
              )}
            </div>

            <div className="flex flex-col my-5">
              <label className="text-slate-600 font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className=" focus:outline-0 p-2 rounded-lg bg-white"
                {...register("email", { required: "Please enter valid email" })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 ">
                  {" "}
                  {errors.email.message}{" "}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-slate-600 font-bold">Address</label>
              <input
                type="text"
                placeholder="Enter address"
                className=" focus:outline-0 p-2 rounded-lg bg-white"
                {...register("address", {
                  required: "Please enter valid address",
                })}
              />
              {errors.address && (
                <p className="text-xs text-red-500 ">
                  {" "}
                  {errors.address.message}{" "}
                </p>
              )}
            </div>

            <div className="flex flex-col mt-8">
              <button className="bg-blue-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-blue-800 cursor-pointer">
                Add
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

/*
{
    "id": "c00a",
    "name": "Samip Bhrata",
    "email": "samip@gmail.com",
    "address": "Bnp-8, Chitwan",
    "cId": "1"
  }

  */
