// DATE FORMAT: Year, Month (0-11), Day, Hour (24-hour format), Minute

const shifts = [
  {
    title: 'Eric',
    start: new Date(2023, 6, 19, 10, 0), 
    end: new Date(2023, 6, 19, 12, 0),
    position: 'Hamburger Guy',
    note: 'flip flip',
  },
  {
    title: 'Brian',
    start: new Date(2023, 6, 19, 14, 0),
    end: new Date(2023, 6, 19, 16, 0),
    position: 'French Fry Guy',
    note: 'extra salty plz',
  },
  {
    title: 'Hunter',
    start: new Date(2023, 6, 19, 14, 0),
    end: new Date(2023, 6, 19, 16, 0),
    position: 'Ice Cream Guy',
    note: 'fix the ice cream machine',
  },
];

export default shifts;
