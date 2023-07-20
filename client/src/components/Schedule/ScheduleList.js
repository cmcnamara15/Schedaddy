// Year, Month (0-11), Day, Hour (24-hour format), Minute

const shifts = [
  {
    title: 'Hamburger Guy',
    start: new Date(2023, 6, 19, 10, 0), 
    end: new Date(2023, 6, 19, 12, 0),
    employee: 'Eric',
    note: 'flip flip',
  },
  {
    title: 'French Fry Guy',
    start: new Date(2023, 6, 19, 14, 0),
    end: new Date(2023, 6, 19, 16, 0),
    employee: 'Brian',
    note: 'extra salty plz',
  },
  {
    title: 'Ice Cream Guy',
    start: new Date(2023, 6, 19, 14, 0),
    end: new Date(2023, 6, 19, 16, 0),
    employee: 'Hunter',
    note: 'fix the ice cream machine',
  },
];

export default shifts;
