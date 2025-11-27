import Link from "next/link"

export default function StudentList(){
    return(
        <>
        <br /> <br />
        <h1 className="text-3xl text-red-500 font-bold "> Student List </h1> <br />
        <ul className=" ml-10 list-decimal">
            <li>
                <Link href="/studentList/ram" > Ram</Link>
            </li>
            <li>
                <Link href="/studentList/shyam" > Shyam</Link>
            </li>
            <li>
                <Link href="/studentList/3" > Mohan</Link>
            </li>
            <li>
                <Link href="/studentList/4" > Sohan</Link>
            </li>
        </ul>
        
        
        </>
    )
}