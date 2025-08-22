import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Payment Successful!
      </h1>
      <p className="text-lg mb-6">Thank you for your purchase. Your order has been confirmed.</p>
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
