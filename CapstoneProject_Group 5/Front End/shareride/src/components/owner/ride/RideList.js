import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteRide, getRideByOwnerId } from "../../../service/ride.service";
import OwnerNavbar from "../OwnerNavbar";
const RideList = () => {
    const [ridedata, ridedatachange] = useState(null);
    const[user,setUser]=useState('')
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate("/owner/ride/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/owner/ride/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            deleteRide(id).then(res=>{
                alert('Removed successfully.')
                     window.location.reload();
            })
        }
    }
    useEffect(() => {
    let us=JSON.parse(localStorage.getItem('user'))
    setUser(us);
     getRideByOwnerId(us.ownerId).then(res=>{
        console.log(res)
        ridedatachange(res);
     })
     }, [])
    return (
        <>
        <OwnerNavbar/>
        <div className="user-div">
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2>Ride List</h2>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>Ride Id</td>
                                    <td>vehicle Id</td>
                                    <td>Pickup Location</td>
                                    <td>Drop Location</td>
                                    <td>Distance</td>
                                    <td style={{width:170}}>Date and Time</td>
                                    <td>Price(per KM)</td>
                                    <td>Capacity</td>
                                    <td>Type(Rent /share)</td>
                                    <td style={{width:260}}>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {ridedata &&
                                    ridedata.map(item => (
                                        <tr key={item.rideId}>
                                            <td>{item.rideId}</td>
                                            <td>{item.vehicleId} </td>
                                            <td>{item.pickupPoint} </td>
                                            <td>{item.dropPoint} </td>
                                            <td>{item.distance}</td>
                                            <td>{item.dateTime}</td>
                                            <td>{item.price}</td>
                                            <td>{item.capacity}</td>
                                            <td>{item.type}</td>
                                            <td><a onClick={() => { LoadEdit(item.rideId) }} className="btn btn-success">Edit </a>
                                                <a onClick={() => { Removefunction(item.rideId) }} className="btn btn-danger">Remove</a>
                                                <a onClick={() => { LoadDetail(item.rideId) }} className="btn btn-primary">Details</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Link to="/owner" className="btn btn-success">Back To Home</Link>
                        <Link to="/owner/ride/create" className="btn btn-success">Create Ride</Link>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        );
}
export default RideList;