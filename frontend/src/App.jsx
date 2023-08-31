import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./componentes/CreateUser";
import ListUsers from "./componentes/ListUsers";
import DeleteUser from "./componentes/DeleteUser";
import UpdateUser from "./componentes/UpdateUser";

function App() {
  return (
    <div>
      <CreateUser />
      <ListUsers />
      <DeleteUser />
      <UpdateUser />
    </div>
  );
}

export default App;
