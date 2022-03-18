import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Cart,
  Home,
  Product,
  ProductPage,
  UserProfile,
  Wishlist,
} from "./pages";
import Mockman from "mockman-js";
import Navbar from "./component/Navbar/Navbar";
import { Login } from "./pages/Auth";
import { useData } from "./context";
import { Loader } from "./component/Loader/Loader";

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  const { loader } = useData();
  return (
    <div className="App">
      {loader && <Loader />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/product" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
