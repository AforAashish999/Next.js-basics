// Server action to handle form submission
export async function handleForm(formData) {
//   "use server"; // This marks the function as a server action
  const name = formData.get("name"); // Get value directly from formData
  console.log("Name submitted:", name);

  // Normally you can redirect or return some server response
  return `Hello, ${name}`;
}