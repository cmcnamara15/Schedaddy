import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { FIND_ALL_SHIFTS } from '../../utils/queries.js';


const ShiftList = () => {
    const { loading, error, data } = useQuery(FIND_ALL_SHIFTS);
    const [showModal, setShowModal] = useState(false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { shifts } = data;

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>All Shifts</h2>
            <Button variant="primary" onClick={handleShowModal}>
                Show Shifts Modal
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>

                <Modal.Header closeButton>
                    <Modal.Title>All Shifts</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    {shifts.map((shift) => (
                        <div key={shift._id}>
                            <p>Shift ID: {shift._id}</p>
                            <p>
                                User: {shift.user ? `${shift.user.firstName} ${shift.user.lastName}` : 'N/A'}
                            </p>
                            <p>Position: {shift.position ? shift.position.jobTitle : 'N/A'}</p>
                            <p>Start: {shift.startDateTime}</p>
                            <p>End: {shift.endDateTime}</p>
                            <p>Note: {shift.note}</p>
                            <hr />
                        </div>
                    ))}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
};

export default ShiftList;
