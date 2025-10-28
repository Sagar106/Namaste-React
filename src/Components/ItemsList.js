const ItemsList = ({items}) => {
  console.log(items)
  return (
    <div className="m-auto">
        {
            items.map((item) => (
                <div key={item.info.id} className="text-left border-b-1 py-3 border-gray-300 flex justify-between">
                    <div>
                        <h4 className="font-medium">{item.info.name}</h4>
                        <p className="text-[14px] pb-2">₹{item.info.price/100}</p>
                        <p className="text-[12px] text-gray-600">{item.info.description}</p>
                    </div>
                    <div>
                        <button className="bg-amber-600 text-amber-50 px-3 py-2 mx-2 rounded-md shadow-lg text-[14px] cursor-pointer">Add</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ItemsList