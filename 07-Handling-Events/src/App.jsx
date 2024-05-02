import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Thatcher");
  const [form, setForm] = useState({ email: "", phone: "", slno: "" });

  const handleClick = () => {
    alert("You just bet me :(");
  };

  const handleMouseHover = () => {
    alert("You just changed my color");
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10">
      <div className="button">
        <button
          onClick={handleClick}
          type="button"
          class="px-6 items-center  py-2.5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Hit me
        </button>
      </div>

      <div
        onMouseOver={handleMouseHover}
        className="max-w-fit mt-7 p-4 bg-red-300 border border-gray-200 rounded-lg shadow-2xl text-center  dark:bg-gray-800 dark:border-gray-700"
      >
        <p>I am a box</p>
      </div>

      <div>
        <input
          type="text"
          onChange={handleText}
          placeholder="type anything"
          className="p-3 mt-7 bg-pink-100 rounded-xl"
        />
        <h1>Text Change : {text}</h1>
      </div>

      <div className="">
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          className="p-3 mt-7 bg-red-100 rounded-xl mr-2"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          placeholder="Phone"
          onChange={handleChange}
          className="p-3 mt-7 bg-blue-100 rounded-xl mr-2"
        />
        <input
          type="text"
          name="slno"
          value={form.slno}
          placeholder="SlNo"
          onChange={handleChange}
          className="p-3 mt-7 bg-purple-100 rounded-xl "
        />
        <h1>Email: {form.email}</h1>
        <h1>Phone: {form.phone}</h1>
        <h1>SlNo: {form.slno}</h1>
      </div>
    </div>
  );
}

export default App;
