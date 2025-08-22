import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import CheckoutForm from "./components/checkout/CheckoutForm";
import OrderConfirmation from "./pages/order/OrderConfirmation";


const PUB_KEY = 'pk_test_51RymCtHixPcV5ji7Vm9Fc7WF2bXxEqBbmXN3LYH6mLaQWxGr7rYtXYn4g8HRRw5kbKNfXhrxdApd63744nzbAcox00A3qwHSt5'

const stripePromise = loadStripe(PUB_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
