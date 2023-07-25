import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Modal } from 'react-bootstrap';
import Datetime from 'react-datetime'; 
import { AiOutlinePlus } from 'react-icons/ai';

import { useQuery } from "@apollo/client";
import { FIND_ALL_USERS, FIND_ALL_POSITIONS } from '../../utils/queries';

const AddShiftForm = ({ onAddShift }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        user: '',
        position: '',
        startTime: '',
        endTime: '',
        notes: '',
    });
    
    // queries to fetch users and positions for dropdowns
    const { data: userData, loading: userLoading, error: userError } = useQuery(FIND_ALL_USERS);
    const { data: positionData, loading: positionLoading, error: positionError } = useQuery(FIND_ALL_POSITIONS);

    if (userLoading || positionLoading) {
        return <div>Loading...</div>;
    }

    if (userError) {
        console.error('Error fetching users:', userError);
        return <div>Error fetching users.</div>;
    }

    if (positionError) {
        console.error('Error fetching positions:', positionError);
        return <div>Error fetching positions.</div>;
    }

    const users = userData?.users || [];
    const positions = positionData?.positions || [];

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (id, date) => {
        setFormData((prevState) => ({ ...prevState, [id]: date }));
    };
    
    const handleDropdownChange = (id,value) => {
        if (value) {
        setFormData((prevState) => ({ ...prevState, [id]: value }));
        }
    };

    const handleSubmit = () => {
        const newShift = {
            user: formData.user,
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
            user: '',
            position: '',
            startTime: '',
            endTime: '',
            notes: '',
        });
    };

    return (
        <>
        {/* ADD SHIFT BUTTON */}
        <Button variant="primary" onClick={handleShow}>
            <AiOutlinePlus/><span className='ms-1'>Add Shift</span>
        </Button>
        
        {/* MODAL******************************* */}
        <Modal show={showModal} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Add Shift</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    
                    {/* DROPDOWNS */}

                    {/* user/employee dropdown */}
                    <div className='row mb-3'>
                        <Form.Select
                            required
                            value={formData.user}
                            onChange={(event) => handleDropdownChange('user', event.target.value)}
                            >
                                <option value="">Select an Employee</option>
                                {users.map((user) => (
                                    <option key={user._id} value={user.firstName + ' ' + user.lastName}>
                                        {user.firstName} {user.lastName}
                                    </option>
                            ))}
                        </Form.Select>
                    </div>
                    
                    {/* position dropdown */}
                    <div className='row mb-3'>
                        <Form.Select
                            required
                            value={formData.position}
                            onChange={(event) => handleDropdownChange('position', event.target.value)}
                            >
                                <option value="">Select a Position</option>
                                {positions.map((position) => (
                                <option key={position._id} value={position.jobTitle}>
                                    {position.jobTitle}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                    
                    {/* DATE PICKERS ROW*/}
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

export default AddShiftForm