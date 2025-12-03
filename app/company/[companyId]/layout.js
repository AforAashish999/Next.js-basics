import Link from 'next/link'
import { IoSettings } from 'react-icons/io5'
import { FcAbout } from 'react-icons/fc'
import { ImUsers } from 'react-icons/im'

export default async function Layout ({ children, params }) {
  const { companyId } = await params
  return (
    <div className='flex min-h-screen '>
      <div className='flex flex-col  w-40 border-gray-300 border  p-'>
        <Link
          href={`/company/${companyId}/about`}
          className='flex items-center  px-4 py-3 my-3 hover:bg-slate-300 rounded-lg '
        >
          <FcAbout className='text-blue-800 size-6' />
          <h5 className=' font-bold '>About </h5>
        </Link>

        <Link
          href={`/company/${companyId}/intern-table`}
          className='flex items-center  px-4 py-3 my-3 hover:bg-slate-300 rounded-lg'
        >
          <ImUsers className='text-blue-600 size-6' />
          <h5 className=' font-bold '>Interns </h5>
        </Link>

        <Link
          href={`/company/${companyId}/settings`}
          className='flex items-center  px-4 py-3 my-3 hover:bg-slate-300 rounded-lg'
        >
          <IoSettings className='text-blue-600 size-6' />
          <h5 className=' font-bold '> Settings</h5>
        </Link>
      </div>
      <div className='bg-slate-100 p-20 w-full'>
        {children}</div>
    </div>
  )
}
