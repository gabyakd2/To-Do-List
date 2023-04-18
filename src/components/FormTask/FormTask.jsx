import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FormContext } from "../../Context/FormContext";

export default function FormTask() {
  const {
    viewForm,
    setViewForm,
    toDo,
    setToDo,
    formData,
    setFormData,
    isCreated,
    setIsCreated,
    toDoFind,
  } = useContext(FormContext);

  const handleInput = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateToDo = (id, newData) => {
    setToDo((prevToDo) => {
      return prevToDo.map((todo) => {
        if (todo.id === id) {
          return newData;
        } else {
          return todo;
        }
      });
    });
  };

  const addToDo = (e) => {
    e.preventDefault();
    if (isCreated) {
      if (formData.title !== "" && formData.description !== "") {
        const task = formData;
        task.id = Date.now();
        setToDo([...toDo, task]);
        setFormData({ title: "", description: "", priority: "", status: "" });
      }
    } else {
      updateToDo(toDoFind.id, formData);
      setFormData({ title: "", description: "", priority: "", status: "" });
    }
    setViewForm(false);
  };

  // console.log(formData);
  return (
    <Modal show={viewForm} onHide={() => setViewForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {!isCreated ? "Editar tarea" : "Agregar una tarea"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={addToDo}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de su nueva tarea..."
              name="title"
              defaultValue={!isCreated ? toDoFind?.title : formData?.title}
              onChange={handleInput}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descripción"
              name="description"
              defaultValue={
                !isCreated ? toDoFind?.description : formData?.description
              }
              onChange={handleInput}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Prioridad</Form.Label>
            <Form.Select
              defaultValue={
                !isCreated ? toDoFind?.priority : formData?.priority
              }
              onChange={handleInput}
              name="priority"
            >
              <option>Elija la prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              defaultValue={!isCreated ? toDoFind?.status : formData?.status}
              onChange={handleInput}
              name="status"
            >
              <option>Elija el estado</option>
              <option value="Finalizada">Finalizada</option>
              <option value="En proceso">En proceso</option>
              <option value="Nueva">Nueva</option>
            </Form.Select>
          </Form.Group>
          <div className="mt-4 flex justify-around">
            <Button variant="danger" onClick={() => setViewForm(false)}>
              Cancelar
            </Button>

            <Button variant="primary" type="submit">
              {!isCreated ? 'Guardar cambios' : 'Añadir tarea' }
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
