import logo from './logo.svg';
import './App.css';
import { Products} from './components/ProductsPage/Products';
// import {Footer} from "./components/Footer"
import { ChakraProvider } from "@chakra-ui/react";
import { SingleProduct } from './components/IndividualPage/Individual';
import { Routes, Route} from "react-router-dom";
import {Home} from "./components/LandingPage/Home"
import { Login } from './components/LandingPage/Login';
import { Cart } from './components/CartPage/Cart';
import { Checkout } from './components/CartPage/Checkout';
import { Payment } from './components/CartPage/Payment';
import { ThankYou } from './components/CartPage/ThankYou';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Products/:id"
            element={<Products/>}
          ></Route>
          <Route path="/IndividualProduct" element={<SingleProduct />}></Route>
          <Route path="/CartPage" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/Paymentsuccessful" element={<ThankYou/>}></Route>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
