"use client"
import { useForm } from "react-hook-form"

export default function RegistrationForm({ companyId, companyName, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   reset();
  // }
  const onSubmit = async (data) => {
    try {
      // Payload includes internship info
      const payload = {
        name: data.name,
        email: data.email,
        companyId,
        companyName,
      };

      // POST request to /users
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const result = await res.json();
      console.log("User registered:", result);

      reset(); // clear form
      // onClose(); // close modal
    } catch (err) {
      console.error(err);
      alert("Submission failed!");
    }
  };
  // const name = companyName;
  return (
    <div className='h-screen w-screen  '>

      <div className='h-2/3 w-2/3 rounded-xl pl-10 pr-10 bg-gray-300'>

        <form onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full   justify-evenly ">
            <div className="flex justify-center"> 
            <h1  className="text-2xl font-bold"> name </h1>
            </div>
            <div className="flex flex-col "> 
          <label htmlFor="name" className="cursor-pointer" >Name</label>
          <input type="text" id="name" placeholder="Please, enter the name"
            className="border-2 focus:outline-0 p-2 rounded-xl  "
            {...register("name", { required: "Please fill your name" })} />
          {errors.name && (<p className="text-xs text-red-500 "> {errors.name.message} </p>)}
          </div>

          <div className="flex flex-col">  
          <label htmlFor="email" className="cursor-pointer"> Email </label>
          <input type="email" id="email" placeholder="Please, enter the email"
            className="border-2 focus:outline-0 p-2 rounded-xl "
            {...register("name", { required: "Please fill your name" })} />
          {errors.name && (<p className="text-xs text-red-500 "> {errors.name.message} </p>)}
           </div>

        <button className="p-2 font bold border-2 rounded-xl cursor-pointer hover:bg-black hover:text-white"> Submit </button>
         <button type="button" onClick={onClose} className="bg-gray-300 text-black p-2 rounded">
          Cancel
        </button>
        </form>
      </div>
    </div>
  )
}
