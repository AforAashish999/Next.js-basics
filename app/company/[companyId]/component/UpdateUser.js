"use client";
import { useForm } from "react-hook-form";

export default function UpdateUser({closePop, id, name, email, address}) {
  const{register, handleSubmit } = useForm({ defaultValues: {name, email, address} });
  const onSubmit = async(data)=> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(data)
    })
    if(!response.ok) throw new Error("Updation Failed ")
      alert("User Updated");
      window.location.reload();
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center
      bg-white/40 backdrop-blur-sm ">
        <div className="min-h-0 bg-slate-300 p-12 rounded-lg shadow-xl/30 ">
          <form 
          onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label className="text-slate-600 font-bold">Name</label>
              <input {...register("name")} className=" focus:outline-0 p-2 rounded-lg bg-white "/>
            </div>

            <div className="flex flex-col my-5">
              <label className="text-slate-600 font-bold">Email</label>
              <input {...register("email")} className=" focus:outline-0 p-2 rounded-lg bg-white"/>
            </div>

            <div className="flex flex-col">
              <label className="text-slate-600 font-bold">Address</label>
              <input  {...register("address")} className=" focus:outline-0 p-2 rounded-lg bg-white"/>
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


