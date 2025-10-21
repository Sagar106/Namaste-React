import { IoMdArrowDropdownCircle } from "react-icons/io";

const RestaurantCategory = ({ data }) => {
    return (
        <div>
            <div>
                <span>{data.title}</span>
                <span><IoMdArrowDropdownCircle /></span>
            </div>
        </div>
    )
}

export default RestaurantCategory