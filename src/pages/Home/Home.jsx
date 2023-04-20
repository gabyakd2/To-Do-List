import React, { useContext, useState } from "react";
import Filters from "../../components/Filters/Filters";
import { FormContext } from "../../Context/FormContext";
import FormTask from "../../components/FormTask/FormTask";
import ToDoList from "../../components/ToDoList/ToDoList";

export default function Home() {
  const { viewForm } = useContext(FormContext);
    const [filters, setFilters] = useState({
    priority: "all",
    status: "all",
  });

  return (
    <div className="min-h-screen pt-3 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500">
      
      <Filters setFilters={setFilters} />
      <ToDoList filters={filters} setFilters={setFilters} />
      {
        viewForm ? <FormTask /> 
        : null
      }
    </div>
  );
}
