'use client'
import useSWR from 'swr'
import { useState } from 'react'
const fetcher = url => fetch(url).then(res => res.json())
import { useParams } from 'next/navigation'
import { LuFolderPen } from 'react-icons/lu'
import { FaRegEye } from 'react-icons/fa6'
import { Suspense } from 'react'
import { IoPersonAdd } from 'react-icons/io5'
import AddUser from '../component/AddUser'
import DelUser from '../component/DelUser'
import UpdateUser from '../component/UpdateUser'
import UserDetails from '../component/UserDetails'
import Search from '../component/Search'
import Sort from '../component/Sort'
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";

export default function internTable () {
  const { companyId } = useParams()
    const[addForm, setAddForm] = useState(null);
    const[showUpdate, setShowUpdate] = useState(null);
    const[viewDetails, setViewDetails] = useState(null);
    const[query, setQuery] = useState("");
    const[sort, setSort] = useState("");
    const[currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
  
  const { data, error, isLoading, mutuate } = useSWR(`${process.env.NEXT_PUBLIC_API}/users`,fetcher)
  if (isLoading) return <h1> page is loading....................</h1>
  if (error)
    return <h1> This page cant be open.................... {error.message} </h1>
  //  const filteredUsers = data.filter((x)=> x.id == companyId )
  //yoa kina milena vnda chai, x.id, vneko users ko id, 1,2 tyo po access gryo
  //tra hmlai companyid chaiyeko ho, so we do x.companyID of users which => we are companring with the companyId->params we aceesed
  // const filteredUsers = data.filter( (x) => x.companyId == companyId)
  //which companyId is which and comparing to companyId
  const filteredUsers = data
  .filter(user => user.companyId == companyId)
  .filter(user => user.name.toLowerCase().includes(query.toLowerCase()));

  //for sorting logic
  if(sort === "asc" ){
    filteredUsers.sort((a,b) => a.name.localeCompare(b.name))
    console.log("sorting logic was used")
  }
  if(sort === "desc"){
    filteredUsers.sort((a,b) => b.name.localeCompare(a.name))
  }

  console.log('company intern list: ', filteredUsers)

    // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

   // Reset to page 1 if query changes
  const handleSearch = (value) => {
    setQuery(value)
    setCurrentPage(1)
  }

  const pageNumbers = []
for(let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i)
}


  return (
    <Suspense fallback={<div>Please wait</div>}>
      <div className='min-h-screen  flex flex-col '>

          {/* add new intern button */}
        <div className='flex justify-end mb-10 '> 
        <button onClick={()=>setAddForm(companyId)}
         className='flex items-center  px-5 py-3 gap-2 bg-blue-700 rounded-lg cursor-pointer
         transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl/20 '>
            <IoPersonAdd className='text-white size-5' />
        <h2 className='text- text-white'> Add New Intern </h2>
        </button>
        </div>
        {/* SEARCH BAR AND SORTING BAR */}
        <div className='flex justify-between mb-5'>
          <Search query={query} setQuery={setQuery} />
          <Sort sort={sort} setSort={setSort} />
        </div>
        
        <table className='border-separate border-spacing-0 rounded-lg overflow-hidden '>
          <thead >
            <tr className='bg-slate-300'>
              <th className=' tracking-wide px-20 py-8 '> Name </th>
              <th className=' tracking-wide px-25 py-5'> Email </th>
              <th className=' tracking-wide px-20 py-5'> Address </th>
              <th className=' tracking-wide px-15 py-5'> Actions </th>
            </tr>
          </thead>
          <tbody className='bg-white '>
          {
              paginatedUsers.length === 0? (
                <tr>  
                  <td className='colSpan-4 p-40' colSpan={4}>
                    <div className='flex items-center justify-center gap-5 '> 
                    <BsFillEmojiSmileUpsideDownFill className='size-15' /> 
                    <h2 className='text-5xl'> NO User Found </h2> 
                    </div> </td>
                </tr>
              ):
            paginatedUsers.map(applicant => (
              <tr key={applicant.id}>
                <td className='border-gray-200 border-b py-3 px-5 '>{applicant.name}</td>
                <td className='border-gray-200 border-b p-3 '>{applicant.email}</td>
                <td className='border-gray-200 border-b p-3'> {applicant.address} </td>
                <td className='border-gray-200 border-b p-3 flex justify-around '>
                  {/* VIEW BUTTON */}
                  <div>
                    <button onClick={()=>setViewDetails(applicant)}
                     className='cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70'>
                      <FaRegEye className='text-slate-500' />
                    </button>
                  </div>
                  {/* UPDATE BUTTON*/}
                  <div>
                    <button onClick={()=> setShowUpdate(applicant)}
                    className='cursor-pointer transition-all duration-200 hover:text-blue-900 hover:scale-120'>
                      <LuFolderPen className='text-blue-600 ' />
                    </button>
                  </div>
                  <div>
                    {/* DELETE BUTTON */}
                    <DelUser
                     id={applicant.id} 
                     />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* Pagination Controls */}
      <div className='flex justify-center gap-4 mt-5'>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className='bg-gray-300 px-4 py-2 rounded disabled:opacity-50 cursor-pointer '
        >
          Previous
        </button>
        
            {pageNumbers.map(num => (
    <button 
      key={num} 
      onClick={() => setCurrentPage(num)}
      className={`px-3 py-1 rounded ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
      {num}
    </button>
  ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className='bg-gray-300 px-4 py-2 rounded disabled:opacity-50 cursor-pointer'
        >
          Next
        </button>
      </div>
      </div>
        {/* Registration Form Popup */}
        {
          addForm && (
            <div className='fixed inset-0'> 
              <AddUser 
              companyId={companyId}
               closePop={()=>setAddForm(null)} />
            </div>
           
          )
        }
        {/* Update form Popup */}
        {
          showUpdate && (
            <div className='fixed inset-0'> 
            <UpdateUser 
            closePop={()=>setShowUpdate(null)} 
            id={showUpdate.id}
             name={showUpdate.name}
              email={showUpdate.email} 
              address={showUpdate.address}/>
            </div>
          )
        }
        {/* VIEW DETAILS */}
        {
          viewDetails && (
            <div className='fixed inset-0'>
              <UserDetails id={viewDetails.id} closePop={()=>setViewDetails(null)} />
              {/* i cant make userdetails server component as it showed error here */}
            </div>
          )
        }
      
    </Suspense>
  )
}


//not using filtered users anymore as it already sends the filtered data through api,

// import useSWR from 'swr'
// import { useState, useEffect } from 'react'
// const fetcher = url => fetch(url).then(res => res.json())
// import { useParams } from 'next/navigation'
// import { LuFolderPen } from 'react-icons/lu'
// import { FaRegEye } from 'react-icons/fa6'
// import { Suspense } from 'react'
// import { IoPersonAdd } from 'react-icons/io5'
// import AddUser from '../component/AddUser'
// import DelUser from '../component/DelUser'
// import UpdateUser from '../component/UpdateUser'
// import UserDetails from '../component/UserDetails'
// import Search from '../component/Search'
// import Sort from '../component/Sort'
// import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";



//  function useDebounce(value, delay){
//     const[debouncedValue, setDebouncedValue] = useState(value);
//     useEffect( ()=>{
//       const timer = setTimeout( ()=> setDebouncedValue(value), delay);
//       return () => clearTimeout(timer);
//     }, [value, delay] )
//     return debouncedValue;
//   }


// export default function internTable () {
//   const { companyId } = useParams()
//     const[addForm, setAddForm] = useState(null);
//     const[showUpdate, setShowUpdate] = useState(null);
//     const[viewDetails, setViewDetails] = useState(null);
//     const[query, setQuery] = useState("");
//     const[sort, setSort] = useState("");
//     const debouncedQuery = useDebounce(query, 500);

//   const { data, error, isLoading, mutate } = useSWR( companyId
//     ? `${process.env.NEXT_PUBLIC_API}/users?companyId=${companyId}&name_like=${debouncedQuery}`
//     : null,
//   fetcher
// );
//   if (isLoading) return <h1> page is loading....................</h1>
//   if (error)
//     return <h1> This page cant be open.................... {error.message} </h1>
// const filteredUsers = data || [];

//   return (
//     <Suspense fallback={<div>Please wait</div>}>
//       <div className='min-h-screen  flex flex-col '>

//           {/* add new intern button */}
//         <div className='flex justify-end mb-10 '> 
//         <button onClick={()=>setAddForm(companyId)}
//          className='flex items-center  px-5 py-3 gap-2 bg-blue-700 rounded-lg cursor-pointer
//          transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl/20 '>
//             <IoPersonAdd className='text-white size-5' />
//         <h2 className='text- text-white'> Add New Intern </h2>
//         </button>
//         </div>
//         {/* SEARCH BAR AND SORTING BAR */}
//         <div className='flex justify-between mb-5'>
//           <Search query={query} setQuery={setQuery} />
//           <Sort sort={sort} setSort={setSort} />
//         </div>
        
//         <table className='border-separate border-spacing-0 rounded-lg overflow-hidden '>
//           <thead >
//             <tr className='bg-slate-300'>
//               <th className=' tracking-wide px-20 py-8 '> Name </th>
//               <th className=' tracking-wide px-25 py-5'> Email </th>
//               <th className=' tracking-wide px-20 py-5'> Address </th>
//               <th className=' tracking-wide px-15 py-5'> Actions </th>
//             </tr>
//           </thead>
//           <tbody className='bg-white '>
//           {
//               filteredUsers.length === 0? (
//                 <tr>  
//                   <td className='colSpan-4 p-40' colSpan={4}>
//                     <div className='flex items-center justify-center gap-5 '> 
//                     <BsFillEmojiSmileUpsideDownFill className='size-15' /> 
//                     <h2 className='text-5xl'> NO User Found </h2> 
//                     </div> </td>
//                 </tr>
//               ):
//             filteredUsers.map(applicant => (
//               <tr key={applicant.id}>
//                 <td className='border-gray-200 border-b py-3 px-5 '>{applicant.name}</td>
//                 <td className='border-gray-200 border-b p-3 '>{applicant.email}</td>
//                 <td className='border-gray-200 border-b p-3'> {applicant.address} </td>
//                 <td className='border-gray-200 border-b p-3 flex justify-around '>
//                   {/* VIEW BUTTON */}
//                   <div>
//                     <button onClick={()=>setViewDetails(applicant)}
//                      className='cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70'>
//                       <FaRegEye className='text-slate-500' />
//                     </button>
//                   </div>
//                   {/* UPDATE BUTTON*/}
//                   <div>
//                     <button onClick={()=> setShowUpdate(applicant)}
//                     className='cursor-pointer transition-all duration-200 hover:text-blue-900 hover:scale-120'>
//                       <LuFolderPen className='text-blue-600 ' />
//                     </button>
//                   </div>
//                   <div>
//                     {/* DELETE BUTTON */}
//                     <DelUser
//                      id={applicant.id} 
//                      />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//         {/* Registration Form Popup */}
//         {
//           addForm && (
//             <div className='fixed inset-0'> 
//               <AddUser 
//               companyId={companyId}
//                closePop={()=>setAddForm(null)} />
//             </div>
           
//           )
//         }
//         {/* Update form Popup */}
//         {
//           showUpdate && (
//             <div className='fixed inset-0'> 
//             <UpdateUser 
//             closePop={()=>setShowUpdate(null)} 
//             id={showUpdate.id}
//              name={showUpdate.name}
//               email={showUpdate.email} 
//               address={showUpdate.address}/>
//             </div>
//           )
//         }
//         {/* VIEW DETAILS */}
//         {
//           viewDetails && (
//             <div className='fixed inset-0'>
//               <UserDetails id={viewDetails.id} closePop={()=>setViewDetails(null)} />
//               {/* i cant make userdetails server component as it showed error here */}
//             </div>
//           )
//         }
      
//     </Suspense>
//   )
// }
