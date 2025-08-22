import { useCartContext } from "../../context/cartContext/CartContext";

const SubTotalSidebar = () => {
  const {
    state: { cart },
  } = useCartContext();
  const cartLength = cart.length;
  const subTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div className="min-w-[15rem] border-l border-l-white/10 p-6 sticky top-[3.5rem]">
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">{cartLength} Items</span>
        <span className="text-info">Subtotal: {subTotal} Rs</span>
      </div>
    </div>
  );
};

export default SubTotalSidebar;




