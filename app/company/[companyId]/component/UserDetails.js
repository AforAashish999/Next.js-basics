'use client';
import useSWR from "swr";
const fetcher = url => fetch(url).then(res=>res.json())
import { FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export default  function userDetails({id, closePop}) {
    const{data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API}/users/${id}`, fetcher);
     if (isLoading) return <h1> page is loading....................</h1>
  if (error)
    return <h1> This page cant be open.................... {error.message} </h1>
// const response = await fetch(`${proces.env.NEXT_PUBLIC_API}/users/${id}`)
// const data = await fetch(response.json());
  return (
    <>
      <div className="min-h-screen  flex justify-center items-center
                      bg-white/30 backdrop-blur-sm shadow-sm ">
        <div className="min-h-90 bg-slate-200 p-12 rounded-lg flex flex-col justify-around shadow-xl/30 ">
                    <div className="flex items-center gap-4">
                        <FaUser className="size-9" /> 
                       <h2 className="text-2xl"> {data.name} </h2>  
                    </div>

                     <div className="flex items-center gap-4">
                     <MdMarkEmailUnread className="size-9" />
                       <h2 className="text-2xl">{data.email} </h2>  
                    </div>
                    <div className="flex items-center gap-4">
                     <FaHome className="size-9"/>
                       <h2 className="text-2xl">{data.address} </h2>  
                    </div>   
                    <button onClick={closePop} 
                    className="bg-blue-600 mt-10 px-5 py-3 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900">
                       Close </button>

                    
        </div>
      </div>
    </>
  );
}

/*
You're doing:

data.map(...)


But your API call is:

/users/:id


That returns ONE SINGLE OBJECT, not an array.

So .map is not a function because data is:

{
  id: 7,
  name: "Aashish",
  email: "asd@gmail.com",
  address: "Pokhara"
}


Not:

[
  { id: 7, name: "...", ... }
]
*/


