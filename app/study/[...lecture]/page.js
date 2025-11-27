// "use client";

// server side way ******************************************************

import Link from "next/link";
export default async function Lecture({params}) {
    const {lecture} = await params;
    console.log(lecture);
  return (
    <div>
    <h1> day: {lecture[0]}</h1>
    <h1> lecture: {lecture[1]} </h1>
     <h1> Teacher:  {lecture[2]} </h1>
     <br />   <br />   <br />   <br />
     <Link className="text-blue-500 text-xl underline" href="/"> Home Page</Link>
</div>
  )
}


//Client side way******************************************************
// import * as React from 'react'

// export default function Lecture({params}) {
//     const {lecture} = React.use(params);
//     console.log(lecture);
//   return ( 
//     <div>
//          <h1> day: {lecture[0]}</h1>
//     <h1> lecture: {lecture[1]} </h1>
//     <h1> Teacher:  {lecture[2]} </h1>
// </div>
//   )
// }
