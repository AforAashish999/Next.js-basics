
export default async function Person({userId}) {
    await new Promise( (resolve) => setTimeout(resolve, 2000) ); // artificial delay of 2 sec
    console.log("Done waiting!");

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
  return (
    <div>
        <h5> Author : <span className="text-lg font-bold"> {user.name} </span> </h5>
    </div>
  )
}

/*
Mate, that 2-second delay DOES work — and it works because of how await new Promise() behaves inside an async Server Component.

Let me explain how it actually delays execution.

✅ How this line causes the delay
await new Promise((resolve) => setTimeout(resolve, 2000));


Breakdown:

1. setTimeout(resolve, 2000)

Schedules the resolve function to run after 2000 ms (2 seconds)

This is the standard JavaScript timer

2. new Promise(...)

Creates a Promise that will resolve only after setTimeout finishes

3. await

Tells JavaScript: STOP execution until the Promise resolves

So the function pauses for 2 seconds before moving to the fetch() line.

🎯 Timeline of your function
Step 1 → You hit the await new Promise

⏳ JavaScript waits 2 seconds
🔁 Nothing runs inside the function

Step 2 → After 2 seconds passes

✔️ resolve() is called
✔️ The Promise finishes
✔️ Execution continues

Step 3 → Now this line runs:
const response = await fetch(...)


So real call happens after delay.

🔥 IMPORTANT

This works in Server Components too because:

Node.js fully supports setTimeout

Next.js server runs your component async

Server will wait for the Promise before rendering that portion

✔️ If you add a console.log, you see it clearer
console.log("Waiting...");
await new Promise(r => setTimeout(r, 2000));
console.log("Done waiting!");


Output (2 sec gap):

Waiting...
(DOES NOTHING FOR 2 SECONDS)
Done waiting!

*/