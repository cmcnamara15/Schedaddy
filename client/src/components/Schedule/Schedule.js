import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ShiftListModal from './ShiftListModal';
import AddShiftForm from './AddShiftForm';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useQuery, useMutation} from '@apollo/client';
import { FIND_ALL_SHIFTS } from '../../utils/queries.js';
import { ADD_SHIFT, DELETE_SHIFT } from '../../utils/mutations';

const localizer = momentLocalizer(moment);

// functions to format shift data for different calendar views
const EventTitle = ({ event }) => (
    <div>
        <strong>{event.user}</strong>
    </div>
);

const AgendaEvent = ({ event }) => (
    <div>
        <strong>{event.user}</strong>
        <p>Position: {event.position}</p>
        {event.note !== "" && <p>Note: {event.note}</p>}
    </div>
);

const Schedule = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const handleEventClick = (event) => setSelectedEvent(event);
    const [shifts, setShifts] = useState([]);
    
    // query to find all shifts
    const { loading, error, data } = useQuery(FIND_ALL_SHIFTS);

    useEffect(() => {
        if (loading) return;
        if (error) console.log('Error:', error.message);
        if (data) setShifts(formatShifts(data.shifts)); 
    }, [data, error, loading]);

    // mutation to add shift
    // need mutation
    const addShift = (newShift) => {
        setShifts((prevShifts) => [...prevShifts, newShift]);
        // need additional logic to add the new shift to the database
    };

    // mutation to delete shift
    const [deleteShift] = useMutation(DELETE_SHIFT, {
        update(cache) {
            cache.modify({
                fields: {
                    shifts(existingShifts = [], { readField }) {
                        return existingShifts.filter(shift => {
                        const eventId = readField('id', shift);
                        return eventId !== selectedEvent.id;
                        });
                    },
                },
            });
        },
        refetchQueries: [{ query: FIND_ALL_SHIFTS }],
    });

    const handleDeleteClick = () => {
        if (selectedEvent) {
            deleteShift({ variables: { id: selectedEvent.id } })
                .then(() => {
                setSelectedEvent(null);
                })
            .catch((error) => {
                console.error('Error deleting shift:', error.message);
            });
        }
    };

    // format shifts data
    const formatShifts = (shiftsData) => {
        return shiftsData.map((shift) => ({
            id: shift._id,
            title: `${shift.user.firstName} ${shift.user.lastName}`,
            start: new Date(shift.startDateTime),
            end: new Date(shift.endDateTime),
            user: `${shift.user.firstName} ${shift.user.lastName}`,
            position: shift.position.jobTitle,
            note: shift.note,
        }));
    };

    return (
        <div className='container'>
            {/* SCHEDULE HEADER ******************************** */}
            <div className='mt-3 mb-3 d-flex align-items-center'>
                {/* CALENDAR TITLE */}
                <div className='col'>
                    <h1>My Calendar</h1>
                </div>

                {/* ALL SHIFTS BUTTON */}
                <div className='col d-flex justify-content-center'>
                    <ShiftListModal />
                </div>

                {/* ADD SHIFTS BUTTON */}
                <div className='col d-flex justify-content-end'>
                    <AddShiftForm onAddShift={addShift} />
                </div>
            </div>

            {/* CALENDAR *************************************** */}
            <Calendar
                localizer={localizer}
                events={shifts} // Use the queried shifts data here
                startAccessor="start"
                endAccessor="end"
                defaultView="agenda"
                style={{ height: 700 }}
                components={{
                event: EventTitle, // show only the event title in month, week, and day views
                agenda: {
                    event: AgendaEvent, // show full details in the agenda view
                },
                }}
                onSelectEvent={handleEventClick}
            />

            {/* CALENDAR EVENT MODALS ************************** */}
            <Modal show={selectedEvent !== null} onHide={() => setSelectedEvent(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent?.user}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Position: {selectedEvent?.position}</p>
                    {selectedEvent?.note !== "" ? (
                        <p>Note: {selectedEvent?.note}</p>
                    ) : ("")}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleDeleteClick}>
                        Delete
                    </Button>

                    <Button onClick={() => setSelectedEvent(null)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Schedule;
