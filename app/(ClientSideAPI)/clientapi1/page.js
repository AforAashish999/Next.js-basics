import React from 'react'
import QuotesList from '../clientapi1list/page'
import { Suspense } from 'react'


async function getQuotes() {
  const data = await fetch("https://dummyjson.com/quotes");
  return data.json();
}
  

export default function Page() {
  const quotesPromise = getQuotes();
  return (
    <div>
      <Suspense fallback={<div> Loading Quotes...........</div>}>
      <QuotesList quotesPromise={quotesPromise} />
      </Suspense>
    </div>
  )
}
