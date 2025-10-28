import { IoMdArrowDropdownCircle } from "react-icons/io";
import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div>
            <div>
                <div 
                    className="m-auto p-4 w-1/2 bg-amber-50 shadow-md rounded-md flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-medium">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                <div className="m-auto w-1/2 p-3">
                    {showItems && <ItemsList items={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory