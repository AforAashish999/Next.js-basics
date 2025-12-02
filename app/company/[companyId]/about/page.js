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


// export default async function page({params}) {
//   const { companyId } = await params;
//   const res =  await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
//   const data = await res.json();
//   const filteredCompany = data.filter((item)=> item.companyId == companyId);
//   return (
//     <div>
//       {
//         filteredCompany.map((intern) => (
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


export default async function page() {
  const res =  await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
  const data = await res.json();
  return (
    <div>
      {
        data.map((intern) => (
          <div key={intern.id}>
             <h2 className="text-3xl  ">    {intern.company} </h2>
           <h2> Internship Type: {intern.title} </h2>
           <h2> Location: {intern.location} </h2>
           <h2> Takeaway: {intern.description}  </h2>
           <h2> Duration: {intern.duration} </h2>
           <h2> Stipend: {intern.stipend} </h2>
           <ul>
            {
              intern.requirements.map((point, index)=> (
                <li key={index}> {point} </li>
              ))
            }
           </ul>
            </div>
        ))
      }

    </div>
  )
}