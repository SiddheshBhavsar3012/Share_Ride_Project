import { useState,useEffect } from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useLocation, useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import UserNavbar from "./UserNavbar";
import { getAllLocations } from "../../service/location.service";
import { getRoutes } from "../../service/routes.service";
import { getvehicleById } from "../../service/vehcile.service";
import { add } from "date-fns";
import { addRide } from "../../service/ride.service";
import { addBookingDetails } from "../../service/booking.service";
export default function BookRide() {
    const [pickuplocation, pickuplocationupdate] = useState('');
    const [droplocation, droplocationupdate] = useState('');
    const [vehicleType, vehicleTypeupdate] = useState('');
    const [datetime,datetimeupdate]=useState('');
    const [type, typeupdate] = useState('share');
    const[location,setLocation]=useState([]);
    const[dtime,setdTime]=useState();
    const[dateTime,setDTime]=useState();
    const navigate = useNavigate();
    const[user,setUser]=useState();
    const locationess=useLocation();
    const[vehicle,setVehicle]=useState();
    useEffect(()=>{
        let us=JSON.parse(localStorage.getItem('user'))
        setUser(us)
        getvehicleById(locationess.state.vehicle).then(res=>{
            setVehicle(res)
        })

        getAllLocations().then(res=>{
            setLocation(res)
        })
    },[])

    const handlesubmit = (e) => {
        e.preventDefault();
        const vehicledata = { pickuplocation,droplocation,dtime };
        getRoutes({pickupLocation:pickuplocation,dropLocation:droplocation}).then(res=>{
            console.log(res.distance)
            if(res.distance !=undefined){
                console.log(res)
                let ridedata = { "ownerId":vehicle.ownerId,"vehicleId":vehicle.vehicleId, "pickupPoint":pickuplocation,"dropPoint": droplocation, distance:res.distance, price:(vehicle.price*res.distance),capacity:vehicle.capacity, type:"rent","dateString":dateTime[0].substring(1,dateTime[0].length-1)};
                console.log(ridedata)
                addRide(ridedata).then(ride=>{
                    if(ride.rideId!=undefined){
                    let obj={ rideId:ride.rideId,userId:user.userId,ownerId:ride.ownerId,vehicleId:ride.vehicleId,price:ride.price,distance:ride.distance,noOfSeats:ride.capacity,status:"In-process",typeRide:ride.type,vehicleType:vehicle.type,bookingDate:ride.dateTime}
                    console.log(obj);
                    addBookingDetails(obj).then(res=>{
                        console.log(res);
                        alert("Booking is in process");
                        navigate('/user/bookings')
                        
                    })
                }
                })
            }
            else{
                alert("Service not available to this locations")
            }
        })
        
        console.log(vehicledata);
        
    }
    return (<>
    <UserNavbar/>
        <div className="chooseride-div">
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form onSubmit={handlesubmit} className="container">
                        <div className="card card-chooseride-div">
                            <div className="card-header">
                                <h2>Choose Your Ride</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Choose Pickup location </label>
                                    <div className="form-div">
                                        <FormControl sx={{ minWidth: 300 }} >
                                            <InputLabel id="demo-simple-select-label">Pickup Location</InputLabel>
                                            <Select
                                                defaultValue="Bangalore"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={pickuplocation}
                                                label="choose Location"
                                                onChange={(event) => {
                                                    pickuplocationupdate(event.target.value);
                                                }}>
                                                {
                                                    location.map(function(el){
                                                        return <MenuItem value={el.locationName}>{el.locationName}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Choose Drop location</label>
                                    <div className="form-div">
                                        <FormControl sx={{ minWidth: 300 }} >
                                            <InputLabel id="demo-simple-select-label">Drop Location</InputLabel>
                                            <Select
                                                defaultValue="Bangalore"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={droplocation}
                                                label="choose Location"
                                                onChange={(event) => {
                                                    droplocationupdate(event.target.value);
                                                }}>
                                                {
                                                    location.map(function(el){
                                                        return <MenuItem value={el.locationName}>{el.locationName}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Choose date and time</label>
                                    <div className="form-div">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                label="DateTimePicker"
                                                value={datetime}
                                                onChange={(newValue) => {
                                                    datetimeupdate(newValue);
                                                    console.log(newValue)
                                                    console.log(JSON.stringify(newValue).split(1,12))
                                                    setdTime(newValue)
                                                    setDTime(JSON.stringify(newValue).split(1,12))
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>  
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Book Vehicle</button> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ marginLeft:450,alignItems:'center',marginTop:10 }}>
            <Link to='/user' className="btn btn-primary">Back to user home</Link>
            </div>
        </div>
    </>)
}