import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { sendUserMessage } from '../../../service/message.service';
import UserNavbar from '../UserNavbar';
import UserMsgReceive from './UserMsgReceive';
export default function UserMsgSend() {
  // const { msgid } = useParams();
  // const [senddata, senddatachange] = useState({});
  const [text,textupdate]=useState("");
  const [ownerid,owneridupdate]=useState(0);
  const[user,setUser]=useState();
  useEffect(()=>{
    let us= JSON.parse(localStorage.getItem('user'))
    setUser(us);
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    let msgdata = { message:text ,receiverId:ownerid,senderId:user.userId};
    console.log(msgdata)
    sendUserMessage(msgdata).then(res=>{console.log(res.data)
      alert('Message Sent Successfully');}
      )
    
  
  }
  return (
    <>
    <UserNavbar/>
    <div className="usermsgnew-div">
    <div className="offset-lg-3 col-lg-6">
      <div className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h2>Send Message</h2>
          </div>
          <div className="card-body">
          <div className="form-group">
                <label>Enter Owner Id </label>
                <input value={ownerid} onChange={e => owneridupdate(e.target.value)} className="form-control" style={{width:300,margin:'auto'}}></input>
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
      <div className='usermsg-div'>
      <UserMsgReceive/>
      </div>
      </div>
    </>
  )
}
