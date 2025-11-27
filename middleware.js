// import React from 'react'
// import { NextResponse } from 'next/server'


//config based redirection
// export function middleware(request) {
//         return NextResponse.redirect(new URL ("/login", request.url) )
// }

// export const config = {
//     matcher: ["/", "/studentList:path*", "/study:path*"]
// }


//conditional based redirection
// export function middleware(request) {
//     if(request.nextUrl.pathname === "/studentList"){
//         return NextResponse.redirect(new URL ("/login", request.url))
//     }
// }

export function middleware(request) {

}5