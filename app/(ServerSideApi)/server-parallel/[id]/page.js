//post and album of a same person
//uerId =1, post, and userId =1, albums

async function userPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.json();
}
async function userAlbums(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return response.json();
}

export default async function Profile(params) {
    const { id } =  await params;
    const postData =  userPosts(id);
    const albumData =  userAlbums(id);
    const [posts, albums] = await Promise.all([postData, albumData])
  return (
    <div className="grid grid-cols-2 p-10 bg-black gap-5">
        <div className="bg-white text-black"> 
            <h1>Posts </h1>
            {posts.map( (post) => (
                <div key = {post.id}> 
                    <h3> {post.title} </h3>
                    <p> {post.userId} </p>
                </div>
            ))}
        </div>

        <div className="bg-white text-black"> 
            <h1>Album </h1>
            {albums.map( (album) => (
                <div key = {album.id}> 
                    <h3> {album.title} </h3>
                    <p> {album.userId} </p>
                </div>
            ))}
        </div>
    </div>
  )
}


