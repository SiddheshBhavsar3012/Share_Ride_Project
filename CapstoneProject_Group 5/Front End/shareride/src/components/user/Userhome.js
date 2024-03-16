
import { useState,useEffect } from "react";
import * as React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import AllVehicles from "./AllVehicles";
import { Link, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import UserNavbar from "./UserNavbar";
import { MenuItem, InputLabel, Select } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { getAllVehcile, getVehicleByType, getVehiclesByPriceAndType, getVehileByPrice } from "../../service/vehcile.service";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import car from '../../assets/car.jpg';
export default function Userhome() {
    const[price,priceupdate]=useState('');
    const[vehicletype,setvehicletype]=useState('');
    const[vehicles,setVehicles]=useState([])
    const[search,setSearch]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
      getAllVehcile().then(res=>{
        setVehicles(res);
      })
    },[])
    const onBook=(event)=>{
      navigate('/user/bookride',{state:{vehicle:event.target.id}});

    }
    const searchClick=(event)=>{
      console.log(search)
      getAllVehcile().then(res=>{
      let arr= res.filter(function(ele){
        //search.toLowerCase().includes(search)
        //search.toLowerCase().includes(search)
        if(ele.vehileId==search || ele.vehicleName.toLowerCase().includes(search.toLowerCase())  || ele.price == search ||ele.vehicleNo==search ){
          return true;
        }
        return false
      })
      setVehicles(arr);
    })
    }

    return (<>
        <UserNavbar />
        <div className="userhome-div">
            <div className="search-div">
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }} value={search} onChange={(e)=>{
                          setSearch(e.target.value)
                        }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchClick}>
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
            </div>
            <div className="head-home-div">
                {/* <h1>Welcome User</h1> */}
                <div className="userhome-filter-div">
                <FormControl sx={{ minWidth: 200,backgroundColor:"white",marginRight:2 }} >
                    <InputLabel id="demo-simple-select-label">Price Filter</InputLabel>
                    <Select
                      // defaultValue="Price(Low to High)"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={price}
                      label="choose Location"
                      onChange={(event) => {
                        priceupdate(event.target.value);
                        if(event.target.value==='LH'){
                          getVehiclesByPriceAndType(vehicletype).then(res=>{
                            setVehicles(res);
                          })
                        }
                        else{
                          getVehiclesByPriceAndType(vehicletype).then(res=>{
                            setVehicles(res.reverse());
                          })
                        }
                        console.log(event.target.value);
                      }}>
                      <MenuItem value="LH">Price(Low to High)</MenuItem>
                      <MenuItem value="HL">Price(High to Low)</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 200,backgroundColor:"white" }} >
                    <InputLabel id="demo-simple-select-label">Choose Type of vehicle</InputLabel>
                    <Select
                      // defaultValue="Two wheeler"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={vehicletype}
                      label="choose Location"
                      onChange={(event) => {
                        
                        if(event.target.value==='2'){
                          getVehicleByType("2").then(res=>{
                            setVehicles(res)
                          })
                        }
                        else if(event.target.value==='4'){
                          
                          getVehicleByType("4").then(res=>{
                            setVehicles(res)
                          })
                        }
                        else{
                          getAllVehcile().then(res=>{
                            setVehicles(res);
                          })
                        }
                      
                        setvehicletype(event.target.value);
                        console.log(event.target.value);
                      }}>
                      <MenuItem value="2">Two Wheeler</MenuItem>
                      <MenuItem value="4">Four Wheeler</MenuItem>
                    </Select>
                  </FormControl>
                {/* <Link to='/user/chooseride' className="btn btn-primary">ChooseRide</Link> */}
            </div>
            </div>
          
                <div className='card-container'>
                      {
                        vehicles &&
                        vehicles.map(item => (
                          <Card  className="card-div" sx={{ maxWidth: 300,margin:5 }} key={item.vehicleId}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={item.image}
                                    height="150"
                                    sx={{height:150,objectFit:"contain"}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                                        {item.vehicleName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" style={{textAlign:'center'}}>
                                        {item.type} wheeler <br />
                                        {item.capacity} seating capacity<br />
                                        Rating: {item.rating}<br />
                                        Price per KM: {item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button id={item.vehicleId}  onClick={onBook} className="btn btn-primary" style={{textAlign:'center',margin:'auto'}}>Book Ride</button>
                                </CardActions>
                            </Card>
                        ))
                        
                      }
                      
                     
            </div>
        </div>
    </>)
}