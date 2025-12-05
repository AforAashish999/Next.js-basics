"use client";
// "use client";
// import { mutate } from 'swr';
// import { toast } from 'sonner';
// import { RiDeleteBin6Fill } from 'react-icons/ri'

import { CONFIG_FILES } from "next/dist/shared/lib/constants"

// export default function DelUser({ id }) {
//     const deleteUser = async () => {
//         try {
//             const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/${id}`, {
//                 method: "DELETE",
//             });
//          if (res.status !== 200 && res.status !== 204) {
//       throw new Error("failed to delete");
//     }
//     // alert("succesfully delted")
//     // window.location.reload();
//     toast.error("User Deleted Successfully", {
//       duration: 2000,
//     });
//     mutate(`${process.env.NEXT_PUBLIC_API}/users`);

//             //checking del status
//             console.log("Delete status", res.status)
//         }
//         catch (err) {
//             console.error(err);
//             alert("Failed to Delete user");
//         }
//     }

//     return (
//         <div>
//             <button
//                 onClick={deleteUser}
//                 className="cursor-pointer transition-all duration-600 hover:-rotate-180">
//                 {" "}
//                 <RiDeleteBin6Fill className="text-red-600" />{" "}
//             </button>
//         </div>
//     );
// }


// *********************************ADDING DELETE CONFIRMATION POPUP LOGIC ******************************
import { mutate } from 'swr';
import { toast } from 'sonner';
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useState } from "react";

export default function DelUser({ id }) {
    const[confirmDel, setConfirmDel] = useState(false);
    const deleteUser = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/${id}`, {
                method: "DELETE",
            });
         if (res.status !== 200 && res.status !== 204) {
      throw new Error("failed to delete");
    }
    // alert("succesfully delted")
    // window.location.reload();
    toast.error("User Deleted Successfully", {
      duration: 2000,
    });
    mutate(`${process.env.NEXT_PUBLIC_API}/users`);

            //checking del status
            console.log("Delete status", res.status)
            //closing confirmatin pop after deletion
            setConfirmDel(false);
        }
        catch (err) {
            console.error(err);
            alert("Failed to Delete user");
        }
    }

    return (
        <div>
            <button
                onClick={()=> setConfirmDel(true)}
                className="cursor-pointer transition-all duration-600 hover:-rotate-180">
                <RiDeleteBin6Fill className="text-red-600" />
            </button>
            {
                confirmDel && (
                    <div className="min-h-screen flex justify-center items-center fixed inset-0
                     bg-white/40 backdrop-blur-sm ">
                        <div className="min-h-90 bg-slate-200 p-12 rounded-lg shadow-xl/30 flex flex-col justify-around ">

                        <h2 className="text-3xl font-bold sm:max-w-[300px] md:max-w-[400px]">
                             Are you sure, you want to Delete this user?
                             </h2>

                        <div className="flex flex-col gap "> 
                        <button
                        onClick={deleteUser}
                         className="bg-red-500 hover:bg-red-800 text-white font-bold px-8 py-3 mt-3 rounded-lg cursor-pointer ">
                            Delete
                        </button>
                        <button
                        onClick={()=>setConfirmDel(false)}
                         className="bg-blue-500 hover:bg-blue-800 text-white font-bold px-8 py-3 mt-3 rounded-lg cursor-pointer">
                            Cancel
                        </button>
                        </div>
                        </div>

                        </div>
                )
            }

        </div>
    );
}
