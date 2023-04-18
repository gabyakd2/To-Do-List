import React from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function Filters() {
  return (
    <div>
      <h1 className="text-3xl text-center">Filtrar por: </h1>
      <div className="flex justify-around">
        <div>
          <label>Prioridad</label>
          <select className="text-white block w-80 p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Alta</option>
            <option value="opcion1">Media</option>
            <option value="opcion2">Baja</option>
          </select>
        </div>
        <div>
            <label>Estado</label>
          <select className="text-white block w-80 p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Estado</option>
            <option value="opcion1">Nueva</option>
            <option value="opcion2">En proceso</option>
            <option value="opcion2">Finalizada</option>
          </select>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
