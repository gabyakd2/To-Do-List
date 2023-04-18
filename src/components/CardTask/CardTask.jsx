import React, { useContext } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FormContext } from "../../Context/FormContext";

export default function CardTask({ title, description, priority, status, id }) {
  const { toDo, setToDo, setViewForm, setIsCreated, setToDoFind, setFormData } = useContext(FormContext);

  //Funcion para eliminar tareas
  const deleteToDo = (id) => {
    const toDoUpdate = toDo.filter((task) => task.id !== id);
    setToDo(toDoUpdate);
  };
  
  const updateToDo = (id) => {
    setViewForm(true)
    setIsCreated(false)
    const newToDoList = [...toDo]
    let todoFind = newToDoList.find(task => task.id === id)
    setToDoFind(todoFind)
    setFormData(todoFind)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 flex justify-between">
          <h3>
            Titulo: <span className="font-extrabold">{title}</span>
          </h3>
          <div>
            <button onClick={() => updateToDo(id)}>
              <FaEdit />
            </button>
            <button onClick={() => deleteToDo(id)}>
              <BsFillTrash3Fill />
            </button>  
          </div>
        </div>
        <div className="border-b border-gray-400"></div>

        <div className="mt-5">
          <div className="font-normal">Descripción:</div>
          <p className="font-bold">{description}</p>
          <div className="flex justify-around mt-4">
            <div>
              Prioridad: <span className="font-bold">{priority}</span>
            </div>
            <div>
              Estado: <span className="font-bold">{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
