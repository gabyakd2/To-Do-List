import React, { useState, useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FormContext } from "../../Context/FormContext";

export default function NavBar() {
    const {viewForm, setViewForm, isCreated, setIsCreated} = useContext(FormContext)

  const handleViewForm = () => {
    if(!viewForm){
        setViewForm(true)
        setIsCreated(true)
    }else{
        setViewForm(false)
    }
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
              <IoIosAddCircleOutline className="text-5xl" color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
