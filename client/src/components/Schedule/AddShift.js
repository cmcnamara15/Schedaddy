import React, { useState } from 'react';
import { Form, Dropdown, FormGroup, FormLabel, FormControl, Button, Modal } from 'react-bootstrap';

const AddShiftButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
        <div className='row'>

            <div className='col'>
                <h1>My Calendar</h1>
            </div>

            <div className="col d-flex justify-content-end">
                <Button variant="primary" onClick={handleShow}>
                    Add Shift
                </Button>
            </div>
        
        </div>

        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Shift</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                {/* Employee Drop Down */}
                    <Dropdown className='mb-50'>
                        <Dropdown.Toggle variant="primary">
                            Select an employee:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>
                                    
                {/* Position Drop Down */}
                <Dropdown>
                    <Dropdown.Toggle variant="primary">
                        Select a position:
                    </Dropdown.Toggle>
                
                    <Dropdown.Menu>
                        <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
                    
                    </Dropdown.Menu>
                </Dropdown>

                {/* Start Time */}
                <FormGroup controlId="startTime">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl type="time" />
                </FormGroup>

                {/* End Time */}
                <FormGroup controlId="endTime">
                    <FormLabel>End Time</FormLabel>
                    <FormControl type="time" />
                </FormGroup>

                {/* Notes */}
                <FormGroup controlId="notes">
                    <FormLabel>Notes</FormLabel>
                    <FormControl as="textarea" />
                </FormGroup>
            </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
        </>
        
        
    )
}
export default AddShiftButton