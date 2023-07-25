import { useQuery } from '@apollo/client'
import React from 'react'

import { FIND_ME, FIND_SINGLE_COMPANY } from '../utils/queries';
import Auth from '../utils/auth';
import RequestSignIn from './partials/RequestSignIn';
import { redirect } from 'react-router-dom';

const AccountPage = () => {
  const accountData = Auth.getProfile().data;

  const { data: userData, loading: userLoading, error: userError } = useQuery(FIND_ME);
  const { data: companyData, loading: companyLoading, error: companyError } = useQuery(FIND_SINGLE_COMPANY, {
    variables: {
      id: accountData.companyId
    }
  });

  if (userLoading || companyLoading) return <p className='text-center my-5'>Loading User Data...</p>;

  if (userError) return <p className='text-center my-5'>Error loading User Data: <em>{userError.message}</em></p>;

  const { user } = userData.me;
  const { company } = companyData

  if (companyError) return <p className='text-center my-5'>Error loading Company Data: <em>{companyError.message}</em></p>;

  return (
    <div className="container my-5">
      <h2>Account Info</h2>

      <div className="card">
        <div className="card-header">
          <h5>Personal Info</h5>
        </div>
        <div className="card-body">
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.userAddress ? (
            `${user.userAddress.street1}\n`
            `${user.userAddress?.street2}\n`
            `${user.userAddress?.city}, ${user.userAddress.state} ${user.userAddress.zip}`
          ) : (
            <em>edit profile to add Address</em>
          )}</p>
        </div>
      </div>

      <br/>

      <div className="card">
        <div className="card-header">
          <h5>Company Profile</h5>
        </div>
        <div className="card-body">
          <p>Company Name: {company.companyName}</p>
          <p>Company Phone: {company.companyPhone}</p>
          <p>Address: {company.companyAddress ? (
            `${user.userAddress.street1}\n`
            `${user.userAddress?.street2}\n`
            `${user.userAddress?.city}, ${user.userAddress.state} ${user.userAddress.zip}`
          ) : (
            <em>edit profile to add Address</em>
          )}</p>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
