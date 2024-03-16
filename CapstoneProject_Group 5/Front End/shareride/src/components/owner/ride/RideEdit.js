import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import OwnerNavbar from "../OwnerNavbar";
import { getRideById, updateRide } from "../../../service/ride.service";
import { getAllLocations } from "../../../service/location.service";

const RideEdit = () => {
    const[locations,setLocations]=useState([])
    const {rideid } = useParams();
    const [vehicleid, vehicleidupdate] = useState('');
    const [price, priceupdate] = useState('');
    const [pickuplocation, pickuplocationupdate] = useState('');
    const [droplocation, droplocationupdate] = useState('');
    const [distance, distanceupdate] = useState('');
    const [capacity, capacityupdate] = useState('');
    const [datetime, datetimeupdate] = useState('');
    const [type, typeupdate] = useState('share');
    const[ownerId,setOwnerId]=useState()
    const[rideId,setRideId]=useState('')
    const[date,setDataDate]=useState('')
    const[rideData,setRideData]=useState(null);
    useEffect(() => {
        getAllLocations().then(res=>{
            setLocations(res)
        })

        getRideById(rideid)
            .then((resp) => {
                vehicleidupdate(resp.vehicleId);
                pickuplocationupdate(resp.pickupPoint);
                droplocationupdate(resp.dropPoint);
                distanceupdate(resp.distance);
                priceupdate(resp.price);
                capacityupdate(resp.capacity);
                datetimeupdate(resp.dateString);
                typeupdate(resp.type)
                setRideId(resp.rideId)
                setOwnerId(resp.ownerId)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);
  
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        //let ridedata = { rideId,vehicleId:vehicleid,pickupPoint: pickuplocation,dropPonit: droplocation, distance, price, capacity, type ,ownerId};
        //console.log(ridedata)
        //setRideData(ridedata)
        let update={ rideId,vehicleId:vehicleid,pickupPoint: pickuplocation,dropPoint: droplocation, distance, price, capacity, type ,ownerId,"dateString":datetime}
        console.log(update)
        updateRide(update).then(res=>{
            console.log(res);
            // alert('Updated successfully.')
             navigate('/owner/ridelist');
        })
    }
    return (
        <>
        <OwnerNavbar/>
        <div className="user-div">
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title" style={{ textAlign: 'center' }}>
                                <h2>Ride Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Enter Vehicle Id </label>
                                    <input value={vehicleid} onChange={e => vehicleidupdate(e.target.value)} className="form-control"></input>
                                </div>
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
                                                      locations.map(function(el){
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
                                                         locations.map(function(el){
                                                        return <MenuItem value={el.locationName}>{el.locationName}</MenuItem>
                                                        })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Enter distance</label>
                                    <input value={distance} onChange={e => distanceupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Enter number of seats available</label>
                                    <input value={capacity} onChange={e => capacityupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Enter Price per KM </label>
                                    <input value={price} onChange={e => priceupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Choose type<span className="errmsg">*</span></label>
                                    <br></br>
                                    <input type="radio" checked={type === 'rent'} onChange={e => typeupdate(e.target.value)} name="type" value="rent" className="app-check"></input>
                                    <label>rent&nbsp;</label>
                                    <input type="radio" checked={type === 'share'} onChange={e => typeupdate(e.target.value)} name="type" value="share" className="app-check"></input>
                                    <label>share</label>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-success" type="submit">Edit Ride</button>
                                    <Link to="/owner/vehiclelist" className="btn btn-danger">Back</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default RideEdit;
