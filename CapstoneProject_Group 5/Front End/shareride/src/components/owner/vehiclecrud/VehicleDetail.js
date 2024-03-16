import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getvehicleById } from "../../../service/vehcile.service";
import OwnerNavbar from "../OwnerNavbar";
const VehicleDetail = () => {
    const { vehicleid } = useParams();
    const [vehicledata, vehicledatachange] = useState({});
    useEffect(() => {
        getvehicleById(vehicleid)
            .then((resp) => { vehicledatachange(resp); })
            .catch((err) => { console.log(err.message); })
    }, []);
    return (
        <>
        <OwnerNavbar/>
        <div className="vehicledetails-div">
            <div className="container"style={{margin:10}}>
                <div className="card row" style={{width:300,margin:'auto'}} >
                    <div className="card-title" >
                        <h2>VEHICLE DETAILS</h2>
                    </div>
                </div>
                <div className="card-body">
                {
                    vehicledata &&
                    <div className="vdbody-div">
                        <h2>Vehicle Id :{vehicledata.vehicleId}</h2>
                        <h2>Vehicle Name : {vehicledata.vehicleName}</h2>
                        <h2>Vehicle No. : {vehicledata.vehicleNo}</h2>
                        <h2>Vehicle Type : {vehicledata.type}</h2>
                        <h2>Vehicle Rating : {vehicledata.rating}</h2>
                        <h2>price per KM : {vehicledata.price}</h2>
                        <h2>Vehicle capacity: {vehicledata.capacity}</h2>
                        <h2>Vehicle ownerId : {vehicledata.ownerId}</h2>
                        <Link className="btn btn-primary" to="/owner/vehiclelist">Back to Listing</Link>
                    </div>
                }
                </div>
            </div>
        </div>
        </>
    );
}
export default VehicleDetail;