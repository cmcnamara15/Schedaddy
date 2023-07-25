import React from 'react'

import { useQuery } from '@apollo/client';
import { FIND_ME } from '../utils/queries';

const TestPage = () => {
  const { data: accountData, loading: accountLoading, error: accountError } = useQuery(FIND_ME);
  if (accountError) {
    console.log(accountError.message)
  }

  console.log(accountData)
  return (
    <div>
      
    </div>
  )
}

export default TestPage
