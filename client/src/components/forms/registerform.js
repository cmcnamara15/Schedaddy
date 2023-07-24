import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

const RegisterForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [ user, setUser] = useState({
    email: '',
    password: ''
  });

  const [validated, setValidated] = useState(false);

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
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    };

    setValidated(true);
    alert(`${user.email} has successfully created an account. It looks like your password is ${user.password} too...`);
  };




  return (
    <>
    <a onClick={handleModalOpen}>
      Register here
    </a>
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <input
            required
            className='form-control'
            value={user.email}
            name="email"
            type="email"
            placeholder='Email'
            onChange={handleInputChange} /> 
          </Form.Group>
          <br/>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <input
              required
              className='form-control'
              value={user.password}
              name='password'
              type='password'
              placeholder='Password'
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <input
              required
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