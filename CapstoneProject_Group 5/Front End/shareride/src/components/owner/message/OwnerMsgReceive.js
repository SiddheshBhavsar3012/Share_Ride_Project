import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUserMsg, getUserMessage } from '../../../service/message.service';
export default function OwnerMsgReceive() {
    const { userid } = useParams();
    const [recievedata, recievedatachange] = useState([]);
    const [user,setUser]=useState();
    useEffect(() => {
        let us=JSON.parse(localStorage.getItem('user'))
        setUser(us)
        console.log(us)
        getUserMessage(us.ownerId).then(res=>{
            recievedatachange(res);
            console.log(res)
        })
    }, []);

    const deleteMsg=(event)=>{
        deleteUserMsg(event.target.id).then(
            res=>{
                let us=JSON.parse(localStorage.getItem('user'))
        setUser(us)
        console.log(us)
        getUserMessage(us.ownerId).then(res=>{
            recievedatachange(res);
            }
        )
    }
        )}
    return (
        <>
            <div className="usermsg-div">
                <div className="container">
                    <div className="card">
                        <div className="card-title">
                            <h2>Received Messages</h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>User Id</td>
                                        <td>Message</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recievedata.map(function(item){
                                      return    <tr key={item.msgId}>
                                                <td>{item.senderId}</td>
                                                <td>{item.message} </td>
                                                <td><button className="btn btn-danger" type="submit" id={item.msgId} onClick={deleteMsg}>Delete</button></td>
                                            </tr>
})
                                    }
                                </tbody>
                            </table>
                            <Link to="/owner" className="btn btn-success">Back To Home</Link>
                            {/* <Link to="/owner/bookings" className="btn btn-success">Create Ride</Link> */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
