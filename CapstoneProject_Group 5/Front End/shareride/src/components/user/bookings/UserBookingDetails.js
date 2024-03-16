import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookingDetailsById } from "../../../service/booking.service";
import UserNavbar from "../../user/UserNavbar";

const UserBookingDetail = () => {
    const { bookingid } = useParams();
   
    const [bookingdata, bookingdatachange] = useState({});
    useEffect(() => {
        console.log(bookingid);
        getBookingDetailsById(bookingid)
        .then((resp) => { bookingdatachange(resp); })
        .catch((err) => { console.log(err.message); })
}, []);
    return (
        <>
        <UserNavbar/>
        <div className="userbookd-div">
            <div className="container" >
                <div className="card row" style={{width:400,alignItems:'center',margin:'auto',marginTop:30}}>
                    <div className="card-title userbookhead-div">
                        <h2>Ride Booking Details</h2>
                    </div>
                </div>
                {
                    bookingdata &&
                    <div>
                        <h2>Booking Id :{bookingdata.bookingId}</h2>
                        <h2>Ride Id : {bookingdata.rideId}</h2>
                        <h2>User Id : {bookingdata.userId}</h2>
                        <h2>Vehicle Id : {bookingdata.vehicleId}</h2>
                        {/* <h2>Pickup point : {bookingdata.pickupPoint}</h2> */}
                        {/* <h2>Drop point : {bookingdata.dropPoint}</h2> */}
                        {/* <h2>Vehicle capacity: {bookingdata.capacity}</h2> */}
                        <h2>Vehicle Type : {bookingdata.vehicleType}</h2>
                        <h2>Booking status : {bookingdata.status}</h2>
                        <h2>Price per KM : {bookingdata.price}</h2>
                        {/* <h2>Date and Time : {bookingdata.dateTime}</h2> */}
                        <h2>Distance : {bookingdata.distance}</h2>
                        <h2>No. of seats: {bookingdata.noOfSeats}</h2>
                       
                    </div>
                }
            </div>
            <Link className="btn btn-primary" to="/user/bookings">Back to Booking List</Link> |
        <Link className="btn btn-primary" to="/user">Back to User Home</Link>
        </div>
        
        </>
    );
}
export default UserBookingDetail;