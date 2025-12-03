const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl py-5">Contact Us Page</h1>

            <form className="flex flex-col w-[24rem] space-y-4">
                <input type="text" placeholder="name" className="border rounded-md p-2 w-full" />
                <input type="text" placeholder="message" className="border rounded-md p-2 w-full" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Contact