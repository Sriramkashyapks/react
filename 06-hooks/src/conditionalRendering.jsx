import React, { useState } from 'react';

function ConditionalRenderingExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state for login status

  // Function to handle login/logout
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn); // Toggles the login status
  };

  return (
    <div className="flex flex-col items-center mt-72 text-center h-screen">
      {/* Conditionally rendering based on isLoggedIn state */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        {isLoggedIn ? (
          <div>
            <h1 className="text-2xl font-bold text-green-600 mb-4">Welcome, User!</h1>
            <button
              onClick={handleLoginToggle}
              className="bg-red-500 hover:bg-red-600  text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Please login</h1>
            <button
              onClick={handleLoginToggle}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConditionalRenderingExample;
