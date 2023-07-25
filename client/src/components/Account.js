import React from 'react'
import { redirect } from 'react-router-dom';

import Auth from '../utils/auth';

const Account = () => {
  console.log(Auth.hasUser());
  return (
    <div>
      
    </div>
  )
}

export default Account
