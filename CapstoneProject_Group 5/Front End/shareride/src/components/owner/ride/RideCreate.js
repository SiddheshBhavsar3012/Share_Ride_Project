import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { MenuItem, InputLabel, Select } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { toast } from "react-toastify";
import OwnerNavbar from "../OwnerNavbar";
import { addRide } from "../../../service/ride.service";
import { getAllLocations } from "../../../service/location.service";
export default function RideCreate() {
  const [vehicleid, vehicleidupdate] = useState('');
  const [price, priceupdate] = useState('');
  const [pickuplocation, pickuplocationupdate] = useState('');
  const [droplocation, droplocationupdate] = useState('');
  const [distance, distanceupdate] = useState('');
  const [capacity, capacityupdate] = useState('');
  const [datetime, datetimeupdate] = useState('');
  const [dTime, setdTime] = useState('')
  const [type, typeupdate] = useState('share');
  const [user, setUser] = useState('')
  const [locations, setLocations] = useState([])
  useEffect(() => {
    let us = JSON.parse(localStorage.getItem('user'))
    setUser(us);

    getAllLocations().then(res => {
      setLocations(res);
    })
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    let ridedata = { "ownerId": user.ownerId, "vehicleId": vehicleid, "pickupPoint": pickuplocation, "dropPoint": droplocation, distance, price, capacity, type, "dateString": dTime[0].substring(1, dTime[0].length - 1) };
    console.log(ridedata)
    addRide(ridedata).then(res => {console.log(res)
      alert("Ride added");
    })


  }

  return (<>
    <OwnerNavbar />
    <div className="row ridecreate-div">
      <div className="offset-lg-3 col-lg-5" style={{ margin: 'auto', width: 430, }}>
        <form onSubmit={handleSubmit} className="container">
          <div className="card card-div">
            <div className="card-header">
              <h2>Create Your Ride</h2>
            </div>
            <div className="card-body ridec-div">
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
                        locations.map(function (el) {
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
                        locations.map(function (el) {
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
                <label>Enter Price (per person)</label>
                <input value={price} onChange={e => priceupdate(e.target.value)} className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Enter your ride date and time</label>
                <div className="form-div">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="DateTimePicker"
                      value={datetime}
                      onChange={(newValue) => {
                        datetimeupdate(newValue);
                        setdTime(JSON.stringify(newValue).split(1, 12))
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Create Ride</button>
              <Link to="/owner/ridelist" className="btn btn-primary">Go to see Rides</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>)

}