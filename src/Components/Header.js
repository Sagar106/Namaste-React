import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="flex justify-between shadow-2xl bg-gray-50 shadow-gray-200 m-4 rounded-lg">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4 hover:text-amber-500"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-amber-500"><Link to="/about">About</Link></li>
                    <li className="px-4 hover:text-amber-500"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 hover:text-amber-500"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:text-amber-500">Cart</li>
                    <button 
                        className="px-5 py-1 rounded-md cursor-pointer bg-amber-500 hover:bg-amber-400"
                        onClick={() => {
                            btnName === "Login" ?
                            setBtnName("Logout") :
                            setBtnName("Login")
                        }}
                    >
                            {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header