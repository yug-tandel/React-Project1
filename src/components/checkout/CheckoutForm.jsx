import { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext/CartContext";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // Dummy Payment Simulation
    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" }); // Empty the cart
      navigate("/order-confirmation");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Enter Payment Details</h2>
      <CardElement className="p-2 border rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
