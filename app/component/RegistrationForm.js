"use client"
import { useForm } from "react-hook-form"

//////using SWR mutation

export default function RegistrationForm({ companyId, companyName, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async(data) => {
    try{
      const payload = {
        name: data.name,
        email: data.email,
        companyId,
        companyName
      }
      //now adding data in backend, so we use post method
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
        method: "POST", //=> means telling browser im adding data
        headers: {"Content-Type" : "application/json"}, //tells server we are sending json data
        body: JSON.stringify(payload) // converting js object into string, so that we can store in backend
      })
      if(!res.ok) throw new Error("Failed to submit");

      const result = await res.json();
      console.log("Registered User", result)
      reset();
      onClose();
    }
    catch(err){
      console.error(err),
      alert("Submission Failed")
    }
  }
  // const name = companyName;
  return (
    <div className='h-screen w-screen '>

      <div className='min-h-2/3 w-2/3 rounded-xl p-10 pb-10 bg-white/50 backdrop-blur-md shadow-xl'>

        <form onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full justify-evenly ">
            <div className="flex justify-center "> 
            <h1  className="text-2xl font-bold underline text-slate-600 mb-5"> {companyName} </h1>
            </div>
            <div className="flex flex-col mb-2 "> 
          <label htmlFor="name" className="cursor-pointer text-gray-700" >Name</label>
          <input type="text" id="name" placeholder="Please, enter the name"
            className=" focus:outline-0 p-2 rounded-xl bg-white  "
            {...register("name", { required: "Please fill your name" })} />
          {errors.name && (<p className="text-xs text-red-500 "> {errors.name.message} </p>)}
          </div>

          <div className="flex flex-col">  
          <label htmlFor="email" className="cursor-pointer text-gray-700"> Email </label>
          <input type="email" id="email" placeholder="Please, enter the email"
            className=" focus:outline-0 p-2 rounded-xl bg-white"
            {...register("email", { required: "Please enter valid email" })} />
          {errors.email && (<p className="text-xs text-red-500 "> {errors.email.message} </p>)}
           </div>

        <button 
        className="p-2 text-gray-500 mt-15 mb-5 rounded-xl cursor-pointer bg-white font-bold
         hover:bg-slate-400 hover:text-white ">
           Submit
            </button>
         <button 
          onClick={onClose}
           className="  p-2 text-gray-500 rounded-xl bg-white text font-bold
            hover:bg-slate-400 hover:text-white ">
          Cancel
        </button>
        </form>
      </div>
    </div>
  )
}
