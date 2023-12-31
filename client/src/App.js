import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Awal from "./pages/awal";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div >
    
        <Routes>
          <Route path="/" element={<Awal/>}/>
          <Route path="/home" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/edit/:id" element={<EditProduct/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </div>
  );
}
function Layout() {
  return (
    <>
      <header>
        <Link to='/'> </Link>

      </header>

      <Outlet />
    </>
  );
}

export default App;
