import React, { useState, useEffect } from "react";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const backendUrl = "http://localhost:3000"; // Altere a porta e o caminho conforme necessário

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${backendUrl}/person`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Nome:{user.name} id: {user._id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
