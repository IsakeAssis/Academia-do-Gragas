import React, { useState, useEffect } from "react";

function UpdateUser() {
  const [id, setId] = useState(""); // ID do usuário a ser atualizado
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState(false); // Padrão: Não efetuado

  const backendUrl = "http://localhost:3000"; // URL do seu backend

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = { name, date, payment };

    try {
      if (payment === true) {
        const response = await fetch(`${backendUrl}/person/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });

        if (response.ok) {
          console.log("User updated successfully");
          // Lógica adicional após a atualização
        } else {
          console.error("Failed to update user");
        }
      } else if (payment === false) {
        alert("Efetue o pagamento");
      }
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  return (
    <div>
      <h2>Atualizar Usuário</h2>
      <form onSubmit={handleUpdate}>
        <label>
          ID do Usuário:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Novo Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <p>Foi efetuado o pagamento?</p>
        <input
          type="radio"
          id="sim"
          name="opcao"
          value="sim"
          checked={payment === true} // Verifique o estado corretamente
          onChange={() => setPayment(true)}
        />
        <label htmlFor="sim">Sim</label>

        <input
          type="radio"
          id="nao"
          name="opcao"
          value="nao"
          checked={payment === false} // Verifique o estado corretamente
          onChange={() => setPayment(false)}
        />
        <label htmlFor="nao">Não</label>
        <br />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateUser;
