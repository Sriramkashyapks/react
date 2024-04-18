import { useState } from "react";

function EgOnChange() {
    const [name, setName] = useState("Thatcher");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("PickUp");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    };

    return (
        <div className="w-2/5 outline-pink-500 outline outline-offset-4 mx-auto mt-16 p-5 shadow-2xl shadow-purple-200 rounded-lg text-center">
            <h1 className='text-5xl font-extrabold dark:text-white font-sans  p-5'> Shopping Checkout form</h1>

            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 max-w-auto dark:focus:border-blue-500"
                placeholder="John"
                required
            />
            <p className="p-4">Name: {name}</p>

            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 max-w-auto dark:focus:border-blue-500"
            />
            <p className="p-4">Quantity: {quantity}</p>

            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter delivery instructions"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 max-w-auto dark:focus:border-blue-500"
            />
            <p className="p-4">Comment: {comment}</p>

            <select
                value={payment}
                onChange={handlePaymentChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="UPI">UPI</option>
            </select>
            <p className="p-4">Payment: {payment}</p>

            <label className="p-10">
                <input
                    type="radio"
                    value="PickUp"
                    checked={shipping === "PickUp"}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label>

            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>

            <p className="p-4">Shipping Option : {shipping}</p>
        </div>
    );
}

export default EgOnChange;
