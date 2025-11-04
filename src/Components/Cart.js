import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index))
    }

    return (
        <div className="m-auto text-center w-6/12">
            <div className="flex justify-between py-5">
                {
                    cartItems.length > 0 ? (
                        <>
                            <h1 className="text-lg font-medium text-center">Cart</h1>
                            <button 
                                className="bg-black text-amber-50 px-3 py-2 mx-2 rounded-md shadow-lg text-[14px] cursor-pointer"
                                onClick={handleClearCart}
                            >
                                Clear Cart
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className="text-xl font-medium">Cart is Empty. Please add items to your cart!</h2>
                        </>
                    )
                }
            </div>
            {
                cartItems.map((item, index) => (
                    <div key={item.info.id} className="text-left border-b-1 py-3 border-gray-300 flex justify-between">
                        <div>
                            <h4 className="font-medium">{item.info.name}</h4>
                            <p className="text-[12px] text-gray-600">{item.info.description}</p>
                        </div>
                        <div>
                            <p className="text-[14px] text-center pb-2">₹{item.info.price / 100}</p>
                            <button
                                className="bg-amber-600 text-amber-50 px-3 py-2 mx-2 rounded-md shadow-lg text-[14px] cursor-pointer"
                                onClick={() => handleRemoveItem(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart;