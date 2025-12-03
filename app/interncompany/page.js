'use client'
import useSWR from 'swr'
import { useState } from 'react'
import RegistrationForm from '../component/RegistrationForm'
import ViewIntern from '../component/ViewIntern'

const fetcher = url => fetch(url).then(res => res.json())

export default function page() {
    //   const [showForm, setShowForm] = useState(false); => this opened both forms
    const [formId, setFormId] = useState(null)
    const [showApplicants, setShowApplicants] = useState(null);

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/internships`,
        fetcher
    )
    if (isLoading) return <h1> page is loading....................</h1>
    if (error)
        return <h1> This page cant be open.................... {error.message} </h1>

      // Find selected company for the 
  const selectedCompany = data.find((c) => c.id === formId);
   const viewCompany = data.find((c) => c.id === showApplicants);
    return (
        <div className=' bg-linear-to-r from-red-500 to-blue-700'>
            <div className='bg flex justify-center p-5 '>
                <h1 className='text-white text-4xl font-semibold  '>
                    {' '}
                    Internship Management
                </h1>
            </div>

            <div className='flex p-30 justify-between items-center  min-h-screen '>
                {data.map(company => (
                    <div
                        key={company.id}
                        className='text-white border-gray-200 border-2 rounded-lg min-h-90 w-100 p-5 flex flex-col justify-around '
                    >
                        <h1 className='text-center text-3xl pb-4 font-bold underline'>
                            {' '}
                            {company.company}{' '}
                        </h1>
                        <h1 className=''>Internship type: {company.title} </h1>
                        <h1 className=''>
                            location: <span> {company.location} </span>{' '}
                        </h1>
                        <h1> Duration: {company.duration} </h1>
                        <h1> Pay: {company.stipend} </h1>
                        <h1> Takeaway: {company.description} </h1>
                        <h1>
                            {' '}
                            Internship Requirements:
                            <ul className='list-disc pl-10'>
                                {company.requirements.map((point, index) => (
                                    <li key={index}> {point} </li>
                                ))}
                            </ul>
                        </h1>

                        <button
                            onClick={() => setFormId(company.id)}
                            className='bg-linear-to-r from-blue-600 to-red-800 font-bold rounded-2xl p-2 mt-2   cursor-pointer '
                        >
                            Add Applicants
                        </button>

                        <button
                              onClick={()=>setShowApplicants(company.id)}
                            className='bg-linear-to-r from-blue-600 to-red-800 rounded-2xl p-2 mt-2 font-bold cursor-pointer'
                        >
                            View Applicants
                        </button>

                        <button
                            //   onClick={()=>}
                            className='bg-linear-to-r from-blue-500 to-red-700 rounded-2xl p-2 mt-2 font-bold cursor-pointer '
                        >
                            Delete Applicants
                        </button>
                    </div>
                ))}
            {formId && (
              <div className="fixed z-50  ">
                {/* <button 
        onClick={() => setFormId(null)}
        className="a bg-white p-2 rounded-full shadow" > close </button> */}
                <RegistrationForm 
                companyId={selectedCompany.id}
            companyName={selectedCompany.company}
            onClose = {()=>setFormId(null)} />
              </div>
            )}

            {
                showApplicants && (
                    <div>
                        <button onClick={()=>setShowApplicants(null)} className='bg-black text-white'
                            > Close </button>
                        <ViewIntern 
                         company={viewCompany.id} />
                    </div>
                )
            }

        </div>
            </div>

    )
}


// 'use client'
// import useSWR from 'swr'
// import { useRouter } from 'next/navigation'

// const fetcher = url => fetch(url).then(res => res.json())

// export default function page() {
//      const router = useRouter();
     
//     const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/internships`, fetcher)
//     if (isLoading) return <h1> page is loading....................</h1>
//     if (error)
//         return <h1> This page cant be open.................... {error.message} </h1>

   
//     const navigate = (path) => {
//         router.push( "/company" + path);
//     }
//     return (
//         <div className='min-h-screen p-10  ' >
//             <div className='flex justify-center text-3xl mb-10 '>
//                 <h1> List of Internships </h1>
//             </div>

//             <div>
//                 {
//                     data.map((company) => (
//                         <div key={company.id} className='border-gray-300 border mb-15 '>

//                             <div className='flex justify-center p-8 border-gray-300 border-b bg-gray-200 '>
//                                 <h1 className='text-4xl font-semibold'> {company.company} </h1>
//                             </div>

//                             <div className='flex justify-around p-6 '>
//                                 <h1 className='text-2xl font- font-roboto'> {company.title} </h1>
//                                 <h1 className='font-bold text-xl'>Location: <span className='font-normal'> {company.location} </span>  </h1>
//                             </div>

//                             <div className=' p-5'>

//                                 <table className='min-w-full border border-gray-300 border-collapse'>
//                                     <thead>
//                                         <tr className='bg-gray-100'>
//                                             <th className='border border-gray-300 px-5 py-3 text-left'> Duration</th>
//                                             <th className='border border-gray-300 px-4 py-2 text-left'> Stipend</th>
//                                             <th className='border border-gray-300 px-4 py-2 text-left'> Description</th>
//                                             <th className='border border-gray-300 px-4 py-2 text-left'> Requirements </th>
//                                         </tr>
//                                     </thead>

//                                     <tbody>
//                                         <tr>
//                                             <td className='border border-gray-300 px-4 py-2 text-left'> {company.duration} </td>
//                                             <td className='border border-gray-300 px-4 py-2 text-left'> {company.stipend} </td>
//                                             <td className='border border-gray-300 px-4 py-2 text-left'> {company.description} </td>
//                                             <td className='border border-gray-300 px-4 py-2 text-left'>
//                                                 <ul className='list-disc pl-5 space-y-1'>
//                                                     {company.requirements.map((point, index) => (
//                                                         <li key={index} > {point} </li>
//                                                     ))}
//                                                 </ul>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>

//                             <div className='p-5 bg-gray-100'>
//                                 <button
//                                  onClick={()=>navigate(company.id)}
//                                  className='bg-blue-500 text-white font-semibold px-8 py-4 hover:bg-blue-700 cursor-pointer'> 
//                                     View Details</button>
//                             </div>

//                         </div>
//                     ))
//                 }
//             </div>


//         </div>


//     )
// }
