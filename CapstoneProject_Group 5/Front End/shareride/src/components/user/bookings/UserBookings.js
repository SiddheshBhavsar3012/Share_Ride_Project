import React from 'react'
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { deleteBookingDetails, getBookingDetailsUserId } from '../../../service/booking.service';
import UserNavbar from '../UserNavbar';
export default function UserBookings() {
  const [bookingdata, bookingUpdate] = useState('');
  const navigate = useNavigate();
  // const LoadMessage = (id) => {
  //     navigate("/user/message" + id);
  // }
  const LoadDetail = (id) => {
    navigate("/user/bookings/detail/" + id);
  }
  const Removefunction = (id) => {
    deleteBookingDetails(id).then(res=>{
      let us=JSON.parse(localStorage.getItem('user'))
    
    getBookingDetailsUserId(us.userId).then(res=>{bookingUpdate(res)})
    })
  }
  useEffect(() => {
    let us=JSON.parse(localStorage.getItem('user'))
    
    getBookingDetailsUserId(us.userId).then(res=>{bookingUpdate(res)})
  }, [])
  return (
    <>
      <UserNavbar />
      <div className="userbook-div">
        <div className="card">
          <div className="card-title">
            <h2>Booking Details</h2>
          </div>
          <div className="card-body">
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                  
	
                    <td>Booking Id</td>
                    {/* <td>User Id</td> */}
                    <td>Owner Id</td>
                    {/* <td>Vehicle Id</td> */}
                    <td>Vehicle Type</td>
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
                        {/* <td>{item.userId}</td> */}
                        <td>{item.ownerId}</td>
                        {/* <td>{item.vehicleId} </td> */}
                        <td>{item.vehicleType}</td>
                        <td>{item.typeRide} </td>
                        <td>{item.noOfSeats}</td>
                        <td>{item.status}</td>
                        <td>{item.bookingDate}</td>
                        <td>{item.price}</td>
                        <td style={{width:200}}>
                          <a onClick={() => { Removefunction(item.bookingId) }} className="btn btn-danger">Remove</a>
                          <a onClick={() => { LoadDetail(item.bookingId) }} className="btn btn-primary">Details</a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:10}}>
      <Link className="btn btn-primary" to="/user">Back to User Home</Link>
      </div>
    </>
  )
}
