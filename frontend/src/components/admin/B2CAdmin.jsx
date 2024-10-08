import React, { useState } from "react";

const B2CAdmin = () => {
  // State to store input value
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if input is empty
    if (!inputValue) {
      setErrorMessage("Field cannot be empty.");
    } else {
      // If valid, clear the error and perform the update logic
      setErrorMessage("");
      alert(`Data updated: ${inputValue}`);
      
      // Reset input after submission
      setInputValue("");
    }
  };

  return (
    <div className="h-[535px] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Price B2C</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Input Field */}
          <div className="mb-4">
            <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">
              Update Price B2C:
            </label>
            <input
              type="text"
              id="inputField"
              className={`mt-1 w-full px-4 py-2 border ${
                errorMessage ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter data to update"
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1F2937] text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-[#1F2950]"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default B2CAdmin;
