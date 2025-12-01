"use client"
import { useState } from "react";
import FormPage from "../components/formpage";


export default async function page() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
  
    const data = await res.json();
    console.log(data);

    cosnt [showForm, setShowForm] = useState(false);
  return (
    <div>

        <div className="bg-black flex justify-center p-5">
            <h1 className="text-white text-4xl font-semibold "> Internship Available!</h1>

        </div>
         
        <div className="flex p-30 justify-between items-center bg-black min-h-screen "> 
        {
            
            data.map((company)=> (
                <div key={company.id} className="text-white border-gray-200 border-2 rounded-lg h-90 w-100 p-5 flex flex-col justify-around " > 
                    <h1 className="text-center text-2xl font-semibold"> {company.company} </h1>
                    <h1 className="">Internship type: {company.title} </h1>
                    <h1 className="font-bold">location:  <span> {company.location} </span> </h1>
                    <h1> Duration: {company.duration} </h1>
                    <h1> Pay: {company.stipend} </h1>
                    <h1> Takeaway: {company.description} </h1>
                    <h1> Internship Requirements:
                        <ul className="list-disc pl-10">
                            {
                                company.requirements.map((point, index) => (
                                    <li key={index} > {point} </li>
                                ))
                            }
                        </ul>
                    </h1>
                    {
                        setShow && (
                            <>
                            <button onClick={()=>setShowForm(false)}>

                            </button>
                            <div>
                                
                          <FormPage />
                                  </div>
                            </>
                        )
                    }
                          <button 
                        //   onClick={()=>}
                           className="bg-purple-500 rounded-2xl p-2 mt-2"> Apply Now </button>
                </div>
            ))
            
        }
         </div>
       
    </div>
  )
}


// // ...existing code...
// export default async function page() {
//   const base = process.env.NEXT_PUBLIC_API;
//   if (!base) {
//     throw new Error('NEXT_PUBLIC_API is not defined. Add it to .env.local and restart the dev server.');
//   }

//   // ensure no duplicate slashes and that base includes protocol (http/https)
//   const url = `${String(base).replace(/\/+$/,'')}/internships`;

//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error(`Fetch failed (${res.status}) for ${url}`);
//   }

//   const data = await res.json();
//   return (
//     <div>
//       {data.map((user) => (
//         <div key={user.id}>
//           <h1>Name: {user.name}</h1>
//           <h3>Email: {user.email}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }
// // ...existing code...