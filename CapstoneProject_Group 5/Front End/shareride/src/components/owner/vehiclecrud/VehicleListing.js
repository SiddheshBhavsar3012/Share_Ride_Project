import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import car from '../../../assets/bgcar.png'
import OwnerNavbar from "../OwnerNavbar";
import { deleteVehicle, getAllVehcile } from "../../../service/vehcile.service";
const VehicleListing = (props) => {
    // const { vehicleId, vehicleName, vehicleNo, type, rating, price, capacity, ownerid } = props.item;
    // const [vehicledata, vehicledatachange] = useState(null);
    const [vehicles, setVehicles] = useState([])
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate("/owner/vehicle/detail/"+ id);
    }
    const LoadEdit = (id) => {
        navigate("/owner/vehicle/edit/"+id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            deleteVehicle(id)
                .then((res) => {
                    alert('Removed successfully.')
                    window.location.reload();
                })
                .catch((err) => { console.log(err.message) })
        }
    }
    useEffect(() => {
        getAllVehcile().then(res => {
            setVehicles(res);
        })
    }, [])
    return (
        <>
            <OwnerNavbar />
            <div className="user-div">
                <div className="container">
                    <div className="card">
                        <div className="card-title">
                            <h2>Vehicles List</h2>
                        </div>
                        <div className="card-body">
                            <div className="divbtn">
                                <Link to="/owner/vehicle/create" className="btn btn-success" style={{ marginBottom: "10px" }}>Add New (+)</Link>
                            </div>
                            <div className='card-container'>
                                {
                                    vehicles &&
                                    vehicles.map(item => (
                                        <Card sx={{ maxWidth: 300,margin:5 }} key={item.vehicleId}>
                                            <CardMedia
                                                component="img"
                                                alt={item.name}
                                                image={item.image}
                                                height="150"
                                                sx={{ height: 150, objectFit: "contain" }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.vehicleName}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    {item.type} wheeler <br />
                                                    {item.capacity} seating capacity<br />
                                                    Rating: {item.rating}<br />
                                                    Price per KM: {item.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <a onClick={() => { LoadEdit(item.vehicleId) }} className="btn btn-success">Edit </a>
                                                <a onClick={() => { Removefunction(item.vehicleId) }} className="btn btn-danger">Remove</a>
                                                <a onClick={() => { LoadDetail(item.vehicleId) }} className="btn btn-primary">Details</a>
                                            </CardActions>
                                        </Card>
                                    ))}
                            </div>
                            <Link to="/owner" className="btn btn-success">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VehicleListing;