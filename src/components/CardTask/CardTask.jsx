import React from "react";
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function CardTask() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 flex justify-between">
            <h3>
                Titulo: <span className="font-extrabold">Hacer la tarea</span>
            </h3>
            <button>
                <BsFillTrash3Fill />
            </button>
        </div>
        <div className="border-b border-gray-400"></div>

        <div className="mt-5">
          <div className="font-normal">Descripción:</div>
          <p className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="flex justify-around mt-4">
            <div>
              Prioridad: <span className="font-bold">Alta</span>
            </div>
            <div>
              Estado: <span className="font-bold">Finalizada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
