import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import Container from 'react-bootstrap/esm/Container';
import { Button, Modal, Form } from 'react-bootstrap';

import EmptyPosition from '../partials/EmptyPosition';
import FormInput from '../partials/FormInput';

import { ADD_POSITION, UPDATE_POSITION } from '../../utils/mutations';

const PositionForm = ({ p, id, button }) => {
  const [position, setPosition] = useState(p);
  
  const [addPosition, { addError }] = useMutation(ADD_POSITION);
  const [updatePosition, { updateError }] = useMutation(UPDATE_POSITION);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPosition({...position, [name]: value});
  };

  const handleFormClear = (e) => {
    e.preventDefault();
    setPosition(EmptyPosition);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (event.currentTarget.getAttribute('data-type') === 'new') {
      const { data, error } = await addPosition({
        variables: {
          jobTitle: position.jobTitle,
        }
      })
    } else {
      const { data, error } = await updatePosition({
        variables: {
          id: position._id,
          jobTitle: position.jobTitle,
        }
      })
    }

    setPosition(EmptyPosition);
    window.location.reload();
  };

  return (
    <>
      {button}

      <div className="modal fade text-start" id={`positionForm-${id}`} tabIndex='-1' aria-labelledby="positionFormLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="positionFormLabel">Position</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <form className='m-3' onSubmit={handleFormSubmit} data-type={id}>
              <div className="modal-body">
                <div className="container-fluid">
                  <FormInput
                    type="text"
                    title="Job Title"
                    name="jobTitle"
                    value={position.jobTitle}
                    onChange={handleInputChange}
                    numInRow={1}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input className="btn btn-primary m-1 col-2" type="button" value="Submit" onClick={handleFormSubmit} data-type={id}/>
                <input className="btn btn-secondary m-1 col-2" type="button" value="Clear" onClick={handleFormClear} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

PositionForm.defaultProp = {
  p: {
    jobTitle: EmptyPosition,
  }
}

export default PositionForm
