import React, { useEffect, useState } from 'react';
import { FaFileCirclePlus } from 'react-icons/fa6';

import States from '../partials/States';
import Checkbox from '../partials/Checkbox';
import FormInput from '../partials/FormInput';
import EmptyUser from '../partials/EmptyUser';
import DummyUser from '../partials/DummyUser';

const EmployeeForm = ({ u, id, button }) => {
  const [user, setUser] = useState(u);

  const handleCheck = (key, value) => {    
    setUser({...user, [key]: value});
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({...user, ['address']: {...user.address, [name]: value}});
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    setUser(u);
  }

  const handleFormClear = (e) => {
    e.preventDefault();
    setUser(EmptyUser);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`New Employee ${user.firstName} ${user.lastName} added!`);
    setUser(EmptyUser);
  };

  useEffect(() => {
    // For debugging/state evaluation purposes
    console.log(user);
  }, [user])

  return (
    <>
      {button}

      <div className="modal fade text-start" id={`addEmployeeForm-${id}`} tabindex='-1' aria-labelledby="addEmployeeFormLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="addEmployeeFormLabel">Employee Info</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <form className='m-3'>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <FormInput
                      type="text"
                      title="First Name"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleInputChange}
                      numInRow={2}
                    />
                    <FormInput
                      type="text"
                      title="Last Name"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleInputChange}
                      numInRow={2}
                    />
                  </div>
                  <br />
                  <h4>Address</h4>
                  <div className="row">
                    <FormInput
                      type="text"
                      title="Street 1"
                      name="street1"
                      value={user.address?.street1 || ''}
                      onChange={handleAddressChange}
                      numInRow={2}
                    />
                    <FormInput
                      type="text"
                      title="Street 2"
                      name="street2"
                      value={user.address?.street2 || ''}
                      onChange={handleAddressChange}
                      numInRow={2}
                    />
                  </div>
                  <div className="row">
                    <FormInput
                      type="text"
                      title="City"
                      name="city"
                      value={user.address?.city || ''}
                      onChange={handleAddressChange}
                      numInRow={3}
                    />
                    <div className="col-lg-4 my-1">
                      <label className='form-label'>State</label>
                      <select
                        className='form-control'
                        value={user.address?.state || ''}
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
                      value={user.address?.zip || ''}
                      onChange={handleAddressChange}
                      numInRow={3}
                    />
                  </div>
                  <br />
                  <h4>Log-in Info</h4>
                  <div className="row">
                    <FormInput
                      type="email"
                      title="Email"
                      name="email"
                      value={user.email || ''}
                      onChange={handleInputChange}
                      numInRow={2}
                    />
                    <FormInput
                      type="password"
                      title="Password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                      numInRow={2}
                    />
                  </div>
                  <br />
                  <h4>Employment Info</h4>
                  <div className="row">
                    <FormInput
                      type="number"
                      title="Pay Rate"
                      name="payRate"
                      value={user.payRate}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="date"
                      title="Hire Date"
                      name="hireDate"
                      value={user.hireDate}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="date"
                      title="Termination Date"
                      name="terminationDate"
                      value={user.terminationDate}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                  </div>
                  <br />
                  <Checkbox 
                    name={'fullTime'}
                    label={'Full Time'}
                    value={user.fullTime}
                    onChange={() => handleCheck('fullTime', !user.fullTime)}
                  />
                  <Checkbox 
                    name={'active'}
                    label={'Active'}
                    value={user.active}
                    onChange={() => handleCheck('active', !user.active)}
                  />
                  <Checkbox 
                    name={'admin'}
                    label={'Admin'}
                    value={user.isAdmin}
                    onChange={() => handleCheck('isAdmin', !user.isAdmin)}
                  />
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

EmployeeForm.defaultProps = {
  u: DummyUser
}

export default EmployeeForm
