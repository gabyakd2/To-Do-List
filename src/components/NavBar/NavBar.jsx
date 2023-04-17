import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function NavBar() {
  const [viewForm, setViewForm] = useState(false);

  const handleViewForm = () => {
    setViewForm(true)
}

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>
          <div className="flex items-center">
            <button onClick={handleViewForm}>
              <IoIosAddCircleOutline className="text-6xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
