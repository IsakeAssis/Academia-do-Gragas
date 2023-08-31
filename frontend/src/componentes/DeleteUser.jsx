import React, { useState } from "react";

function DeleteUser() {
  const [userId, setUserId] = useState("");
  const backendUrl = "http://localhost:3000";
  const handleDelete = async () => {
    try {
      const response = await fetch(`${backendUrl}/person/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("User deleted successfully");
        // Clear input field or show a success message
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteUser;
