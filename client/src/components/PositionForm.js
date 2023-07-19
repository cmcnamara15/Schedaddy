import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

const PositionForm = () => {
  const [position, setPosition] = useState('');
  const [hourlyWage, setHourlyWage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'position': 
        setPosition(value);
        break
    };
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    alert('New Position created');
    setPosition('');
    setHourlyWage('');
  };



  return (
    <Container>
      <form>
        <label htmlFor='position'>
          Position Title
          <input 
          name='position'
          type='text' 
          value={position} 
          onChange={handleChange} 
          />
        </label>
      </form>
    </Container>
  )
}

export default PositionForm
