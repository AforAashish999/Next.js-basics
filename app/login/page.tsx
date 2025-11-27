'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  // const navigate = (name: string) => router.push("/login/" + name); 
  //or this way

  const goTo = (path: string) => router.push(path);
  const goToLogin = (path: string) => router.push(`/login/${path}`);
   
  return (
    <div>This is an Login Page
        <br />
        <Link href="/" className='text-blue-500 underline'> Go to Home Page </Link>
        <br /> <br />

        <button
        // onClick={()=> router.push("/")} => this way
        onClick = {()=> goTo("/")}
        className='p-2 bg-purple-600 text-white rounded-2xl'
        > Go to home page </button>

<br /> <br />

        <button
        // onClick={()=>navigate("SignUp")}
        onClick={()=>goToLogin("SignUp")}
        className='p-2 bg-orange-600 text-white rounded-2xl'
        >
          SignUp Page
        </button>

        <br /> <br />

        <button
        // onClick={()=>navigate("SignIn")}
        onClick={()=>goToLogin("SignIn")}
        className='p-2 bg-orange-600 text-white rounded-2xl cursor-pointer'
        >
          SignIn Page
        </button>
    </div>
  )
}
