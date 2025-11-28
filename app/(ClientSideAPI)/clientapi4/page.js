'use client';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function QuotesPage() {
const {data, error, isLoading} = useSWR("https://dummyjson.com/quotes", fetcher);

if(isLoading) return <div> Loading................</div>
if(error) return <div> Failed to load. Problem {error.message} </div>
  return (
    <div>
        <ul className='grid grid-cols-2 p-10 '>
            {
                data.quotes.map( (sairi) => (
                    <li key={sairi.id} className='p-5 border-red-500 border-2 rounded-2xl'>
                        <p> {sairi.quote} </p>
                        <p className='bg-green-500 text-white font-semibold w-fit rounded-2xl p-2'> Author: {sairi.author} </p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
