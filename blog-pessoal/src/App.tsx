import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastro" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
