import React, { useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import CardTask from "../CardTask/CardTask";
import imgempty from "../../assets/images/notfound.png"

export default function ToDoList({filters}) {
  const { toDo } = useContext(FormContext);

const filterTasks = toDo.filter(task => (
  filters.status === 'all' || task.status === filters.status
) && (
  filters.priority === 'all' || task.priority === filters.priority
  ));

  return (
    <div className="flex flex-wrap justify-center">
      {!filterTasks.length ? (
        <div className="mx-auto w-52 mt-24">
          <img src={imgempty} alt="Imagen central" className="mx-auto w-48" />
          <h3>Agregue alguna tarea.</h3>
        </div>
      ) : filterTasks?.map((task) => (
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
      }
    </div>
  );
}
