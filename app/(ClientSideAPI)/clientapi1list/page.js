'use client';
import { use } from "react";

export default function QuotesList({quotesPromise}) {
    const allQuotes = use(quotesPromise);
  return (
    <div>
        <ul className="p-5 bg-gray-200">
            {
                allQuotes.quotes.map( (sairi)=> (
                    <li key={sairi.id} className="bg-black/40 p-3 rounded-2xl text-white font-semibold lisst-decimal ml-10 mt-5">
                        <p> {sairi.quote} </p>
                        <p> Author: {sairi.author} </p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
