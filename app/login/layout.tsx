'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({children}: {children: React.ReactNode}) {
    const pathName = usePathname();
    const conditionalPath = ["/login/login3", "/login/login4", "/login/login5" ]
  return (
    <div>
        <br /> <br />
    {/* <h1 className="text-xl text-purple-800">  layout of Login Page  </h1> <br /> */}
    {/* <ul className="flex p-4 bg-purple-700 text-white font-bold justify-evenly rounded-xl">
        <li> 
            <Link href="/login"> Login</Link>
        </li>
         <li> 
            <Link href="/login/SignUp"> SignUp</Link>
        </li>
         <li> 
            <Link href="/login/SignIn"> SignIn</Link>
        </li>
    </ul> */}

    {/* conditional pathname using for only signin */}
    {/* {
        pathName !== "/login/SignIn" ?
          <ul className="flex p-4 bg-purple-700 text-white font-bold justify-evenly rounded-xl">
        <li> 
            <Link href="/login"> Login</Link>
        </li>
         <li> 
            <Link href="/login/SignUp"> SignUp</Link>
        </li>
         <li> 
            <Link href="/login/SignIn"> SignIn</Link>
        </li>
    </ul>
    : <Link className="text-blue-500 underline text-xl" href="/login"> Login</Link>
    } */}


    {/* now i have many pages, i want to show conditional page for 3, login3,4,5 */}
        {
        !conditionalPath.includes(pathName) ?
          <ul className="flex p-4 bg-purple-700 text-white font-bold justify-evenly rounded-xl">
        <li> 
            <Link href="/login"> Login</Link>
        </li>
         <li> 
            <Link href="/login/SignUp"> SignUp</Link>
        </li>
         <li> 
            <Link href="/login/SignIn"> SignIn</Link>
        </li>
        <li> 
            <Link href="/login/login1"> Login-1</Link>
        </li>
        <li> 
            <Link href="/login/login2"> Login-2</Link>
        </li>
        <li> 
            <Link href="/login/login3"> Login-3 </Link>
        </li>
        <li> 
            <Link href="/login/login4"> Login-4  </Link>
        </li>
        <li> 
            <Link href="/login/login5"> Login-5 </Link>
        </li>
    </ul>
    : <Link className="text-blue-500 underline text-xl" href="/login"> Login</Link>
    } 
    <br /> <br />
    {children}
    </div>
  )
}

/* 
Incorrect way of conditional path checking for multiple pages

pathName !== conditionalPath
Why it doesn’t work
pathName is a string

conditionalPath is an array of strings

Using !== between a string and an array will never work

TypeScript even warns: “comparison seems unintentional”

You cannot compare a string directly to an array. You need to check if the string exists inside the array.

we do this => !conditionalPath.includes(pathName) 
*/