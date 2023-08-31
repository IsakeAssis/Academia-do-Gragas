import React, { useState } from "react";

function YourFormComponent() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState(false); // Certifique-se de que o valor inicial esteja correto

  const backendUrl = "http://localhost:3000";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { name, date, payment };

    try {
      if (payment === true) {
        const response = await fetch(`${backendUrl}/person`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          console.log("User created successfully");
          // Clear input fields or navigate to a success page
        } else {
          console.error("Failed to create user");
        }
      } else if (payment === false) {
        alert("Efetue o pagamento");
      }
    } catch (error) {
      console.error("Error creating user", error);
    }
  };
  return (
    <div>
      <p>Insira o nome</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Insira a data de entrada</p>
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
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

      <button onClick={handleSubmit}>Criar Usuário</button>
    </div>
  );
}

export default YourFormComponent;
