import React, { useEffect, useState } from 'react';
import { FaFileCirclePlus } from 'react-icons/fa6';

import States from '../partials/States';
import Checkbox from '../partials/Checkbox';
import FormInput from '../partials/FormInput';
import EmptyUser from '../partials/EmptyUser';
import DummyUser from '../partials/DummyUser';
import { useMutation, useQuery } from '@apollo/client';
import { Button } from 'react-bootstrap';

import Auth from '../../utils/auth';
import { CREATE_USER } from '../../utils/mutations';
import { UPDATE_USER } from '../../utils/mutations';

const EmployeeForm = ({ u, id, button }) => {
  const [user, setUser] = useState(u);

  const [addEmployee, { addError }] = useMutation(CREATE_USER);
  const [updateEmployee, { updateError }] = useMutation(UPDATE_USER);

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

  useEffect(() => {
    console.log(user);
  }, [user])

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.firstName ||
      !user.lastName ||
      !user.hireDate ||
      !user.payRate ||
      !user.userAddress.street1 ||
      !user.userAddress.city ||
      !user.userAddress.state ||
      !user.userAddress.zip
    ) {
      alert("Missing required field");
      return;
    }

    if (e.currentTarget.getAttribute('data-type') === 'new') {
      console.log('creating user')
      const { data, error } = await addEmployee({
        variables: {
          input: {          
            firstName: user.firstName,
            lastName: user.lastName,
            userAddress: {
              street1: user.userAddress.street1,
              street2: user.userAddress.street2,
              city: user.userAddress.city,
              state: user.userAddress.state,
              zip: user.userAddress.zip
            },
            payRate: parseFloat(user.payRate),
            hireDate: user.hireDate,
            terminationDate: user.terminationDate,
            phone: user.phone,
            userCompany: Auth.getProfile().data.companyId,
            activeEmployee: user.activeEmployee,
            fullTime: user.fullTime,
            isAdmin: user.isAdmin
          }
        }
      })
    } else {
      console.log('updating employee')
      const { data, error } = await updateEmployee({
        variables: {
          id: id,
          input: {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            payRate: parseFloat(user.payRate),
            hireDate: user.hireDate,
            terminationDate: user.terminationDate,
            activeEmployee: user.activeEmployee,
            fullTime: user.fullTime,
            isAdmin: user.isAdmin,
            userAddress: {
              street1: user.userAddress.street1,
              street2: user.userAddress.street2,
              city: user.userAddress.city,
              state: user.userAddress.state,
              zip: user.userAddress.zip
            }
          }
        }
      })
    }

    setUser(EmptyUser);
    window.location.reload();
  };

  return (
    <>
      {button}

      <div className="modal fade text-start" id={`addEmployeeForm-${id}`} tabIndex='-1' aria-labelledby="addEmployeeFormLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="addEmployeeFormLabel">Employee Info</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <form className='m-3' data-type={id} onSubmit={handleFormSubmit}>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <FormInput
                      type="text"
                      title="First Name *"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="text"
                      title="Last Name *"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="text"
                      title="Phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                  </div>
                  <br />
                  <h4>Address</h4>
                  <div className="row">
                    <FormInput
                      type="text"
                      title="Street 1 *"
                      name="street1"
                      value={user.userAddress?.street1 || ''}
                      onChange={handleAddressChange}
                      numInRow={2}
                    />
                    <FormInput
                      type="text"
                      title="Street 2"
                      name="street2"
                      value={user.userAddress?.street2 || ''}
                      onChange={handleAddressChange}
                      numInRow={2}
                    />
                  </div>
                  <div className="row">
                    <FormInput
                      type="text"
                      title="City *"
                      name="city"
                      value={user.userAddress?.city || ''}
                      onChange={handleAddressChange}
                      numInRow={3}
                    />
                    <div className="col-lg-4 my-1">
                      <label className='form-label'>State *</label>
                      <select
                        className='form-control'
                        value={user.userAddress?.state || ''}
                        name="state"
                        onChange={handleAddressChange}
                      >
                        <States />
                      </select>
                    </div>
                    <FormInput
                      type="number"
                      title="Zip Code *"
                      name="zip"
                      value={user.userAddress?.zip || ''}
                      onChange={handleAddressChange}
                      numInRow={3}
                    />
                  </div>
                  <br />
                  <h4>Employment Info</h4>
                  <div className="row">
                    <FormInput
                      type="number"
                      title="Pay Rate *"
                      name="payRate"
                      value={user.payRate}
                      onChange={handleInputChange}
                      numInRow={3}
                    />
                    <FormInput
                      type="date"
                      title="Hire Date *"
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
                <input className="btn btn-primary m-1 col-2" type="button" value="Submit" onClick={handleFormSubmit} data-type={id} />
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
