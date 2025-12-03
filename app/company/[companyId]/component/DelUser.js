"use client";
import { RiDeleteBin6Fill } from 'react-icons/ri'
export default function DelUser({ id }) {
    const deleteUser = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/${id}`, {
                method: "DELETE",
            });
         if (res.status !== 200 && res.status !== 204) {
      throw new Error("failed to delete");
    }
    alert("succesfully delted")
    window.location.reload();

            //checking del status
            console.log("Delete status", res.status)
        }
        catch (err) {
            console.error(err);
            alert("Failed to Delete user");
        }
    }

    return (
        <div>
            <button
                onClick={deleteUser}
                className="cursor-pointer transition-all duration-600 hover:-rotate-180">
                {" "}
                <RiDeleteBin6Fill className="text-red-600" />{" "}
            </button>
        </div>
    );
}
