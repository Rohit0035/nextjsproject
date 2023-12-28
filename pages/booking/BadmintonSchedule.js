import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';

const BadmintonSchedule = () => {
  const [events, setEvents] = useState([
    {
      id: '1',
      resourceId: 'A',
      start: '2023-01-01T09:00:00',
      end: '2023-01-01T11:00:00',
      title: 'Booked',
    },
    {
      id: '2',
      resourceId: 'B',
      start: '2023-01-02T13:00:00',
      end: '2023-01-02T15:00:00',
      title: 'Booked',
    },
    // Add more booked time slots as needed
  ]);

  const resources = [
    { id: 'A', title: 'Court A' },
    { id: 'B', title: 'Court B' },
    { id: 'C', title: 'Court C' },
    { id: 'D', title: 'Court D' },
    { id: 'E', title: 'Court E' },
    { id: 'F', title: 'Court F' },
    { id: 'G', title: 'Court G' },

    { id: 'H', title: 'Court H' },
    { id: 'I', title: 'Court I' },
    { id: 'J', title: 'Court J' },
    { id: 'K', title: 'Court K' },
    { id: 'L', title: 'Court L' },
    { id: 'M', title: 'Court M' },
    { id: 'N', title: 'Court N' },
    { id: 'O', title: 'Court O' },
    { id: 'P', title: 'Court P' },
    { id: 'Q', title: 'Court Q' },
    { id: 'R', title: 'Court R' },
    { id: 'S', title: 'Court S' },


    // Add more resources as needed
  ];

  const handleAddEvent = (resourceId, start, end) => {
    const newEvent = {
      id: (events.length + 1).toString(),
      resourceId,
      start,
      end,
      title: 'Booked',
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <button onClick={() => handleAddEvent('A', '2023-01-03T10:00:00', '2023-01-03T12:00:00')}>Book Court A</button>
      <button onClick={() => handleAddEvent('B', '2023-01-04T14:00:00', '2023-01-04T16:00:00')}>Book Court B</button>
      <FullCalendar
        plugins={[timeGridPlugin, resourceTimelinePlugin, interactionPlugin]}
        initialView="resourceTimelineDay"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',
        }}
        editable={true}
        selectable={true}
        eventResizableFromStart={true}
        events={events}
        resources={resources}
        eventDrop={(info) => console.log(info.event)}
        eventResize={(info) => console.log(info.event)}
      />
    </div>
  );
};

export default BadmintonSchedule;
