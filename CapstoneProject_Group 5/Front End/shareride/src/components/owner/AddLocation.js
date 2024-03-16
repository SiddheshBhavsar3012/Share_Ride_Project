import React, { useState } from 'react'
import { useEffect } from 'react';
import OwnerNavbar from './OwnerNavbar';
import { Link } from 'react-router-dom';
import { addLocation, getAllLocations } from '../../service/location.service';
export default function AddLocation() {
    const [location, locationupdate] = useState('');
    const [data, dataupdate] = useState('');
    const ProceedLogin = (e) => {
        e.preventDefault();
        let locationdata = { locationName:location };
        console.log(locationdata)

        addLocation(locationdata)
            .then((res) => { console.log(res);
                getAllLocations()
                .then((resp) => { dataupdate(resp); })
                .catch((err) => { console.log(err.message); })
            })
            .catch((err) => { console.log('Failed :' + err.message); });
            

    }
    useEffect(() => {
            getAllLocations()
            .then((resp) => { dataupdate(resp); })
            .catch((err) => { console.log(err.message); })
    }, [])
    return (
        <>
<OwnerNavbar/>
            <div className='addloc-head-div'>
                <h1>Add Location</h1>
            <form onSubmit={ProceedLogin} className="container">
                <div className="form-group">
                    <input value={location} placeholder="Enter Location" onChange={e => locationupdate(e.target.value)} className="form-control" style={{width:200,marginLeft:470}}></input><br />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Add Location</button>
                </div>
            </form>
            </div>
            <div className='addloc-table-div'>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Location Id</td>
                            <td>Location Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map(item => (
                                <tr key={item.locationId}>
                                    <td>{item.locationId}</td>
                                    <td>{item.locationName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Link to='/owner' className='btn btn-primary'>Back To Owner Home</Link>

        </>
    )
}
