import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeOne } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center m-4 p-4">
      <div className="flex items-center justify-center gap-x-10">
        <h1 className="text-2xl font-bold">Cart Page</h1>

        <button
          className="p-2 bg-white text-green-600 font-bold border border-green-600 rounded-lg shadow-md 
                     hover:bg-green-600 hover:text-white hover:shadow-lg 
                     focus:outline-none focus:ring-2 focus:ring-green-300 
                     active:bg-green-700 transition duration-150 ease-in-out"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <div className="w-full sm:w-3/4 lg:w-1/2 m-auto">
        {cartItems.length === 0 && (
          <h1 className="p-4 text-amber-700 font-bold">
            Food Ordering App's Cart is Empty, please add items to the cart! 🛒
          </h1>
        )}

        {/* Cart mode: hide Add button, show Remove per row */}
        <ItemList
          items={cartItems}
          showAdd={false}
          onRemoveIndex={(i) => dispatch(removeOne({ index: i }))}
          // If you ever want id-based remove instead:
          // onRemoveId={(id) => dispatch(removeOne({ id }))}
        />
      </div>
    </div>
  );
};

export default Cart;
