import React, { useContext } from "react";
import Filters from "../../components/Filters/Filters";
import { FormContext } from "../../Context/FormContext";
import FormTask from "../../components/FormTask/FormTask";
import ToDoList from "../../components/ToDoList/ToDoList";

export default function Home() {
  const { viewForm } = useContext(FormContext);

  return (
    <div className="">
      <Filters />
      <ToDoList />
      {
        viewForm ? <FormTask /> 
        : null
      }
    </div>
  );
}
