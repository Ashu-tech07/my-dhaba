import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList'
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-xl font-bold"> Cart </h1>
      <div className="w-6/12 m-auto">
      {cartItems.length===0 && (
          <h1 className="text-sm font-bold m-6">Your cart is empty. Add items to the Cart 🛒</h1>
        )}
        <ItemList items={cartItems}/>
        {
            cartItems.length > 0 && (
                <button
                  className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
                  onClick={handleClearCart}
                >
                  Clear Cart 🧹
                </button>
              )
        }
        </div>
    </div>
  );
};

export default Cart;

