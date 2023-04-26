import React, { useState } from "react";

export default function Filters({setFilters}) {

  const handleChangeStatus = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      status: e.target.value,
    }));
  };

  const handleChangePriority = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      priority: e.target.value
    }))
  }
  
  return (
    // <div>
    //   <h1 className="text-3xl text-center font-bold mb-4">Filtrar por: </h1>
    //   <div className="flex justify-around">
    //     <div>
    //       <label>Prioridad</label>
    //       <select className="text-white block w-80 p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    //       onChange={handleChangePriority}
    //       >
    //         <option value="all">Todas las prioridades</option>
    //         <option value="Alta">Alta</option>
    //         <option value="Media">Media</option>
    //         <option value="Baja">Baja</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label>Estado</label>
    //       <select className="text-white block w-80 p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    //       onChange={handleChangeStatus}
    //       >
    //         <option value="all">Todos los estados</option>
    //         <option value="Nueva">Nueva</option>
    //         <option value="En proceso">En proceso</option>
    //         <option value="Finalizada">Finalizada</option>
    //       </select>
    //     </div>
    //   </div>
    // </div>
    <div class="flex flex-col items-center">
  <h1 class="text-3xl text-center font-bold mb-4">Prueba cambio</h1>
  <div class="flex flex-col sm:flex-row justify-center">
    <div class="mb-4 sm:mb-0 sm:mr-4">
      <label class="block mb-2">Prioridad</label>
      <select class="text-white block w-full sm:w-80 p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      onChange={handleChangePriority}
      >
        <option value="all">Todas las prioridades</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
    </div>
    <div class="mb-4 sm:mb-0">
      <label class="block mb-2">Estado</label>
      <select class="text-white block w-full sm:w-80 p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      onChange={handleChangeStatus}
      >
        <option value="all">Todos los estados</option>
        <option value="Nueva">Nueva</option>
        <option value="En proceso">En proceso</option>
        <option value="Finalizada">Finalizada</option>
      </select>
    </div>
  </div>
</div>
    );
}
