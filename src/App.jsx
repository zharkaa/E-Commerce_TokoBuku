import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
