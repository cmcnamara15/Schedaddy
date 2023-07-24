import React from 'react'

import CompanyForm from "./forms/CompanyForm";
import EmptyCompany from "./partials/EmptyCompany";

import { FaFileCirclePlus } from 'react-icons/fa6';

const AddCompany = () => {
  return (
    <div className="container">
      <h4>Already have a company profile?</h4>
      <label >Company ID:</label>
      <input type="text" />
      <button className='btn btn-primary'>Submit</button>
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
