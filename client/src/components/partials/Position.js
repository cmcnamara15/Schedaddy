import React from 'react';
import DummyPosition from './DummyPosition';
import { FaPencil, FaX } from "react-icons/fa6";
import PositionForm from '../forms/PositionForm';
import { useMutation } from '@apollo/client';
import { DELETE_POSITION } from '../../utils/mutations';

const Position = ({ p }) => {
  const [deletePosition, { deleteError }] = useMutation(DELETE_POSITION);

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute('data-id'));

    const { data, error } = await deletePosition({
      variables: {
        id: e.currentTarget.getAttribute('data-id')
      }
    })
    if (data) {
      window.location.reload();
    }
  }

  return (
    <li className="list-group-item row d-flex">
      <div className="col-8">
        {p.jobTitle}
      </div>
      <div className="col-4 text-end">
        <PositionForm
          p={p}
          id={p._id}
          button={
            <button type='button' className='btn btn-secondary mx-1' data-bs-toggle='tooltip' data-bs-placement='left' title='View Details'>
              <span data-bs-toggle='modal' data-bs-target={`#positionForm-${p._id}`}>
                <FaPencil/>
              </span>
            </button>
          }
        />
        <button className="btn btn-danger mx-1" data-bs-toggle='tooltip' data-bs-placement='left' title='Delete' data-id={p._id} onClick={handleDelete}><FaX/></button>
      </div>
    </li>
  )
}

export default Position

Position.defaultProps = {
  p: DummyPosition
}

