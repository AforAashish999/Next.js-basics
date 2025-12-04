import { FiSearch } from "react-icons/fi";
// import { useState } from "react";

// export default function Search({intern}) {
//     const[query, setQuery] = useState("");
//     const filtered = intern.filter((item)=> item.name.toLowerCase().includes(query.toLowerCase()))
//   return (
//     <div className="w-full max-w-4xl mx-auto">
//         <div className="flex items-center bg-white py-2 px-7 rounded-lg border-gray-300 border">
//         <input
//           type="text"
//           id="searchBar" 
//           placeholder='Search Name, title'
//           className='focus:outline-0  rounded bg-white'
//           value={query}
//           onChange={(e)=>setQuery(e.target.value)}
//         />
//          <label htmlFor="searchBar"> 

//          <FiSearch  className="size-5 text-gray-400 cursor-pointer" />
//          </label>
            
//         </div>

//         {/* LOGIC */}
//         <table className="w-full border-collapse border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filtered.length === 0 ? (
//             <tr>
//               <td colSpan={3} className="text-center p-3">
//                 No results found
//               </td>
//             </tr>
//           ) : (
//             filtered.map((intern) => (
//               <tr key={intern.id}>
//                 <td className="border p-2">{intern.name}</td>
//                 <td className="border p-2">{intern.email}</td>
//                 <td className="border p-2">{intern.phone}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }


export default function Search({ query, setQuery }) {
  return (
    <div className="flex items-center bg-white py-2 px-7 rounded-lg border-gray-300 border">
      <input
        type="text"
        id="searchBar"
        placeholder="Search Intern By Name "
        className="focus:outline-0 rounded bg-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <label htmlFor="searchBar">
      <FiSearch className="size-5 text-gray-400 cursor-pointer ml-2" />
      </label>
    </div>
  )
}
