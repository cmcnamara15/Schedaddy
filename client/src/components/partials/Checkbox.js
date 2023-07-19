import React, { useState } from 'react'

const Checkbox = ({ name, label, value, onChange}) => {
  return (
    <div className='form-check form-check-inline'>
      <input 
        className='form-check-input'
        name={name}
        type="checkbox" 
        value={value}
        checked={value}
        onChange={onChange} 
      />
      <label className='form-check-label'>{label}</label>
    </ div>
  )
}

export default Checkbox
