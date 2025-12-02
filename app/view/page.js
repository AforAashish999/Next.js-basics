
export default  async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users`);
    const interns = await res.json();
  return (
    <div>
        {
            interns.map((intern) => (
                <div key={intern.id} > 
                    <h1> Name: {intern.name} </h1>
                    <h1> Email: {intern.email}  </h1>
                    <h1> Company: {intern.companyName} </h1>
                </div>
            ))
        }

    </div>
  )
}
