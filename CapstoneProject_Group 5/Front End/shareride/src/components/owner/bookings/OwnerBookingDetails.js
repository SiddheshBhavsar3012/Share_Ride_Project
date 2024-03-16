import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OwnerNavbar from "../OwnerNavbar";
const BookingDetail = () => {
    const { bookingid } = useParams();
    const [bookingdata, bookingdatachange] = useState({});
    useEffect(() => {
        fetch("" + bookingid)
            .then((res) => { return res.json(); })
            .then((resp) => { bookingdatachange(resp); })
            .catch((err) => { console.log(err.message); })
    }, []);
    return (
        <>
        <OwnerNavbar/>
        <div>
            <div className="container" style={{backgroundColor:'pink'}}>
                <div className="card row" style={{ "textAlign": "center",marginTop:'50px',backgroundColor:'brown',paddingTop:'15px',color:'white'}}>
                    <div className="card-title">
                        <h2>Ride Booking Details</h2>
                    </div>
                    <div className="card-body"></div>
                </div>
                {
                    bookingdata &&
                    <div>
                        <h2>Booking Id :{bookingdata.bookId}</h2>
                        <h2>Ride Id : {bookingdata.rideId}</h2>
                        <h2>User Id : {bookingdata.userId}</h2>
                        <h2>Vehicle Id : {bookingdata.vehicleId}</h2>
                        <h2>Pickup point : {bookingdata.pickupPoint}</h2>
                        <h2>Drop point : {bookingdata.dropPoint}</h2>
                        <h2>Vehicle capacity: {bookingdata.capacity}</h2>
                        <h2>Vehicle Type : {bookingdata.type}</h2>
                        <h2>Booking status : {bookingdata.status}</h2>
                        <h2>Price per KM : {bookingdata.price}</h2>
                        <h2>Date and Time : {bookingdata.dateTime}</h2>
                        <h2>Distance : {bookingdata.distance}</h2>
                        <h2>No. of seats: {bookingdata.noOfSeats}</h2>
                       
                    </div>
                }
            </div>
            <Link className="btn btn-danger" to="/owner/bookings">Back to Booking List</Link>
        </div>
        
        </>
    );
}
export default BookingDetail;