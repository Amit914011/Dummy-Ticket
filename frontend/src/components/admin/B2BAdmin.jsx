import React, { useState } from "react";

const B2BAdmin = () => {
  // State to store input value and error
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if input is empty
    if (!inputValue) {
      setErrorMessage("Field cannot be empty.");
    } else {
      // Clear the error
      setErrorMessage("");
      setLoading(true); // Set loading to true while waiting for API response

      // API call to update price
      try {
        const response = await fetch("http://localhost:3000/api/updatePrice/1", {
          method: "PUT", // Assuming it's a PUT request for updating
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ b2b: inputValue }), // Send the input data
        });

        if (response.ok) {
          const data = await response.json();
          // Show alert box when data is updated
          alert(`Data updated: ${data.b2b}`);
          // Reset input after submission
          setInputValue("");
        } else {
          throw new Error("Failed to update price.");
        }
      } catch (error) {
        setErrorMessage(`Update Price`);
        console.error(error);
      } finally {
        setLoading(false); // End loading state
      }
    }
  };

  return (
    <div className="h-[535px] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Price B2B</h2>

        <form onSubmit={handleSubmit}>
          {/* Input Field */}
          <div className="mb-4">
            <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">
              Update Price B2B:
            </label>
            <input
              type="text"
              id="inputField"
              className={`mt-1 w-full px-4 py-2 border ${
                errorMessage ? "border-[#32B57A]" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter data to update"
              disabled={loading} // Disable input while loading
            />
            {errorMessage && (
              <p className="text-[#32B57A] text-sm mt-2">{errorMessage}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1F2937] text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-[#1F2950]"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default B2BAdmin;
