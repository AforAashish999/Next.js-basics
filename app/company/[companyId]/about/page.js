// 'use client';
// import useSWR from "swr"

// const fetcher = url => fetch(url).then(res => res.json());

// export default async  function page() {
//   const { companyId } = params;
//   const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/internships`, fetcher)
//     if (isLoading) return <h1> page is loading....................</h1>
//     if (error)
//         return <h1> This page cant be open.................... {error.message} </h1>


// const filteredCompany = data.filter((item)=> item.companyId == companyId);
//   return (
//     <div>
//         {
//           filteredCompany.map((intern)=> (
//             <div key={intern.id} >
          //  <h2 className="text-3xl ">    {intern.company} </h2>
          //  <h2> Internship Type: {intern.title} </h2>
          //  <h2> Location: {intern.location} </h2>
          //  <h2> Takeaway: {intern.description}  </h2>
          //  <h2> Duration: {intern.duration} </h2>
          //  <h2> Stipend: {intern.stipend} </h2>
          //  <ul>
          //   {
          //     intern.requirements.map((point, index)=> (
          //       <li key={index}> {point} </li>
          //     ))
          //   }
          //  </ul>
              
//               </div>
//           ))
//         }
//     </div>
//   )
// }


export default async function page({params}) {
  const { companyId } = await params;
  const res =  await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
  const data = await res.json();
  const filteredCompany = data.filter((item)=> item.id == companyId);
  return (
    <div className="   ">
      {
        filteredCompany.map((intern) => (
          <div key={intern.id} className="min-h-screen flex flex-col justify-between border-gray-300 border ">

            <div className="flex  justify-center bg-slate-400 p-4 text-white "> 
             <h2 className="text-4xl font-bold "> {intern.company} </h2>
            </div>

            <div className="bg-blue-500 w-fit ">  
           <h2 className="font-bold text-gray-100 text-2xl p-3 "> 
             {intern.title} 
             </h2>
             </div> 
            
            <div className="p-5 "> 
           <h2 className="font-bold text-xl "> Location: <span className="font-normal">{intern.location} </span>  </h2>
           <h2 className="font-bold text-xl my-2"> Takeaway: <span className="font-normal">{intern.description}  </span>  </h2>
           <h2 className="font-bold text-xl my-2"> Duration: <span className="font-normal"> {intern.duration} </span>  </h2>
           <h2 className="font-bold text-xl my-2"> Stipend: <span className="font-normal"> {intern.stipend} </span>  </h2>
           <h5 className="font-bold text-xl"> 
            Requirements:
           <ul className="font-normal list-disc pl-8">
            {
              intern.requirements.map((point, index)=> (
                <li key={index}> {point} </li>
              ))
            }
           </ul>
           </h5>
           <h2 className="font-bold text-xl my-2"> Posted Date: <span className="font-normal"> {intern.postedDate} </span>  </h2>
           <h2 className="font-bold text-xl my-2"> Last Date: <span className="font-normal"> {intern.deadline} </span>  </h2>
</div> 
            </div>
        ))
      }

    </div>
  )
}


// export default async function page() {
//   const res =  await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
//   const data = await res.json();
//   return (
//     <div>
//       {
//         data.map((intern) => (
//           <div key={intern.id}>
//              <h2 className="text-3xl  ">    {intern.company} </h2>
//            <h2> Internship Type: {intern.title} </h2>
//            <h2> Location: {intern.location} </h2>
//            <h2> Takeaway: {intern.description}  </h2>
//            <h2> Duration: {intern.duration} </h2>
//            <h2> Stipend: {intern.stipend} </h2>
//            <ul>
//             {
//               intern.requirements.map((point, index)=> (
//                 <li key={index}> {point} </li>
//               ))
//             }
//            </ul>
//             </div>
//         ))
//       }

//     </div>
//   )
// }