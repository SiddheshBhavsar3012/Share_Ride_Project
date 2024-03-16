import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { addBookingDetails, updateDetails } from '../../service/booking.service';
import { getRideById, updateRideCapacity } from '../../service/ride.service';
import { getvehicleById } from '../../service/vehcile.service';
import UserNavbar from "./UserNavbar";
export default function ConfirmRide() {
    const [type, setType] = useState()
    const [seats, setSeats] = useState('')
    const location = useLocation();
    const [ride, setRide] = useState();
    const [user, setUser] = useState();
    //const{id}=useParams()
    useEffect(() => {
        // console.log(location.state.ride.rideId)
        console.log(location.state)
        //console.log(id)
        getRideById(location.state.id).then(res => {
            console.log(res)
            setRide(res)
            getvehicleById(res.vehicleId).then(res => {
                setType(res.type);
            })
        })
        let us = JSON.parse(localStorage.getItem('user'))
        setUser(us);



    }, [])
    const onHandleSubmit = () => {
        if (ride.capacity - seats > 0) {

            let obj = { rideId: ride.rideId, userId: user.userId, ownerId: ride.ownerId, vehicleId: ride.vehicleId, price: ride.price * seats, distance: ride.distance, noOfSeats: seats, status: "In-process", typeRide: ride.type, vehicleType: type, bookingDate: ride.dateTime }
            console.log(obj)
            addBookingDetails(obj).then(res => {
                let data = { id: ride.rideId, cap: (ride.capacity - seats) }
                console.log(data)
                updateRideCapacity(data).then(res => console.log(res))
            })
        }
        else {
            alert("Less no of capacity");
        }

    }

    return (
        <>
            <UserNavbar />
            <div className="confirmride-div">
                <div className="container">
                    <div className="form-group form1-div" >
                        <label>Enter number of seats you want to book</label>
                        <input value={seats} onChange={e => setSeats(e.target.value)}
                            className="form-control"></input>
                    </div>
                    <div style={{marginTop:15}}>
                        <button type="submit" className="btn btn-primary" onClick={onHandleSubmit} >Confirm Ride</button>
                    </div>
                </div>
            </div>
        </>
    )
}
