import { useNavigate } from "react-router-dom";
import CartBody from "./CartBody";
import SubTotalSideBar from "./SubTotalSideBar";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      <CartBody />
      <SubTotalSideBar />

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/checkout")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
