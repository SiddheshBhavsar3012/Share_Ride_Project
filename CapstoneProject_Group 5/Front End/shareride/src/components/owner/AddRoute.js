import React, { useEffect } from 'react'
import { MenuItem, InputLabel, Select } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import OwnerNavbar from './OwnerNavbar';
import { Link } from 'react-router-dom';
import { getAllLocations } from '../../service/location.service';
import { addRoutes } from '../../service/routes.service';
export default function AddRoute() {
  const [pickuplocation, pickuplocationupdate] = useState('');
  const [droplocation, droplocationupdate] = useState('');
  const [distance, distanceupdate] = useState('');
  const[locations,setLocations]=useState([]);
  useEffect(()=>{
    getAllLocations().then(res=>{
      setLocations(res)
    })  
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    let ridedata = { pickupLocation:pickuplocation, dropLocation:droplocation, distance };
    
    console.log(ridedata)
    addRoutes(ridedata)
      .then((res) => {
         alert('Ride created successfully')
        // navigate('');
      }).catch((err) => { console.log('Failed :' + err.message); });

  }
  return (
    <>
    <OwnerNavbar/>
      <div className="offset-lg-3 col-lg-6">
      <form onSubmit={handleSubmit} className="container">
        <div className="card card-div">
          <div className="card-header">
            <h2>Add Route</h2>
          </div>
          <div className="card-body">
            <div className="form-group ">
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
                    {/* <MenuItem value="bangalore">Bangalore</MenuItem>
                    <MenuItem value="chennai">Chennai</MenuItem>
                    <MenuItem value="delhi">Delhi</MenuItem>
                    <MenuItem value="mumbai">Mumbai</MenuItem>
                    <MenuItem value="hyderabad">Hyderabad</MenuItem> */}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="form-group ">
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
                    {/* <MenuItem value="bangalore">Bangalore</MenuItem>
                    <MenuItem value="chennai">Chennai</MenuItem>
                    <MenuItem value="delhi">Delhi</MenuItem>
                    <MenuItem value="mumbai">Mumbai</MenuItem>
                    <MenuItem value="hyderabad">Hyderabad</MenuItem> */}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="form-group offset-lg-3 col-lg-6">
              <label>Enter distance</label>
              <input value={distance} onChange={e => distanceupdate(e.target.value)} className="form-control"></input>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Add Route</button>
          </div>
        </div>
      </form>
      </div>
      <div style={{marginTop:10}}>
      <Link to='/owner' className='btn btn-primary'>Back To Owner Home</Link>
      </div>
    </>

  )
}
