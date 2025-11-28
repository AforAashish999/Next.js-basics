export default async function page() {
    //fetch is a promise, so it will return promise once its fullfileed 
    // so we wait until data arrrives
    const data = await fetch("https://dummyjson.com/products");

    //data is in raw format and hs many forms, so we extract json version of it
    const result = await data.json();
  return (
    <div>
        <div className="grid grid-cols-3  gap-4 p-5 bg-red-200 "> 
        {
            result.products.map( (product) => (
                <div className="border-2 p-4 rounded-xl bg-green-200"
                 key={product.id}
                >
                    <p className="">Product: {product.title} </p>
                    <p> Description: {product.description} </p>
                    <p> Category: {product.category} </p>
                    <p>Price: {product.price} </p>
                    <p> Rating: {product.price} </p>
                    <p> Brand: {product.brand} </p>
                </div>
            ))
        }
        </div>
    </div>
  )
}
