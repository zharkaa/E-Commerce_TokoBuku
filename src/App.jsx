import {
  Navigate,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";
import ScrollToTop from "./scrollToTop";

const App = () => {
  const user = false;
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
