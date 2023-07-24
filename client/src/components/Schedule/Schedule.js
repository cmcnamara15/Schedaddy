import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import shiftsData from './shifts';
import AddShift from './AddShift';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const handleEventClick = (event) => setSelectedEvent(event);

  const [shifts, setShifts] = useState(shiftsData);

  const addShift = (newShift) => {
    setShifts((prevShifts) => [...prevShifts, newShift]);
  };

  return (
    <div className='container'>
      
      <AddShift onAddShift={addShift}/>

      <Calendar
        localizer={localizer}
        events={shifts}
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
