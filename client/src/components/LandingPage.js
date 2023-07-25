import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Auth from '../utils/auth';
import Schedule from "./Schedule/Schedule";
import Typewriter from "typewriter-effect";

import bg from '../images/light-bg.jpg';

const LandingPage = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <Schedule />
      ) : (
        <>
        <Container 
        fluid 
        className='text-center my-1' 
        style={{ 
          paddingTop: '20%',
          height: '85vh',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:"cover",
          alignItems: "center",
          justifyContent: "center",
          zIndex: '-2'
        }}
        >
          <Row>
            <div className='col-12 col-md-6'>
            <div className ="jumbotron">
              <h1 className="display-4 fw-semibold" style={{ fontSize: '3rem' }}>Schedaddy</h1>
              <div className="App" style={{ fontSize: '1.25rem' }}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                    onInit={(typewriter) => {
                        typewriter 
                            .typeString("Improved efficiency")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Real-time insights")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Efficient resource allocation")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
            </div>
            <p className="lead mt-5 pt-5">Please <a href="/login" className="text-decoration-none">log in</a> to begin.</p>
            </div>
            <div className='col-12 col-md-6'></div>
          </Row>
        </Container>
        </>
      )}
    </div>
  )
}

export default LandingPage
