import AdminNewProduct from "./components/AdminNewProduct";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newproduct" element={<AdminNewProduct />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
