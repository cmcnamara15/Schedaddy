import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import moment from 'moment';

import { useQuery } from '@apollo/client';
import { FIND_ALL_SHIFTS } from '../../utils/queries.js';


const ShiftListModal = () => {
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
            <Button variant="secondary" onClick={handleShowModal}>
                All Shifts
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>

                <Modal.Header closeButton>
                    <Modal.Title>All Shifts</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    {shifts.map((shift) => (
                        <div key={shift._id}>
                            <p><strong>
                                User:</strong> {shift.user ? `${shift.user.firstName} ${shift.user.lastName}` : 'N/A'}
                            </p>
                            <p><strong>Position:</strong> {shift.position ? shift.position.jobTitle : 'N/A'}</p>
                            <p><strong>Start:</strong> {moment(shift.startDateTime).format('ddd, MMM D, YYYY h:mm A')}</p>
                            <p><strong>End:</strong> {moment(shift.endDateTime).format('ddd, MMM D, YYYY h:mm A')}</p>
                            <p><strong>Note:</strong> {shift.note}</p>
                            <p><strong>Shift ID:</strong> {shift._id}</p>
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

export default ShiftListModal;
