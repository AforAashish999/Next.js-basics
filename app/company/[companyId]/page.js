export default async function page({params}) {
  const { companyId } =  params;
  const res =  await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
  const data = await res.json();
  const filteredCompany = data.filter((item)=> item.id.toString() === companyId);
  return (
    <div>
      {
        filteredCompany.map((intern) => (
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

// export default async function page() {
//   const response =  await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
//   const data = await response.json();
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