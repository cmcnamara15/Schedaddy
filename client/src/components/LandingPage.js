import React from 'react'

import Auth from '../utils/auth';

const LandingPage = () => {
  return (
    <div className='conatiner text-center my-5'>
      {Auth.loggedIn() ? (
        <>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Schedaddy!</h1>
          <p className="lead">Thanks for signing in <a href="/login" className="text-decoration-none">log in</a> to begin.</p>
        </div>
        </>
      ) : (
        <>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Schedaddy!</h1>
          <p className="lead">Please <a href="/login" className="text-decoration-none">log in</a> to begin.</p>
        </div>
        </>
      )}
    </div>
  )
}

export default LandingPage
