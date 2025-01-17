import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    //Subscribing to the store using useSelector hook

    // Note: subscribing to the small portion of the store is the good way or efficient way.
    const cartItems = useSelector((store) => store.cart.items);  // here we are subscribing to the small portion of the store using selector.

    // The above and this is the same for subscribing to the store but but but ...
    // const store = useSelector((store) => store); // here we are subscribing to the whole store but it is very less efficient
    // const cartItems = store.cart.items; // here we are extracting the items. 
    console.log(cartItems);

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <h1>Cart is empty. Add items to the cart!</h1>
                )}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;