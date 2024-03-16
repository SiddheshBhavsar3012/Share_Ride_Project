import { useState, useEffect } from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import { getAllLocations } from "../../service/location.service";
export default function ChooseRide() {
    const [pickuplocation, pickuplocationupdate] = useState('');
    const [droplocation, droplocationupdate] = useState('');
    const [vehicleType, vehicleTypeupdate] = useState('');
    const [datetime, datetimeupdate] = useState('');
    const [type, typeupdate] = useState('share');
    const [location, setLocation] = useState([]);
    const [dtime, setdTime] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        getAllLocations().then(res => {
            setLocation(res)
        })
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault();
        const vehicledata = { pickuplocation, droplocation, vehicleType, dtime, type };
        console.log(vehicledata);
        navigate('/user/availablevehicle', { state: { "ride": vehicledata } });
    }
    return (<>
        <UserNavbar />
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
                                                    location.map(function (el) {
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
                                                    location.map(function (el) {
                                                        return <MenuItem value={el.locationName}>{el.locationName}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Show Available Vehicles</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{ marginLeft:450,alignItems:'center',marginTop:10 }}>
                    <Link to='/user' className="btn btn-primary" >Back to user home</Link>
                </div>
            </div>

        </div>
    </>)
}