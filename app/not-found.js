import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='h-screen w-screen'>
        <div className='flex h-full w-full justify-center items-center text-4xl text-red-500'> This page is not available
            <Link className="text-blue-500 underline " href="/"> Click here to go to home page</Link>
        </div>
    </div>
  )
}
