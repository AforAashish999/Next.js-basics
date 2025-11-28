import React from 'react'

export default function CheckCalorie({calories}) {
  return (
    <div>
        <button className='bg-red-600 text-white font-bold  rounded-2xl px-5 py-2 cursor-pointer'
        onClick={()=>alert(calories + "kal Per serving")}>  Calorie Per Serving</button>
    </div>
  )
}
