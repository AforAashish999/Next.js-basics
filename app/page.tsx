// tut1*************************************************************************************************************

// 'use client';
// //it should be at the top of the file
// //its child compoeents doesn't need it, but other page like about.tsx which are independed to it need it


// import { useState } from "react";

// export default function Home() {
//   const handlefunction = () => {
//     alert("I am clicked from function");
//   }
//   const [name, setName] = useState("Aashish Gharti");
//   return (
//    <div>
//     <h1> Aashish Gharti </h1>
//     <h1 className="bg-blue-500 text-white font-semibold p-2 "> Events, Functions and State </h1>
//     <br />
//     <button onClick={()=> alert("I am clicked")}
//      className="bg-purple-900 text-white font-semibold p-2 rounded-xl"> click me! </button>
//      <button  onClick={handlefunction}
//      className="bg-purple-900 text-white font-semibold p-2 rounded-xl ml-5"
//      >fn, click me</button> <br />

//      <h1> I am, {name} </h1>
//      <button onClick={()=> setName("Cultivator")}
//       className="bg-red-500 text-white font-semibold p-2 rounded-xl"
//      > Show true name </button>
//    </div>
//   );
// }

// tut8*************************************************************************************************************
"use client";
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter();
  // const navigate =(name: string)=>{
  //   router.push(name);
  // } or
  const navigate =(name: string) => router.push(name);
  return (
    <>
       <Link href="/about" className='text-blue-500 underline'> Go to About Page </Link>
       <br /> <br />
       <Link href="/login" className='text-blue-500 underline'> Go to Login Page </Link>
       <br /> <br /> <br />

       <button onClick={()=>navigate("/about")}
        className='bg-red-500 text-white font-semibold p-2 rounded-xl'
         > Go to About Page</button> <br /> <br />
       <button onClick={()=>navigate("/login")} 
       className='bg-red-500 text-white font-semibold p-2 rounded-xl'
       > Go to Login Page</button>

       <br /> <br />
       <button onClick={()=>navigate("/studentList")} 
       className='bg-red-500 text-white font-semibold p-2 rounded-xl'
       > Go to StudentList </button>

        <br /> <br />
       <button onClick={()=>navigate("/study")} 
       className='bg-red-500 text-white font-semibold p-2 rounded-xl'
       > catch-all segment concept </button>

        <br /> <br />
       <button onClick={()=>navigate("/quotes")} 
       className='bg-purple-500 text-white font-semibold p-2 rounded-xl'
       > Quotes API </button>

        <br /> <br />
       <button onClick={()=>navigate("/products")} 
       className='bg-purple-500 text-white font-semibold p-2 rounded-xl'
       > Products API </button>
       </>
  )
}

//tut13*************************************************************************************************************
//catch all segments of Route

