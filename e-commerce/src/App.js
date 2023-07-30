import {BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css';
import Layout from "./components/layout.js";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js"
import Outstore from "./pages/Outstore.js";
import CompareProduct from "./pages/CompareProduct.js"
import Wishlist from "./pages/Wishlist.js";
import Login from "./pages/Login.js";
import Forgot from "./pages/Forgot.js"
import Signup from "./pages/Signup.jsx"
import Restpassword from "./pages/Restpassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondions from "./pages/TermAndCondions";
import SingleProduct from "./pages/SingleProduct";
import Card from "./pages/Card";
import Checkout from "./pages/Checkout";







function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element = {<Home />}/>
      <Route path="store" element={<Outstore/>}/>
      <Route path="store/product/:id" element={<SingleProduct/>}/>
      <Route path="card" element={<Card/>}/>
      <Route path="about"  element = {<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="compare" element={<CompareProduct/>}/>
      <Route path="Wishlist" element={<Wishlist/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="forgot" element={<Forgot/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="rest password" element={<Restpassword/>}/>
      <Route path="Privacy Policy" element={<PrivacyPolicy/>}/>
      <Route path="Refund Policy" element={<RefundPolicy/>}/>
      <Route path="Shipping Policy" element={<ShippingPolicy/>}/>
      <Route path="Term-Condition" element={<TermAndCondions/>}/>

      



      </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
