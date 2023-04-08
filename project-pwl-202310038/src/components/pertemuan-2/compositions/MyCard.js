import React from 'react'

export default function MyCard(props) {

  return (
    <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">My Profile</h3>
        </div>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

