


// export default async function SingleProfile(props) {
//     //we can see the params and search params, inside params is the name /user/aashish
//     console.log("Dynamic route page props:", props);

//     const user = await props.params;
//     //gives object with username property
//         console.log("Username is:", user);
//         //gives name
//     console.log("Username is:", user.username);
//   return (
//     <div>
//         <br/> <br/>
//         <p> Dynamic route page </p>
//         <h1> User = {user.username} </h1>
//     </div>
//   )
// }

import React from 'react'

export default async function Profile({params}) {
    const { username } = await params;
  return (
    <div>
        <h1> This is a dynamic route concept</h1>
        <h1> User = {username} </h1>
    </div>
  )
}


