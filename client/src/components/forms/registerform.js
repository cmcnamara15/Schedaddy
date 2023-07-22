import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap';

const RegisterForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [ user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleModalOpen = () => {
    setShowModal(true)
  };

  const handleModalClose = () => {
    setShowModal(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value})
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`${user.email} has successfully created an account. It looks like your password is ${user.password} too...`);
  };


  return (
    <>
    <a onClick={handleModalOpen}>
      Register here
    </a>
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <input
            className='form-control'
            value={user.email}
            name="email"
            type="email"
            placeholder='farquaad@charleschip.us'
            onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <input
              className='form-control'
              value={user.password}
              name='password'
              type='password'
              placeholder='Password'
              onChange={handleInputChange} />
          </Form.Group>
          <input className='btn btn-secondary m-1 col-2' type='button' value="Submit" onClick={handleFormSubmit} />
        </Form>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default RegisterForm