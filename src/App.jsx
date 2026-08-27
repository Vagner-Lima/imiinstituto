import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Privacidade from "./pages/privacidade";
import Termos from "./pages/Termos";
import NR13 from "./pages/NR13";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/privacidade"
          element={<Privacidade />}
        />

        <Route
          path="/termos"
          element={<Termos />}
        />

        <Route 
          path="/nr13"
          element={<NR13 />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;