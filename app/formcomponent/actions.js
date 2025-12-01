"use server";

export async function someAction(prevState, formData) {
  // formData is a FormData instance
  const title = formData.get("title");
  const content = formData.get("content");

  // Validation (expected error): return an object, don't throw
  if (!title || typeof title !== "string" || title.trim() === "") {
    return { message: "Title is required" };
  }

  // Simulate server work (e.g., save to DB) - here we just return success
  // In real app you'd await a DB call or fetch.
  return { message: `Saved post: ${String(title).slice(0, 60)}` };
}
