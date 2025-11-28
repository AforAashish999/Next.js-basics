import { Suspense } from "react";
import Person from "./person";

export default async function Posts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    //the userId is same for most post so we filtered it
    // const filteredPosts = posts.filter((post)=> post.id % 10 === 1);
  return (
    <div>
      
      <div className="bg-black p-10 grid grid-cols-2 gap-10">
        {
            posts.map( (post) => (
                <div key = {post.id} className="p-5 bg-gray-300 text-black rounded-2xl"> 
                <h1 className="text-lg font-bold"> {post.title} </h1>
                <p> {post.body} </p>

                <Suspense fallback={<h2> Loading the person who commented....................... </h2>}> 
                <Person userId={post.userId} />
                </Suspense>
                </div>
            ))
        }
      </div>
    </div>
  )
}


//useId = 1, xa tyo passs vyo Person component ma ani tsko url users/${userId} ma gyo, so user 1 lai show grxa