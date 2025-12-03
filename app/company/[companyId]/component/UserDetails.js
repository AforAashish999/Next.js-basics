'use client';
import useSWR from "swr";
const fetcher = url => fetch(url).then(res=>res.json())
import { FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export default  function userDetails({id}) {
    const{data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API}/users/${id}`, fetcher);
     if (isLoading) return <h1> page is loading....................</h1>
  if (error)
    return <h1> This page cant be open.................... {error.message} </h1>
// const response = await fetch(`${proces.env.NEXT_PUBLIC_API}/users/${id}`)
// const data = await fetch(response.json());
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        <div className="min-h-0 bg-slate-300 p-12 rounded-lg ">
                    <div>
                        <FaUser /> 
                       <h2> {data.name} </h2>  
                    </div>

                     <div>
                     <MdMarkEmailUnread />
                       <h2>{data.email} </h2>  
                    </div>
                    <div>
                     <FaHome />
                       <h2>{data.address} </h2>  
                    </div>   

                    
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


