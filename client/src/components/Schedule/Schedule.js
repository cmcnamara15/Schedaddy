import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import shifts from './ScheduleList';
import { Modal, Button } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

const EventTitle = ({ event }) => (
  <div>
    <strong>{event.title}</strong>
  </div>
);

const AgendaEvent = ({ event }) => (
  <div>
    <strong>{event.title}</strong>
    <p>Employee: {event.position}</p>
    <p>Note: {event.note}</p>
  </div>
);

const Schedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => setSelectedEvent(event);

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
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Position: {selectedEvent?.position}</p>
          <p>Note: {selectedEvent?.note}</p>
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
