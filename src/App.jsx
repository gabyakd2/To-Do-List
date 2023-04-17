import React from "react";
// import './App.css'
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { FormProvider } from "./Context/FormContext";

function App() {
  return (
    <FormProvider>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </FormProvider>
  );
}

export default App;
