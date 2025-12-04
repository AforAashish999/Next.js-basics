import { IoIosArrowDown } from "react-icons/io";
// import DownArrow from "../../public/down_arrow.png"

export default function Sort({sort, setSort}) {
  return (
    <div>
          <select 
          value={sort} onChange={(e)=>setSort(e.target.value)}
          className=" focus:outline-0 py-2 px-4 rounded-lg font-bold text-slate-500 bg-white border border-gray-300 ">
            <option value="default">Sort By </option>
            <option value="asc"> Name: A to Z </option>
            <option value="desc"> Name: Z to A </option>
            <option> By Date </option>
          </select>
       
           {/* <IoIosArrowDown
            className="size-5 cursor-pointer absolute " /> */}
                {/* bg-[url('/down_arrow.png')]  */}
         
          
    </div>
  )
}
