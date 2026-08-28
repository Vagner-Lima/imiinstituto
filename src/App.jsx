import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Privacidade from "./pages/privacidade";
import Termos from "./pages/Termos";
import NR13 from "./pages/NR13";
import Labs from "./pages/Laboratorios";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/privacidade" element={<Privacidade />} />

        <Route path="/termos" element={<Termos />} />

        <Route path="/nr13" element={<NR13 />} />

        <Route path="/laboratorios" element={<Labs />} />

      </Routes>
    </BrowserRouter>
  );
}
