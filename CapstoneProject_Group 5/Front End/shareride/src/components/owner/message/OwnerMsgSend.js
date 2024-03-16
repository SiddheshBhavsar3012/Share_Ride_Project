import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { sendOwnerMessage } from '../../../service/message.service';
import OwnerNavbar from '../OwnerNavbar';
import OwnerMsgReceive from './OwnerMsgReceive';
export default function OwnerMessage() {
  const [text,textupdate]=useState("");
  const [userid,useridupdate]=useState(0);
  const[user,setUser]=useState()
  useEffect(() => {
    let us=JSON.parse(localStorage.getItem('user'))
    setUser(us)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    let msgdata = { message:text,senderId:user.ownerId,receiverId:userid};
    sendOwnerMessage(msgdata).then(res=>{console.log(res)
       alert('Message Sent Successfully');}
    
    )

  }
  return (
    <>
    <OwnerNavbar/>
    <div className="usermsgnew-div">
    <div className="offset-lg-3 col-lg-6">
      <div className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h2>Send Message</h2>
          </div>
          <div className="card-body">
          <div className="form-group">
                <label>Enter User Id </label>
                <input value={userid} onChange={e => useridupdate(e.target.value)} className="form-control" style={{width:300,margin:'auto'}}></input>
            </div>
              <div className="form-group">
                <label>Enter Text</label>
                <textarea value={text} onChange={e => textupdate(e.target.value)} className="form-control" style={{width:500,margin:'auto'}}></textarea>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
        </div>
      </div>
      <div>
        <OwnerMsgReceive/>
      </div>
      </div>
    </>
  )
}
