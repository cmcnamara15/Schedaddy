import React from 'react'

const FormInput = ({ type, title, name, value, onChange, numInRow }) => {
  return (
    <div className={`col-lg-${12/numInRow} my-1`}>
      <label className='form-label'>{title}</label>
      <input
        className='form-control'
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={title}
      />
    </div>
  )
}

export default FormInput


