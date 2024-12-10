import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <> 
      <div className="parent-container">
        <div className="container">
          <div className="box">
            <span className="title">HOME</span>
            <div>
              <strong>
                <Link to={'/about'}>About</Link>
              </strong>
              <p>
                <Link to={'/contact'}>Wanna contact</Link>
              </p>
              <Link to={'/blog'}>Read Blogs</Link>
              <span> 01/28</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
