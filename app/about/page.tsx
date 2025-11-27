'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

export default function about() {
    const router = useRouter();  //1st way
    const navigate = (page: string)=>{   //2nd way
        router.push("/about/" + page)
    }
  
  return (
    <div>This an About page
        <br /> <br />
        <button onClick={()=>router.push("/")} //1st way
            className='bg-red-500 text-white font-semibold p-2 rounded-xl'
            > Go to Home Page</button>
<br /> <br />
<button onClick={()=>navigate("aboutstudent")} 
            className='bg-blue-500 text-white font-semibold p-2 rounded-xl'
            > About Student </button> <br /> <br />

<button onClick={()=>navigate("aboutcollege")} 
            className='bg-blue-500 text-white font-semibold p-2 rounded-xl'
            > About College</button>

    </div>
  )
}
