import React, { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [viewForm, setViewForm] = useState(false);
  const [toDo, setToDo] = useState([]); //aca se guardan las tareas
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    id: 0
  }); //almacena los datos del formularioF

  return (
    <FormContext.Provider
      value={{
        viewForm,
        setViewForm,
        toDo,
        setToDo,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
