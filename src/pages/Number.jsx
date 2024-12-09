import React from 'react'
import { useParams } from 'react-router-dom'

export default function Number() {
  const {num} = useParams();
  return (
    <>
        <div className="container">
          <div className="box">
            <span className="title">Number: {num}</span>
            <div>
              <strong>React-router-dom</strong>
              <p>0000 000 000 0000</p>
              <span>VALID</span> <span>01/28</span>
            </div>
          </div>
        </div>
    </>
  )
}
