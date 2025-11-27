
import React from 'react'

export default async function Page() {
     // STEP 1: Fetch data from API
    const data = await fetch("https://dummyjson.com/quotes");
      // STEP 2: Convert response into JSON object
    const result = await data.json();
  return (
    <div>
        <ul className='list-decimal ml-10 '>
            {
                result.quotes.map( (sairi) => (
                    <li key={sairi.id} className='mt-4 font-semibold bg-purple-300'>
                        <p> {sairi.quote} </p>
                        <p> Author: {sairi.author} </p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
