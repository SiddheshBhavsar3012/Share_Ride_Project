import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OwnerNavbar from "../OwnerNavbar";
import { getvehicleById, updateVehicle } from "../../../service/vehcile.service";
const VehicleEdit = () => {
    const [vehicleName, vehicleNameupdate] = useState('');
    const [type, typeupdate] = useState('');
    const [vehicleNo, vehicleNoUpdate] = useState('');
    const [rating, ratingupdate] = useState('');
    const [price, priceupdate] = useState('');
    const [capacity, capacityupdate] = useState('');
    const [vehicleImg,setvehicleImg]=useState('');
    const [ownerId,setOwnerId]=useState('');
    const navigate = useNavigate();
    const { vehicleid } = useParams();
    useEffect(() => {
        console.log(vehicleid);
        getvehicleById(vehicleid)
            .then((resp) => {
                vehicleNameupdate(resp.vehicleName);
                vehicleNoUpdate(resp.vehicleNo);
                ratingupdate(resp.rating);
                priceupdate(resp.price);
                capacityupdate(resp.capacity);
                typeupdate(resp.type);
                setvehicleImg(resp.image);
                setOwnerId(resp.ownerId);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);
    
    const handlesubmit = (e) => {
        e.preventDefault();
        // var vehicleImg1 ="../Assets/"+ vehicleImg.substring(12 , vehicleImg.length);
        const vehicledata = { vehicleId:vehicleid,vehicleName, vehicleNo, type, rating, price, capacity,image:vehicleImg,ownerId };
        updateVehicle(vehicledata)
        .then((res) => {
                alert('updated successfully.')
                navigate('/owner/vehiclelist');
            })
            .catch((err) => {
                console.log(err.message)
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
                            <div className="card-title" style={{textAlign:'center'}}>
                                <h2>Vehicle Edit</h2>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <label>Enter Vehicle Name</label>
                                <input value={vehicleName} onChange={e => vehicleNameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Enter Vehicle Number </label>
                                <input value={vehicleNo} onChange={e => vehicleNoUpdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Enter rating </label>
                                <input value={rating} onChange={e => ratingupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Enter price per KM</label>
                                <input value={price} onChange={e => priceupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Enter Number of seats available </label>
                                <input value={capacity} onChange={e => capacityupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Choose Vehicle Type &nbsp;&nbsp;</label>
                                <FormControl sx={{ minWidth: 150 }} >
                                    <InputLabel id="demo-simple-select-label"> Select Vehicle</InputLabel>
                                    <Select
                                        defaultValue="Two Wheeler"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Choose wheeler"
                                        onChange={e => typeupdate(e.target.value)}
                                    >
                                        <MenuItem value={2}>Two Wheeler</MenuItem>
                                        <MenuItem value={4}>Four Wheeler</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                            {/* <div className="form-group mt-3">
                                <label>Product Img</label><input type="file" className="form-control mt-1" placeholder="Enter Img URL" required  value={vehicleImg} onChange = {e => setvehicleImg(e.target.value)}/>
                            </div> */}
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Update Vehicle</button>
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
export default VehicleEdit;
