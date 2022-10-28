import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RegistroPage } from "./pages/register/registerPage";
import { AuthContextComponent } from "./context/AuthContext/authContext";

function App() {
  return (
    <AuthContextComponent>
      <RegistroPage />
    </AuthContextComponent>
  );
}

export default App;
