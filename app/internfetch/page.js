import Interns from "../interns/page";
import { Suspense } from "react";

async function getCompanyData()  {
 const res = await fetch(`${process.env.NEXT_PUBLIC_API}/internships`);
return res.json();
}

export default  function page() {
    const companyData = getCompanyData();
  return (
    <div>
        <Suspense  fallback = {<div>Laoding datas...........</div>}>
        <Interns InternData={companyData} />
        
        </Suspense>
    </div>
  )
}
