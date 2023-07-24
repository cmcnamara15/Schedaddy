import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ShiftListModal from './ShiftListModal';
import AddShiftForm from './AddShiftForm';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useQuery } from '@apollo/client';
import { FIND_ALL_SHIFTS } from '../../utils/queries.js';

const localizer = momentLocalizer(moment);

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
    const [shifts, setShifts] = useState([]);

    const { loading, error, data } = useQuery(FIND_ALL_SHIFTS);

    useEffect(() => {
        if (loading) return;
        if (error) console.log('Error:', error.message);
        if (data) setShifts(formatShifts(data.shifts)); 
    }, [data, error, loading]);

    const handleEventClick = (event) => setSelectedEvent(event);

    const addShift = (newShift) => {
        setShifts((prevShifts) => [...prevShifts, newShift]);
        // need additional logic to add the new shift to the database
    };

    // format shifts data
    const formatShifts = (shiftsData) => {
        return shiftsData.map((shift) => ({
        id: shift._id,
        title: `${shift.user.firstName} ${shift.user.lastName}`,
        start: new Date(shift.startDateTime),
        end: new Date(shift.endDateTime),
        user: shift.user.firstName,
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
                <Button onClick={() => setSelectedEvent(null)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default Schedule;
