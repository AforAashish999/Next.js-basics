"use client";

import Form from "next/form";
import { useActionState } from "react";
import { someAction } from "./actions";

export default function FormComponentPro() {
  const [state, action, pending] = useActionState(someAction, {
    message: "",
  });

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Pro Form (Server Action)</h1>

      <Form action={action} className="space-y-5">
        {/* TITLE */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 font-medium">Title</label>
          <input
            name="title"
            placeholder="Enter a title"
            className="border rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 font-medium">Content</label>
          <textarea
            name="content"
            rows="4"
            className="border rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* SERVER MESSAGE */}
        {state?.message && (
          <p
            aria-live="polite"
            className="text-red-600 font-medium px-1"
          >
            {state.message}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={pending}
          className={`px-5 py-2 rounded-lg text-white font-medium transition 
          ${
            pending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {pending ? "Saving..." : "Create Post"}
        </button>
      </Form>

      <p className="text-gray-500 text-sm mt-4">
        Expected errors or success messages will appear above.
      </p>
    </div>
  );
}
