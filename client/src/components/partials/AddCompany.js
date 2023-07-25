import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { FIND_ME } from '../../utils/queries';
import { UPDATE_USER } from '../../utils/mutations';

import FormInput from './FormInput';
import CompanyForm from "../forms/CompanyForm";
import EmptyCompany from "./EmptyCompany";

import Auth from '../../utils/auth';

const AddCompany = () => {
  const [companyCode, setCompanyCode] = useState('');

  const [updateUser, {linkError}] = useMutation(UPDATE_USER);

  const accountData = Auth.getProfile().data;
  console.log(accountData)

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCompanyCode(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await updateUser({
        variables: {
          id: accountData.me.user._id,
          input: {
            userCompany: companyCode
          }
        }
      })
      // window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
    
  }
  return (
    <div className="container">
      <h3 className='text-center'>No company profile found!</h3>
      <br/>
      <h4>Already have a company profile?</h4>
      <p><em>This should only be used if absolutely necessary... First time users should create a new company profile</em></p>
      <form onSubmit={handleFormSubmit}>
        <FormInput 
          type="text"
          title="Company ID"
          name="companyCode"
          value={companyCode}
          onChange={handleInputChange}
          numInRow={2}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      <br/>
      <br/>
      <CompanyForm c={EmptyCompany} button={
        <button type='button' className='btn btn-secondary' data-bs-toggle='tooltip' data-bs-placement='left' title='Add an Employee'>
          <span data-bs-toggle='modal' data-bs-target='#companyForm'>
            Create New Company
          </span>
        </button>
      }/>
    </div>
  )
}

export default AddCompany
