'use client'
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json());

export default function Page({company}) {
    const{data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API}/users`, fetcher);
    if(isLoading) return <h1>Page is loading.............................</h1>
    if(error) return <h1> Interns are not showing..............{error.message} </h1>

    const filteredInterns = data.filter( (intern) => intern.companyId == company)
    return(
        <>
        {
            filteredInterns.length === 0 && (
                <h1> No applicants for this company yet</h1>
            )
        }
         {
            filteredInterns.map((intern) => (
                <div key={intern.id} > 
                    <h1> Name: {intern.name} </h1>
                    <h1> Email: {intern.email}  </h1>
                    <h1> Company: {intern.companyName} </h1>
                   
                </div>
            ))
        }
        </>
    )
}
