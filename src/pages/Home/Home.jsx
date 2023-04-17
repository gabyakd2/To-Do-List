import React, { useContext } from "react";
import Filters from "../../components/Filters/Filters";
import CardTask from "../../components/CardTask/CardTask";
import { FormContext } from "../../Context/FormContext";
import FormTask from "../../components/FormTask/FormTask";

export default function Home() {
  const { viewForm } = useContext(FormContext);

  return (
    <div className="">
      <Filters />
      <CardTask />
      {
        viewForm ? <FormTask /> 
        : null
      }
    </div>
  );
}
