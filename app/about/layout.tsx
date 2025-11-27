import Link from "next/link";


export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <br /> <br />
        <ul className="flex p-5 rounded-md bg-blue-600 text-white font-bold justify-around">
            <li>
                <Link href="/about"> About </Link>
            </li>
            <li>
                <Link href="/about/aboutcollege"> About College</Link>
            </li>
            <li>
                <Link href="/about/aboutstudent"> About Student </Link>
            </li>
        </ul> <br /> <br />
        {children}
    </div>
  )
}
