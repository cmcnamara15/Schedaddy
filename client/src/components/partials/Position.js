import React from 'react';
import DummyPosition from './DummyPosition';
import { FaRegAddressCard, FaX } from "react-icons/fa6";

const Position = ({ p }) => {
  return (
    <li className="list-group-item row d-flex">
      <div className="col-8">
        {p.jobTitle}
      </div>
      <div className="col-4 text-end">
        <button className='btn btn-secondary mx-1' data-bs-toggle='tooltip' data-bs-placement='left' title='View Details' data-bs-><FaRegAddressCard/></button>
        <button className="btn btn-danger mx-1" data-bs-toggle='tooltip' data-bs-placement='left' title='Delete'><FaX/></button>
      </div>
    </li>
  )
}

export default Position

Position.defaultProps = {
  p: DummyPosition
}

