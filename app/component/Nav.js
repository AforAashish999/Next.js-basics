'use client'
import { useRouter } from "next/navigation";

export default function Nav() {
    const router = useRouter();
    const navigate = (path) => router.push(path);
  return (
    <div className="bg-blue-600 p-5 flex justify-around  cursor-pointer">
        <button 
          onClick={()=>navigate("/")}
          className="text-white text-xl cursor-pointer"
        >
            Home
        </button>

        <button 
        onClick={()=>navigate("/about")}
         className="text-white  text-xl cursor-pointer">
            About
        </button>

        <button 
        onClick={()=>navigate("/login")}
         className="text-white text-xl  cursor-pointer">
            Login/Register
        </button>
    </div>
  )
}
