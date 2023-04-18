import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FormContext } from "../../Context/FormContext";

export default function FormTask() {
  const { viewForm, setViewForm, toDo, setToDo, formData, setFormData } = useContext(FormContext);

  const handleInput = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addToDo = (e) => {
    e.preventDefault();
    if(formData.title !== '' && formData.description !== ''){
      const task = formData;
      task.id = toDo.length + 1
      setToDo([...toDo, task])
      setFormData({title: '', description: ''})
      // console.log(task)
    }
  };


  return (
    <Modal show={viewForm} onHide={() => setViewForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar una tarea</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={addToDo}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de su nueva tarea..."
              name="title"
              value={formData.title}
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
              value={formData.description}
              onChange={handleInput}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Prioridad</Form.Label>
            <Form.Select
              value={formData.priority}
              onChange={handleInput}
              name="priority"
            >
              <option>Elija la prioridad</option>
              <option value='Alta'>Alta</option>
              <option value='Media'>Media</option>
              <option value='Baja'>Baja</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={formData.status}
              onChange={handleInput}
              name="status"
            >
              <option>Elija el estado</option>
              <option value='Finalizada'>Finalizada</option>
              <option value='En proceso'>En proceso</option>
              <option value='Nueva'>Nueva</option>
            </Form.Select>
          </Form.Group>
          <div className="mt-4 flex justify-around">
            <Button variant="danger" onClick={() => setViewForm(false)}>
              Cancelar
            </Button>

            <Button variant="primary" type="submit">
              Añadir tarea
            </Button>  
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
