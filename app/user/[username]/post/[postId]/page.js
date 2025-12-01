

export default async function page({params}) {
    const {username, postId} = await params;
  return (
    <div>
        <h1>User: {username} </h1>
        Post no: {postId}
    </div>
  )
}
