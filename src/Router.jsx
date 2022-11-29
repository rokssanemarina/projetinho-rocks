import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./Components/Menu";
import {Footer} from "./Components/Footer"

import { Inicio } from './Pages/Inicio'
import { Sobre } from './Pages/Sobre'
import { Portfolio } from './Pages/Portfolio'
import { Contato } from './Pages/Contato'

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
