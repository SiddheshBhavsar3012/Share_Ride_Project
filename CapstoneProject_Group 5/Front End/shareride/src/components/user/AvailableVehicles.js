import { Link, useLocation,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UserNavbar from "./UserNavbar";
import { getDataByAvailableRides } from "../../service/ride.service";
import { Button } from "react-bootstrap";
export default function AvailableVehicle() {
    const location = useLocation();
    const [availableVehicle, availableVehicleUpdate] = useState(null);
    const [pricefilter, pricefilterupdate] = useState('');
    const [vehicledata,vehicledatachange]=useState('');
    // const {data}=location.state || {}
    // const {droplocation=""}=data||{}
    // useEffect(() => {
    //     fetch("")
    //         .then((res) => { return res.json(); })
    //         .then((resp) => { availableVehicleUpdate(resp); })
    //         .catch((err) => { console.log(err.message); })
    // }, [])
    // console.log("data:"+location.state.data,location.state);
    // console.log("droplocation:"+location.state.data.droplocation)
    // console.log("data"+location.state.data,location.state);

    const navigate = useNavigate();
    const bookRide=(event)=>{
        navigate('/user/availablevehicle/confirmride',{state:{id:event.target.id}});
    }
    useEffect(() => {
        // console.log(location)
        // console.log(location.state);
        let data={
            "dropLocation":location.state.ride.droplocation,
            "pickupLocation":location.state.ride.pickuplocation,

        }
        console.log(data)
        getDataByAvailableRides(data).then(res=>{
            console.log(res)
            //availableVehicleUpdate(res);
            vehicledatachange(res)
        })
        
    }, [])
    return (
        <>
            <UserNavbar />
            <div className="cart-div availablevehicle-div">
                <div className="container" >
                    <div className="card" >
                        <div className="card-title" >
                            <h2>Available Rides</h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                    <td>Ride Id</td>
                                    <td>vehicle Id</td>
                                    <td>Pickup Location</td>
                                    <td>Drop Location</td>
                                    <td>Distance(KM)</td>
                                    <td>Date and Time</td>
                                    <td>Price(per person)</td>
                                    <td>Capacity</td>
                                    <td>Owner ID</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicledata &&
                                        vehicledata.map(item => (
                                            <tr key={item.rideId}>
                                            <td>{item.rideId}</td>
                                            <td>{item.vehicleId} </td>
                                            <td>{item.pickupPoint} </td>
                                            <td>{item.dropPoint} </td>
                                            <td>{item.distance}</td>
                                            <td>{item.dateTime}</td>
                                            <td>{item.price}</td>
                                            <td>{item.capacity}</td>
                                            <td>{item.ownerId}</td>
                                            <td><Button to='/user/availablevehicle/confirmride' onClick={bookRide} id={item.rideId} className="btn btn-primary">Book Ride</Button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:10}}>
                <Link to={'/user'} className="btn btn-primary">Go back to user home</Link> |
            <Link to={'/user/bookings'} className="btn btn-primary">Bookings</Link></div>
            </div>
            
        </>
    )
}