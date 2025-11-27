
export default async function StudentDetails({params}: {params: {studentDetails: string}}) {
  const { studentDetails} = await params;
  return (
    <div > 
        <br /> <br />
        <h1 className="text-3xl text-red-500 font-bold "> Student Details </h1> <br /> <br />
        <h4 > Name: {studentDetails} </h4>
    </div>
  )
}

// "use client";
// import * as React from 'react';


// export default function StudentDetails({params}: {params: {studentDetails: string}}) {
//   const {studentDetails} = React.use<{studentDetails: string}>(params);
//   return (
//     <div > 
//         <br /> <br />
//         <h1 className="text-3xl text-red-500 font-bold "> Student Details </h1> <br /> <br />
//         <h4 > Name: {studentDetails} </h4>
//     </div>
//   )
// }