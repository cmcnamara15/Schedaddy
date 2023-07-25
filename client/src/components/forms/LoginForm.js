import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
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

    try {
      const { data } = await login({
        variables: { ...user }
      });

      Auth.login(data.login.token);
      console.log(Auth.getProfile());
    } catch (e) {
      console.error(e);
    }

    //clear form values
    setUser({
      email: '',
      password: ''
    });
  };

  // useEffect(() => {
  //   // For debugging/state evaluation purposes
  //   console.log(user);
  // }, [user])

  return (
    <>
      <Container>
        <Row>
          <Col md={6} style={{marginTop: 300 + 'px'}}>
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
                  <Button className='btn btn-secondary m-1 col-2' type="submit">Login</Button>
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
          <Col md={6} style={{marginTop: 375 + 'px'}}>
            <div className='jumbotron'>
              <h1 className="display-4">Schedaddy Login</h1>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LoginForm
