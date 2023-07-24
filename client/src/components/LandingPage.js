import React from 'react'

import Auth from '../utils/auth';

const LandingPage = () => {
  return (
    <div className='conatiner text-center my-5'>
      {Auth.loggedIn() ? (
        <>
          <h2>Welcome to Schedaddy!</h2>
          <p>Thank you for signing in.</p>
        </>
      ) : (
        <>
          <h2>Welcome to Schedaddy!</h2>
          <p>Please <a href="/login">log in</a> to begin.</p>
        </>
      )}
      
    </div>
  )
}

export default LandingPage
