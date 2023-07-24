import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Button, Modal, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';

import EmptyPosition from './partials/EmptyPosition';

const PositionForm = () => {
  const [position, setPosition] = useState('');
  const [hourlyWage, setHourlyWage] = useState('');
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'position': 
        setPosition(value);
        break
      case 'hourlyWage':
        setHourlyWage(value);
        break
    };
  };

  const handleFormClear = (e) => {
    e.preventDefault();
    setPosition(EmptyPosition);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    alert(`New ${position.jobTitle} position created!`);
    setPosition('');
    setHourlyWage('');
  };


  return (
    <Container>
    <Button variant="primary" onClick={handleShow}>
      <AiOutlinePlus/><span className='ms-1'>Position</span>
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Position</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Position Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Valued employee"
            autoFocus
            value={position} 
            onChange={handleChange} 
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Hourly Wage</Form.Label>
          <Form.Control
            type="float"
            placeholder="$20"
            autoFocus
            value={position} 
            onChange={handleChange} 
          />
        </Form.Group> */}
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Exit without saving
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>
  )
}

export default PositionForm
