import React, { useState } from 'react'

import FormInput from '../partials/FormInput';
import EmptyCompany from '../partials/EmptyCompany';
import States from '../partials/States';


const CompanyForm = ({ c, button }) => {
  const [company, setCompany] = useState(c);

  const handleAddressChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCompany({...company, ['companyAddress']: {...company.companyAddress, [name]: value}});
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCompany({...company, [name]: value});
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    setCompany(c);
  };

  const handleFormClear = (e) => {
    e.preventDefault();
    setCompany(EmptyCompany);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`New Company ${company.companyName} added!`);
    setCompany(EmptyCompany);
  };

  return (
    <>
      {button}

      <div className="modal fade text-start" id={`companyForm`} tabIndex='-1' aria-labelledby="companyFormLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="companyFormLabel">Company Info</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <form className='m-3'>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <FormInput
                      type="text"
                      title="Company Name"
                      name="companyName"
                      value={company.companyName}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="text"
                      title="Company Phone"
                      name="companyPhone"
                      value={company.companyPhone}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="text"
                      title="Company Admin ID"
                      name="companyAdmin"
                      value={company.companyAdmin}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                  </div>
                  <br />
                  <h4>Address</h4>
                  <div className="row">
                    <FormInput
                      type="text"
                      title="Street 1"
                      name="street1"
                      value={company.companyAddress?.street1 || ''}
                      onChange={handleAddressChange}
                      numInRow={2}
                    />
                    <FormInput
                      type="text"
                      title="Street 2"
                      name="street2"
                      value={company.companyAddress?.street2 || ''}
                      onChange={handleAddressChange}
                      numInRow={2}
                    />
                  </div>
                  <div className="row">
                    <FormInput
                      type="text"
                      title="City"
                      name="city"
                      value={company.companyAddress?.city || ''}
                      onChange={handleAddressChange}
                      numInRow={3}
                    />
                    <div className="col-lg-4 my-1">
                      <label className='form-label'>State</label>
                      <select
                        className='form-control'
                        value={company.companyAddress?.state || ''}
                        name="state"
                        onChange={handleAddressChange}
                      >
                        <States />
                      </select>
                    </div>
                    <FormInput
                      type="number"
                      title="Zip Code"
                      name="zip"
                      value={company.companyAddress?.zip || ''}
                      onChange={handleAddressChange}
                      numInRow={3}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <input className="btn btn-primary m-1 col-2" type="button" value="Submit" onClick={handleFormSubmit}/>
                <input className="btn btn-secondary m-1 col-2" type="button" value="Clear" onClick={handleFormClear} />
                <input className="btn btn-secondary m-1 col-2" type="button" value="Reset" onClick={handleFormReset} />
              </div>
            </form>
          </div>
        </div>
         
      </div>
    </>
  )
}

CompanyForm.defaultProps = {
  c: EmptyCompany
}

export default CompanyForm
