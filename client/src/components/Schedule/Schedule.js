import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import shifts from './ScheduleList';
import { Modal, Button } from 'react-bootstrap'; 

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const shiftInfo = ({ event }) => (
    <div onClick={() => setSelectedEvent(event)}>
      <strong>{event.title}</strong>
      <p>Employee: {event.employee}</p>
      <p>Note: {event.note}</p>
    </div>
  );

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        localizer={localizer}
        events={shifts}
        startAccessor="start"
        endAccessor="end"
        defaultView="agenda"
        style={{ height: 700 }}
        components={{ event: shiftInfo }} 
      />

      <Modal show={selectedEvent !== null} onHide={() => setSelectedEvent(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Employee: {selectedEvent?.employee}</p>
          <p>Note: {selectedEvent?.note}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedEvent(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Schedule;