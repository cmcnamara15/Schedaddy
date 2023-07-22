import React, { useEffect, useState } from 'react';
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

const LoginForm = () => {

  const [ user, setUser ] = useState({ email: '', password: ''});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value})
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`You have succesfully logged in ${user.email}, here is your password: ${user.password}`);
  };

  useEffect(() => {
    // For debugging/state evaluation purposes
    console.log(user);
  }, [user])

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1 style={{marginTop: 175 + 'px'}}>Login</h1>
            <div className='card'>
              <div className='card-body'>
                <Form>
                  <Form.Group controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <input
                      className='form-control'
                      value={user.email}
                      name="email"
                      type="email"
                      placeholder='example@example.com'
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
                  <input className='btn btn-secondary m-1 col-2' type="button" value="Login" onClick={handleFormSubmit} />
                </Form>
                < RegisterForm />
              </div>
            </div>

          </Col>
          <Col md={6}>
            <h1>Right</h1>
            <p>Image will be here at some point</p>
            <Image src='logo512.png' />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LoginForm