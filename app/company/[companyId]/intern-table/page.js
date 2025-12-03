'use client'
// import React from 'react'

// export default function page() {
//   return (
//     <div className='min-h-screen min-w-screen bg-slate-200 p-20'>
//   <table className='border '>
//     <thead >
//       <tr className='bg-slate-300'>
//         <th className='border tracking-wide px-15 py-8'> Title </th>
//          <th className='border tracking-wide px-15 py-5'> Email </th>
//           <th className='border tracking-wide px-30 py-5'> Address </th>
//           <th className='border tracking-wide px-15 py-5'> Actions </th>
//       </tr>

//     </thead>

//   </table>
//     </div>
//   )
// }

import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())
import { useParams } from 'next/navigation';
import { LuFolderPen } from "react-icons/lu";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";

export default function page () {
    const {companyId} = useParams();
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/users`,fetcher)
  if (isLoading) return <h1> page is loading....................</h1>
  if (error)
    return <h1> This page cant be open.................... {error.message} </h1>
//  const filteredUsers = data.filter((x)=> x.id == companyId )
//yoa kina milena vnda chai, x.id, vneko users ko id, 1,2 tyo po access gryo
//tra hmlai companyid chaiyeko ho, so we do x.companyID of users which => we are companring with the companyId->params we aceesed
 const filteredUsers = data.filter((x)=> x.companyId == companyId )
 console.log("company intern list: ", filteredUsers)
  return (
    <>
 
      <div className='min-h-screen '>
        <table >
          <thead>
            <tr className='bg-slate-300'>
              <th className=' tracking-wide px-20 py-8 '> Name </th>
              <th className=' tracking-wide px-25 py-5'> Email </th>
              <th className=' tracking-wide px-20 py-5'> Address </th>
              <th className=' tracking-wide px-15 py-5'> Actions </th>
            </tr>
          </thead>

          <tbody className='bg-white'>
            {filteredUsers.map(applicant => (
              <tr key={applicant.id}>
                <td className='border-gray-200 border-b py-3 px-5 '> {applicant.name} </td>
                <td className='border-gray-200 border-b p-3 '> {applicant.email} </td>
                <td className='border-gray-200 border-b p-3'> {applicant.address} </td>
                <td className='border-gray-200 border-b p-3 flex justify-around '>
                    <div>
                     <button className='cursor-pointer'> <FaRegEye className='text-slate-500'/> </button>
                    </div>
                   <div>
                     <button className='cursor-pointer'> <LuFolderPen className='text-blue-600' /> </button>
                   </div>
                 <div>
                 <button className='cursor-pointer'> <RiDeleteBin6Fill className='text-red-600' /> </button>
                 </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  )
}
