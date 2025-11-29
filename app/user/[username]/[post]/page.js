

export default async function page({params}) {
    const {post} = await params;
  return (
    <div>
        Post no: {post}
    </div>
  )
}
