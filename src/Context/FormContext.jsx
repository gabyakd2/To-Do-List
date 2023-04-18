import React, { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [viewForm, setViewForm] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [toDoFind , setToDoFind] = useState();
  const [toDo, setToDo] = useState([]); //aca se guardan las tareas
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    id: 0
  }); //almacena los datos del formulario (usar con useMemo)

  return (
    <FormContext.Provider
      value={{
        viewForm,
        setViewForm,
        isCreated,
        setIsCreated,
        toDo,
        setToDo,
        formData,
        setFormData,
        toDoFind,
        setToDoFind
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
