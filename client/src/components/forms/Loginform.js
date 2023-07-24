import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [ user, setUser ] = useState({ email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

//update state based on form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setUser({
      ...user,
      [name]: value
    });
  };

  //submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // alert(`You have succesfully logged in ${user.email}, here is your password: ${user.password}`);

    try {
      const { data } = await login({
        variables: { ...user }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    //clear form values
    setUser({
      email: '',
      password: ''
    });
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
                {data ? (
                  <p> 
                    Noice you logged in successfully
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                <Form onSubmit={handleFormSubmit}>
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
                )}

                {error && (
                  <div className='my-3 p-3 bg-danger text-white'>
                    {error.message}
                  </div>
                )}
                < RegisterForm />
                
              </div>
            </div>

          </Col>
          <Col md={6}>
            <Image src='logo512.png' />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LoginForm