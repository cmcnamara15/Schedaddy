import React, { useState } from 'react';
import PositionForm from './PositionForm';
import Position from './partials/Position';
import { useQuery } from '@apollo/client';
import { FIND_ALL_POSITIONS } from '../utils/queries';

const PositionList = () => {
  const { loading, data } = useQuery(FIND_ALL_POSITIONS);
  console.log(data);

  const positions = data?.positions || [];

  return (
    <>
      <div className='container'>
        <div className="card">
          <div className='card-header mb-0'>
            <div className="row">
              <div className="col-6">
                <h1>Positions</h1>
              </div>
              <div className="col-6 text-end">
                <PositionForm />
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {positions.map((pos) => <Position p={pos}/>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PositionList
