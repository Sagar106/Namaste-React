import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import { ThemeContext } from "../Context/ThemeContext"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const { theme, setTheme } = useContext(ThemeContext)
    const cartItems = useSelector((store) => store.cart.items)

    console.log("theme", theme)

    return (
        <div className="flex justify-between shadow-2xl bg-amber-100 shadow-gray-200 m-4 rounded-lg">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4 hover:text-amber-500"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-amber-500"><Link to="/about">About</Link></li>
                    <li className="px-4 hover:text-amber-500"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 hover:text-amber-500"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:text-amber-500 mr-2">
                        <Link to="/cart">
                            <FaShoppingCart />
                            <label className="bg-amber-600 text-amber-50 absolute z-10 p-1 mx-2 rounded-md shadow-lg">{cartItems.length}</label>
                        </Link>
                    </li>
                    <button
                        className="px-6 py-1 rounded-md cursor-pointer bg-amber-500 hover:bg-amber-400"
                        onClick={() => {
                            btnName === "Login" ?
                                setBtnName("Logout") :
                                setBtnName("Login")
                        }}
                    >
                        {btnName}
                    </button>
                    <button
                        className={`px-5 py-1 mx-1 rounded-md cursor-pointer
                            ${theme === "Light" ?
                                "bg-gray-100 text-black" : "bg-gray-700 text-white"
                            }`}
                        onClick={() => {
                            theme === "Light" ?
                                setTheme("Dark") :
                                setTheme("Light")
                        }}
                    >
                        {theme}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header