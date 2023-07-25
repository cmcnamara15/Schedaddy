import { useQuery } from '@apollo/client'
import React from 'react'

import { FIND_ME, FIND_SINGLE_COMPANY } from '../utils/queries';
import Auth from '../utils/auth';
import RequestSignIn from './partials/RequestSignIn';
import { redirect } from 'react-router-dom';

const AccountPage = () => {
  const sessionData = Auth.getProfile();
  console.log(sessionData);
  if (!sessionData.userId) {
    redirect('/createUser');
  }
  if (!sessionData.userCompany) {
    redirect('/createCompany');
  }
  const { data: userData, loading: userLoading, error: userError } = useQuery(FIND_ME);
  const { data: companyData, loading: companyLoading, error: companyError } = useQuery(FIND_SINGLE_COMPANY, {
    variables: {
      id: Auth?.userCompany
    }
  });

  if (userLoading || companyLoading) return <p className='text-center my-5'>Loading User Data...</p>;

  if (userError) return <p className='text-center my-5'>Error loading User Data: <em>{userError.message}</em></p>;
  const { user } = userData.me;
  console.log(user);

  if (companyError) return <p className='text-center my-5'>Error loading Company Data: <em>{companyError.message}</em></p>;

  return (
    <>
      {Auth.loggedIn() ? (
        <div className="container">
          <h5>Company Profile</h5>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Company ID: {user.companyId ? (
            user.companyId
          ) : (
            <em>please link company ID</em>
          )}</p>
          <br/>
          <h5>Personal Info</h5>
          <p>Address: {user.userAddress ? (
            `${user.userAddress.street1}\n`
            `${user.userAddress?.street2}\n`
            `${user.userAddress?.city}, ${user.userAddress.state} ${user.userAddress.zip}`
          ) : (
            <em>edit profile to add Address</em>
          )}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <RequestSignIn/>
      )}
    </>
  )
}

export default AccountPage
