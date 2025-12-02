// // tut1*************************************************************************************************************

// // 'use client';
// // //it should be at the top of the file
// // //its child compoeents doesn't need it, but other page like about.tsx which are independed to it need it


// // import { useState } from "react";

// // export default function Home() {
// //   const handlefunction = () => {
// //     alert("I am clicked from function");
// //   }
// //   const [name, setName] = useState("Aashish Gharti");
// //   return (
// //    <div>
// //     <h1> Aashish Gharti </h1>
// //     <h1 className="bg-blue-500 text-white font-semibold p-2 "> Events, Functions and State </h1>
// //     <br />
// //     <button onClick={()=> alert("I am clicked")}
// //      className="bg-purple-900 text-white font-semibold p-2 rounded-xl"> click me! </button>
// //      <button  onClick={handlefunction}
// //      className="bg-purple-900 text-white font-semibold p-2 rounded-xl ml-5"
// //      >fn, click me</button> <br />

// //      <h1> I am, {name} </h1>
// //      <button onClick={()=> setName("Cultivator")}
// //       className="bg-red-500 text-white font-semibold p-2 rounded-xl"
// //      > Show true name </button>
// //    </div>
// //   );
// // }

// // tut8*************************************************************************************************************
// "use client";
// import Link from 'next/link'
// import React from 'react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image';
// import VercelImage from '../public/vercel.svg';
// import NEXT from '../public/next.svg';

// export default function page() {
//   const router = useRouter();
//   // const navigate =(name: string)=>{
//   //   router.push(name);
//   // } or
//   const navigate =(name: string) => router.push(name);
//    console.log(VercelImage);
// //    {
// //   src: '/_next/static/media/vercel.238827ec.svg',
// //   width: 1155,
// //   height: 1000,
// //   blurWidth: 0,
// //   blurHeight: 0
// // }
// console.log(NEXT);

//   return (
//     <>
//        <Link href="/about" className='text-blue-500 underline'> Go to About Page </Link>
//        <br /> <br />
//        <Link href="/login" className='text-blue-500 underline'> Go to Login Page </Link>
//        <br /> <br /> <br />

//        <button onClick={()=>navigate("/about")}
//         className='bg-red-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//          > Go to About Page</button> <br /> <br />
//        <button onClick={()=>navigate("/login")} 
//        className='bg-red-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Go to Login Page</button>

//        <br /> <br />
//        <button onClick={()=>navigate("/studentList")} 
//        className='bg-red-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Go to StudentList </button>

//         <br /> <br />
//        <button onClick={()=>navigate("/study")} 
//        className='bg-red-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > catch-all segment concept </button>

//         <br /> <br />
//        <button onClick={()=>navigate("/serverapi1")} 
//        className='bg-purple-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > server API 1 </button>

//         <br /> <br />
//        <button onClick={()=>navigate("/serverapi2")} 
//        className='bg-purple-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > server API 2 </button>


//           <br /> <br />
//        <button onClick={()=>navigate("/clientapi1")} 
//        className='bg-green-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > rest Client API1 </button>


//     <br /> <br />
//        <button onClick={()=>navigate("/clientapi2")} 
//        className='bg-green-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        >  Client API2-- Using Client component inside server component </button>


//         <br /> <br />
//        <button onClick={()=>navigate("/clientapi3")} 
//        className='bg-green-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Client API3 using useEffect </button>


//          <br /> <br /> 
//        <button onClick={()=>navigate("/clientapi4")} 
//        className='bg-green-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Client API3 using SWR = stale-while-revalidate </button>

//          <br /> <br /> 
//        <button onClick={()=>navigate("/server-sequential")} 
//        className='bg-purple-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Server API - Sequential Data Fetching </button>

// <br />  <br />
//     <h1 className='bg-gray-400 p-2'>Image optimization in Next.js</h1>
//     <Image src={NEXT} alt="image" />

// <br /> <br />
// <Image src="https://www.pinterest.com/pin/1105985620961463316/" alt="image" width={500} height={300} />


// <Image src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg" alt="image" width={800} height={400} />
   
//    <br />  <br />
//     <h1 className='bg-gray-400 p-2 '>Font optimization in Next.js</h1>




//  <br /> <br /> 
//        <button onClick={()=>navigate("/form")} 
//        className='bg-green-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Form Component </button>


       
//  <br /> <br /> 
//        <button onClick={()=>navigate("/interns")} 
//        className='bg-green-500 text-white font-semibold p-2 rounded-xl cursor-pointer'
//        > Interns </button>

//        </>
       
//   )
// }

// //tut13*************************************************************************************************************
// //catch all segments of Route

'use client'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'

const fetcher = url => fetch(url).then(res => res.json())

export default function page() {
     const router = useRouter();
     
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/internships`, fetcher)
    if (isLoading) return <h1> page is loading....................</h1>
    if (error)
        return <h1> This page cant be open.................... {error.message} </h1>

   
    const navigate = (path) => {
        router.push( "/company/" + path);
    }
//     const navigate = (path) => {
//     router.push(`/company/${path}`);
// }
    return (
        <div className='min-h-screen px-20 py-10  ' >
            <div className='flex justify-center text-3xl mb-10 '>
                <h1> List of Internships </h1>
            </div>

            <div>
                {
                    data.map((company) => (
                        <div key={company.id} className='border-gray-300 border mb-15 '>

                            <div className='flex justify-center p-8 border-gray-300 border-b bg-gray-200 '>
                                <h1 className='text-4xl font-semibold'> {company.company} </h1>
                            </div>

                            <div className='flex justify-around p-6 '>
                                <h1 className='text-2xl font- font-roboto'> {company.title} </h1>
                                <h1 className='font-bold text-xl'>Location: <span className='font-normal'> {company.location} </span>  </h1>
                            </div>

                            <div className=' p-5'>

                                <table className='min-w-full border border-gray-300 border-collapse'>
                                    <thead>
                                        <tr className='bg-gray-100'>
                                            <th className='border border-gray-300 px-5 py-3 text-left'> Duration</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'> Stipend</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'> Description</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'> Requirements </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2 text-left'> {company.duration} </td>
                                            <td className='border border-gray-300 px-4 py-2 text-left'> {company.stipend} </td>
                                            <td className='border border-gray-300 px-4 py-2 text-left'> {company.description} </td>
                                            <td className='border border-gray-300 px-4 py-2 text-left'>
                                                <ul className='list-disc pl-5 space-y-1'>
                                                    {company.requirements.map((point, index) => (
                                                        <li key={index} > {point} </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='p-5 bg-gray-100'>
                                <button
                                 onClick={()=>navigate(company.id)}
                                 className='bg-blue-500 text-white font-semibold px-8 py-4 hover:bg-blue-700 cursor-pointer'> 
                                    View Details</button>
                            </div>

                        </div>
                    ))
                }
            </div>


        </div>


    )
}