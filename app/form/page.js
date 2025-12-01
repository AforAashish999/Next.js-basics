'use client'; // Only needed if using client components in same file
import { handleForm } from "./actions";
import React from "react";

// This form will submit directly to a server action
export default function Page() {
  return (
    <div>
      <h1>Server-side Form Example</h1>
      <form action={handleForm}>
        <input name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


