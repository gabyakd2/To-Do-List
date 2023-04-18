import React, { useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import CardTask from "../CardTask/CardTask";

export default function ToDoList() {
  const { toDo } = useContext(FormContext);
  //   console.log(toDo)
  return (
    <div>
      {!toDo.length ? (
        <h1>NO HAY TAREAS</h1>
      ) : (
        toDo.map((task) => (
          <div key={task.id}>
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
