import { Button } from '@mui/material';
import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getBookingDetailsByOwnerId, updateDetails } from '../../../service/booking.service';
import OwnerNavbar from '../OwnerNavbar';
export default function OwnerBookings() {
  const [bookingdata, bookingUpdate] = useState('');
  const [status, setStatus] = useState('')
  const [user, setUser] = useState()
  const navigate = useNavigate();
  // const LoadMessage = (id) => {
  //   navigate("/owner/message" + id);
  // }
  const LoadDetail = (id) => {
    navigate("/owner/bookings/detail/" + id);
  }
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("" + id, { method: "DELETE" })
        .then((res) => {
          alert('Removed successfully.')
          window.location.reload();
        })
        .catch((err) => { console.log(err.message) })
    }
  }
  const updateStatus = (event) => {
    let data = { id: event.target.id, status: status }
    console.log(status)
    console.log(data)
    updateDetails(data)
    getBookingDetailsByOwnerId(user.ownerId).then(res => {
      bookingUpdate(res)
      alert('status updated successfully');
    })


  }
  useEffect(() => {
    let us = JSON.parse(localStorage.getItem('user'))
    setUser(us)
    getBookingDetailsByOwnerId(us.ownerId).then(res => {
      bookingUpdate(res)
    })
  }, [])
  return (
    <>
      <OwnerNavbar />
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Owner Rides</h2>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>Booking Id</td>
                  <td>User Id</td>
                  {/* <td>Owner Id</td> */}
                  {/* <td>Vehicle Id</td> */}
                  {/* <td>Vehicle Type</td> */}
                  <td>Type of Ride</td>
                  <td>No of seats</td>
                  <td>Status</td>
                  <td>Date Time</td>
                  <td>Price</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {bookingdata &&
                  bookingdata.map(item => (
                    <tr key={item.bookingId}>
                      <td>{item.bookingId}</td>
                      <td>{item.userId}</td>
                      {/* <td>{item.ownerId}</td> */}
                      {/* <td>{item.vehicleId} </td> */}
                      {/* <td>{item.vehicleType}</td> */}
                      <td>{item.typeRide} </td>
                      <td>{item.noOfSeats}</td>
                      <td>{item.status}</td>
                      <td>{item.bookingDate}</td>
                      <td>{item.price}</td>
                      <td><select onChange={(event) => { setStatus(event.target.value) }}>
                        <option value="Confirm">Confirm </option>
                        <option value="In-process">Under Process</option>
                        <option value="Not Confirm">Not Confirm</option>
                      </select></td>
                      <td>

                        <button className="btn btn-primary" type="submit" id={item.bookingId} onClick={updateStatus}>Update Status</button>

                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <Link to='/owner' className='btn btn-primary'>Back To Owner Home</Link>
      </div>
    </>
  )
}
