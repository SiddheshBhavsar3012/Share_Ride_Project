import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRideById } from "../../../service/ride.service";
import OwnerNavbar from "../OwnerNavbar";
const RideDetail = () => {
    const { rideid } = useParams();
    const [ridedata, ridedatachange] = useState({});
    useEffect(() => {
        getRideById(rideid).then(res => {
            ridedatachange(res)
        })
    }, []);
    return (
        <div>
            <OwnerNavbar />
            <div className="ridedetails-div">
                <div className="container" style={{ margin: 10 }}>
                    <div className="card row" style={{ width: 300, margin: 'auto' }} >
                        <div className="card-title">
                            <h2>Ride Details</h2>
                        </div>

                    </div>
                    {
                        ridedata &&
                        <div className="vdbody-div">
                            <h1>Ride Id: {ridedata.rideId}</h1>
                            <h2>Vehicle Id :{ridedata.vehicleId}</h2>
                            <h2>PickUp Location : {ridedata.pickupPoint}</h2>
                            <h2>Drop Location: {ridedata.dropPoint}</h2>
                            <h2>Date and Time : {ridedata.dateTime}</h2>
                            <h2>price per KM : {ridedata.price}</h2>
                            <h2>Vehicle capacity: {ridedata.capacity}</h2>
                            <h2>Ride Type : {ridedata.type}</h2>
                            <Link className="btn btn-primary" to="/owner/ridelist">Back to Ride List</Link>
                        </div>
                    }
                </div>
            </div>
        </div>

    );
}
export default RideDetail;