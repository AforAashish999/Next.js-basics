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

export default function page () {
  const { companyId } = useParams()
    const[addForm, setAddForm] = useState(null);
    const[showUpdate, setShowUpdate] = useState(null);
    const[viewDetails, setViewDetails] = useState(null);
  
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/users`,fetcher)
  if (isLoading) return <h1> page is loading....................</h1>
  if (error)
    return <h1> This page cant be open.................... {error.message} </h1>
  //  const filteredUsers = data.filter((x)=> x.id == companyId )
  //yoa kina milena vnda chai, x.id, vneko users ko id, 1,2 tyo po access gryo
  //tra hmlai companyid chaiyeko ho, so we do x.companyID of users which => we are companring with the companyId->params we aceesed
  const filteredUsers = data.filter( (x) => x.companyId == companyId)
  console.log('company intern list: ', filteredUsers)


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
            {filteredUsers.map(applicant => (
              <tr key={applicant.id}>
                <td className='border-gray-200 border-b py-3 px-5 '>
                  {' '}
                  {applicant.name}{' '}
                </td>
                <td className='border-gray-200 border-b p-3 '>
                  {' '}
                  {applicant.email}{' '}
                </td>
                <td className='border-gray-200 border-b p-3'>
                  {' '}
                  {applicant.address}{' '}
                </td>
                <td className='border-gray-200 border-b p-3 flex justify-around '>

                  {/* VIEW BUTTON */}
                  <div>
                    <button onClick={()=>setViewDetails(applicant)}
                     className='cursor-pointer'>
                      {' '}
                      <FaRegEye className='text-slate-500' />{' '}
                    </button>
                  </div>

                  {/* UPDATE BUTTON*/}
                  <div>
                    <button onClick={()=> setShowUpdate(applicant)}
                    className='cursor-pointer transition-all duration-200 hover:text-blue-900 hover:scale-120'>
                      {' '}
                      <LuFolderPen className='text-blue-600' />{' '}
                    </button>
                  </div>
                  <div>
                    {/* DELETE BUTTON */}
                    {/*  transition-all duration-300 hover:scale-105 */}
                    {/* <button className='cursor-pointer transition-all duration-600 hover:-rotate-180'>
                      {' '}
                      <RiDeleteBin6Fill className='text-red-600' />{' '}
                    </button> */}
                    <DelUser
                     id={applicant.id} />

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
              <UserDetails id={viewDetails.id} />
              {/* i cant make userdetails server component as it showed error here */}
            </div>
          )
        }
      
    </Suspense>
  )
}
