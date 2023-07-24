import React, { useState } from 'react';
import { Form, Dropdown, FormGroup, FormLabel, FormControl, Button, Modal } from 'react-bootstrap';
import Datetime from 'react-datetime'; 
import { useMutation } from '@apollo/client';
import { ADD_SHIFT } from '../../utils/mutations';

const AddShift = ({ onAddShift }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        position: '',
        startTime: '',
        endTime: '',
        notes: '',
    });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (id, date) => {
        setFormData((prevState) => ({ ...prevState, [id]: date }));
    };
    
    const handleDropdownChange = (id, value) => {
        setFormData((prevState) => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = () => {

        const newShift = {
            title: formData.title,
            start: new Date(formData.startTime),
            end: new Date(formData.endTime),
            position: formData.position,
            note: formData.notes,
        };

        onAddShift(newShift);
        handleClose();
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            title: '',
            position: '',
            startTime: '',
            endTime: '',
            notes: '',
        });
    };

    return (
        <>
        <div className='row mt-3 mb-3'>

        {/* CALENDAR TITLE */}
            <div className='col'>
                <h1>My Calendar</h1>
            </div>

        {/* ADD SHIFT BUTTON */}
            <div className="col d-flex justify-content-end">
                <Button variant="primary" onClick={handleShow}>
                    Add Shift
                </Button>
            </div>
        
        </div>

        {/* MODAL******************************* */}
        <Modal show={showModal} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Add Shift</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    
                    {/* DROPDOWNS */}

                    <div className='row'>
                        {/* Employee Drop Down */}
                        <div className='mb-3 col-md-5'>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" required>
                                    Employee
                                </Dropdown.Toggle>


                                <Dropdown.Menu>
                                    <Dropdown.Item onSelect={() => handleDropdownChange('title', 'Test')}>
                                        Test Employee
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className='row'>
                        {/* Position Drop Down */}
                        <div className='mb-3 col-md-5'>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" required>
                                    Position
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onSelect={() => handleDropdownChange('position', `test`)}>
                                        Test Position
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className='row mb-3'>

                    {/* START TIME */}
                        <div className='col-md-5'>
                            <FormGroup controlId="startTime">
                                <FormLabel>Start Time</FormLabel>
                                <Datetime
                                value={formData.startTime}
                                onChange={(date) => handleChange('startTime', date)}
                                required
                                />
                            </FormGroup>
                        </div>

                    {/* END TIME */}
                        <div className='col-md-5'>
                            <FormGroup controlId="endTime">
                                <FormLabel>End Time</FormLabel>
                                <Datetime
                                value={formData.endTime}
                                onChange={(date) => handleChange('endTime', date)}
                                required
                                />
                            </FormGroup> 
                        </div>

                    </div>       

                    {/* NOTES */}
                    <div className='mb-3'>
                        <FormGroup controlId="notes">
                            <FormLabel>Notes</FormLabel>
                            <FormControl as="textarea" value={formData.notes} onChange={(event) => handleChange('notes', event.target.value)} />
                        </FormGroup>
                    </div>
                    
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="primary"  onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>

        </Modal>
        </>  
    )
}

export default AddShift