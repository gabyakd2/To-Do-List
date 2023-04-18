import React, { useContext } from "react";
import { BsFillTrash3Fill } from 'react-icons/bs';
import { FormContext } from "../../Context/FormContext";

export default function CardTask({title, description, priority, status, id}) {
  const {toDo, setToDo} = useContext(FormContext)

  const deleteToDo = (id) => {
    const toDoUpdate = toDo.filter(task => task.id !== id)
    setToDo(toDoUpdate)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 flex justify-between">
            <h3>
                Titulo: <span className="font-extrabold">{title}</span>
            </h3>
            <button onClick={() => deleteToDo(id)}>
                <BsFillTrash3Fill />
            </button>
        </div>
        <div className="border-b border-gray-400"></div>

        <div className="mt-5">
          <div className="font-normal">Descripción:</div>
          <p className="font-bold">
            {description}
          </p>
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
