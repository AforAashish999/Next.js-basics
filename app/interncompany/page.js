'use client'
import useSWR from 'swr'
import { useState } from 'react'
import RegistrationForm from '../component/RegistrationForm'

const fetcher = url => fetch(url).then(res => res.json())

export default function page() {
    //   const [showForm, setShowForm] = useState(false); => this opened both forms
    const [formId, setFormId] = useState(null)

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/internships`,
        fetcher
    )
    if (isLoading) return <h1> page is loading....................</h1>
    if (error)
        return <h1> This page cant be open.................... {error.message} </h1>
  
      // Find selected company for the modal
  const selectedCompany = data.find((c) => c.id === formId);
    return (
        <div className='relative'>
            <div className='bg-black flex justify-center p-5 '>
                <h1 className='text-white text-4xl font-semibold '>
                    {' '}
                    Internship Management
                </h1>
            </div>

            <div className='flex p-30 justify-between items-center bg-black min-h-screen '>
                {data.map(company => (
                    <div
                        key={company.id}
                        className='text-white border-gray-200 border-2 rounded-lg min-h-90 w-100 p-5 flex flex-col justify-around '
                    >
                        <h1 className='text-center text-2xl font-semibold'>
                            {' '}
                            {company.company}{' '}
                        </h1>
                        <h1 className=''>Internship type: {company.title} </h1>
                        <h1 className='font-bold'>
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
                            className='bg-linear-to-r from-blue-500 to-red-700 font-bold rounded-2xl p-2 mt-2   cursor-pointer'
                        >
                            Apply Now
                        </button>

                        <button
                            //   onClick={()=>}
                            className='bg-purple-500 rounded-2xl p-2 mt-2 font-bold cursor-pointer'
                        >
                            View Applicants
                        </button>

                        <button
                            //   onClick={()=>}
                            className='bg-purple-500 rounded-2xl p-2 mt-2 font-bold cursor-pointer '
                        >
                            Delete Applicants
                        </button>
                    </div>



                ))}
            {formId && (
              <div className="fixed inset-0 flex items-center justify-center ">
                <button 
        onClick={() => setFormId(null)}
        className="a bg-white p-2 rounded-full shadow"
      >
        close
      </button>
                <RegistrationForm 
                companyId={selectedCompany.id}
            companyName={selectedCompany.title}
           
             />
              </div>
            //  <div className="fixed inset-0 flex justify-center items-center ">
            //     <RegistrationForm />
            //   </div>
            // 
            )}
            
        </div>
            </div>

    )
}
