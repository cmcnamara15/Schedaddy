import React, { useEffect, useState } from 'react';

import States from '../partials/States';
import Checkbox from '../partials/Checkbox';

const EmployeeForm = ({ u }) => {
  const [user, setUser] = useState(u);
  // const [firstName, setFirstName] = useState(user.firstName);
  // const [lastName, setLastName] = useState(user.lastName);
  // const [street1, setStreet1] = useState(user.street1);
  // const [street2, setStreet2] = useState(user.street2);
  // const [city, setCity] = useState(user.city);
  // const [state, setState] = useState(user.state);
  // const [zip, setZip] = useState(user.zip);
  // const [email, setEmail] = useState(user.email);
  // const [password, setPassword] = useState(user.password);
  // const [hireDate, setHireDate] = useState(user.hireDate);
  // const [terminationDate, setTerminationDate] = useState(user.terminationDate);
  // const [payRate, setPayRate] = useState(user.payRate);
  // const [fullTime, setFullTime] = useState(user.fullTime);
  // const [active, setActive] = useState(user.active);
  // const [isAdmin, setIsAdmin] = useState(user.isAdmin);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`New Employee ${user.firstName} ${user.lastName} added!`);
  };

  useEffect(() => {
    // For debugging/state evaluation purposes
    console.log(user);
  }, [user])

  return (
    <form className='m-3'>
      <h2>Employee Info</h2>
      <div className="row">
        <div className="col-lg-6 my-1">
          <label className='form-label'>First Name</label>
          <input
            className='form-control'
            value={user.firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            autoFocus={true}
          />
        </div>
        <div className="col-lg-6 my-1">
          <label className='form-label'>Last Name</label>
          <input
            className='form-control'
            value={user.lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <br />
      <h4>Address</h4>
      <div className="row">
        <div className="col-lg-6 my-1">
          <label className='form-label'>Street 1</label>
          <input
            className='form-control'
            value={user.address.street1}
            name="street1"
            onChange={handleAddressChange}
            type="street1"
            placeholder="Street 1"
          />
        </div>
        <div className="col-lg-6 my-1">
          <label className='form-label'>Street 2</label>
          <input
            className='form-control'
            value={user.address.street2}
            name="street2"
            onChange={handleAddressChange}
            type="text"
            placeholder="Street 2 (optional)"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 my-1">
        <label className='form-label'>City</label>
          <input
            className='form-control'
            value={user.address.city}
            name="city"
            onChange={handleAddressChange}
            type="text"
            placeholder="City"
          />
        </div>
        <div className="col-lg-4 my-1">
        <label className='form-label'>State</label>
          <select
            className='form-control'
            value={user.address.state}
            name="state"
            onChange={handleAddressChange}
          >
            <States />
          </select>
        </div>
        <div className="col-lg-4 my-1">
          <label className='form-label'>Zip Code</label>
          <input
            className='form-control'
            value={user.address.zip}
            name="zip"
            onChange={handleAddressChange}
            type="number"
            placeholder="Zip Code"
          />
        </div>
      </div>
      <br />
      <h4>Log-in Info</h4>
      <div className="row">
        <div className="col-lg-6 my-1">
          <label className='form-label'>Email</label>
          <input
            className='form-control'
            value={user.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="col-lg-6 my-1">
          <label className='form-label'>Password</label>
          <input
            className='form-control'
            value={user.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <br />
      <h4>Employment Info</h4>
      <div className="row">
        <div className="col-lg-4 my-1">
          <label className='form-label'>Pay Rate</label>
          <input
            className='form-control'
            value={user.payRate}
            name="payRate"
            onChange={handleInputChange}
            type="number"
            placeholder="Pay Rate"
          />
        </div>
        <div className="col-lg-4 my-1">
          <label className='form-label'>Hire Date</label>
          <input
            className='form-control'
            value={user.hireDate}
            name="hireDate"
            onChange={handleInputChange}
            type="date"
            placeholder="Hire Date"
          />
        </div>
        <div className="col-lg-4 my-1">
          <label className='form-label'>Termination Date</label>
          <input
            className='form-control'
            value={user.terminationDate}
            name="terminationDate"
            onChange={handleInputChange}
            type="date"
            placeholder="Termination Date"
          />
        </div>
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
      <br />
      <div className="row justify-content-center">
        <input className="btn btn-primary m-1 col-2" type="submit" value="Submit" />
        <input className="btn btn-secondary m-1 col-2" type="button" value="Clear Changes" onClick={handleFormReset} />
      </div>
      
    </form>
  )
}

EmployeeForm.defaultProps = {
  u: {
    firstName: "Joe",
    lastName: "Guy",
    address: {
      street1: "123 Main St",
      street2: "Apt B",
      city: "New York",
      state: "NY",
      zip: "12345",
    },
    email: "guy@email.com",
    password: "password123",
    hireDate: "2014-06-23",
    terminationDate: "2019-08-14",
    payRate: "15",
    fullTime: true,
    active: false,
    isAdmin: false
  }
}

export default EmployeeForm
