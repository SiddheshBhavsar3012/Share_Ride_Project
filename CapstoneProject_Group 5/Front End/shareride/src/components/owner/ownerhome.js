import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import bike from '../../assets/bike.png';
import car from '../../assets/car.jpg';
import carandbike from '../../assets/carandbike.jpg';
import map from '../../assets/map.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import map2 from '../../assets/bgcar2.png';
import OwnerNavbar from './OwnerNavbar';
export default function ownerhome() {
  return (
    <>
      <OwnerNavbar/>
      <div className="ownerhome-div">
        <div className="search-div">
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </div>
        <div className="head-home-div">
          <h1>Welcome Owner</h1>
        </div>
        <div className="owner-card-div">
          <div>
            <Card sx={{ maxWidth: 300, marginLeft: 4, marginTop: 5, height: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={bike}
                height="150"
                sx={{ height: 100, borderRadius: 5, objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Add Vehicle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner can add their vehicle here.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/owner/vehicle/create" className='btn btn-primary btn-div' style={{ alignItems: 'center'}}>Add Vehicle</Link>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, marginLeft: 4, marginTop: 5, height: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={car}
                height="150"
                sx={{ height: 100, borderRadius: 5, objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Add Ride
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner can book their ride here
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/owner/ride/create" className='btn btn-primary btn-div' style={{ alignItems: 'center' }}>Add Ride</Link>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, marginLeft: 4, marginTop: 5, height: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={carandbike}
                height="150"
                sx={{ height: 100, borderRadius: 5, marginTop: 1, objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Booking Details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner can see user bookings here.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/owner/bookings" className='btn btn-primary btn-div' style={{ alignItems: 'center' }}>See Bookings</Link>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 300, marginLeft: 4, marginTop: 5, height: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={map}
                height="150"
                sx={{ height: 100, borderRadius: 5, marginTop: 1, objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Add Location
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner can add new locations here
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/owner/addlocation" className='btn btn-primary btn-div' style={{ alignItems: 'center' }}>Add Location</Link>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 280, marginLeft: 4, marginTop: 5, height: 300 ,marginRight:2 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={map2}
                height="150"
                sx={{ height: 100, borderRadius: 5, marginTop: 1, objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Add Route
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner can add new routes here.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/owner/addroute" className='btn btn-primary btn-div' style={{ alignItems: 'center' }}>Add Route</Link>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>

  )
}
