import React, { useContext, useEffect } from "react";
import { FormContext } from "../../Context/FormContext";
import CardTask from "../CardTask/CardTask";
import useFilters from "../../hooks/useFilters";
import imgempty from "../../assets/images/notfound.png"

export default function ToDoList() {
  const { toDo, setToDo } = useContext(FormContext);
  const { filterTasks } = useFilters();
  const filteredTasks = filterTasks(toDo)
    // console.log(filteredTasks, 'soy TAREAS FILTRADAS')
    // console.log(toDo, 'toDo')
  return (
    <div className="flex flex-wrap justify-center">
      {!filteredTasks.length ? (
        <div className="mx-auto w-52">
          <img src={imgempty} alt="Imagen central" className="mx-auto w-48" />
          <h3>Agregue alguna tarea.</h3>
        </div>
      ) : (
        filteredTasks?.map((task) => (
          <div key={task.id} className="m-5">
            <CardTask
              title={task.title}
              id={task.id}
              description={task.description}
              priority={task.priority}
              status={task.status}
            />
          </div>
        ))
      )}
    </div>
  );
}
