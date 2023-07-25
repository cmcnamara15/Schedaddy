import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const RegisterForm = () => {
  const [ user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showModal, setShowModal] = useState(false);

  const [createAccount, { error, data }] = useMutation(CREATE_ACCOUNT);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user.password === user.confirmPassword) {
        const { data } = await createAccount({
          variables: {
            email: user.email,
            password: user.password,
          }
        });

        Auth.login(data.createAccount.token);
      } else {
        alert('Passwords do not match!')
      }
    } catch (e) {
      console.error(e);
    }
    // alert(`${user.email} has successfully created an account. It looks like your password is ${user.password} too...`);
  };


  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUser({
      email: '',
      password: '',
      confirmPassword: ''
    });
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
        {data ? (
          <p> Nice! Account Created</p>
        ) : (
        <Form onSubmit={handleFormSubmit}>
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
          <br/>
          <Form.Group controlId='formConfirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <input
              required
              className='form-control'
              value={user.confirmPassword}
              name='confirmPassword'
              type='password'
              placeholder='Password'
              onChange={handleInputChange} />
          </Form.Group>
          <br/>
          <input className='btn btn-secondary m-1 col-2' type='button' value="Submit" onClick={handleFormSubmit} />
        </Form>
        )}

        {error && (
          <div className='my-3 p-3 bg-danger text-white'>
            {error.message}
          </div>
        )}
      </Modal.Body>
    </Modal>
    </>
  )
}

export default RegisterForm
