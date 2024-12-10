import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
      <div className="parent-container">
        <div className="container">
          <div className="box">
            <span className="title">BLOGS</span>
            <div>
              <strong>
                <Link to={'/'}>Home</Link>
              </strong>
              <p>
                <Link to={'/contact'}>Wanna contact</Link>
              </p>
              <Link to={'/reading'} target='_blank'>How to catch rat.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
