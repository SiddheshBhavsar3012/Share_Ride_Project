import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerOwner } from "../../service/owner.service";
import { userRegister } from "../../service/user.service";
import Navs from "./Navbar";
const Register = () => {
    const [fname, fnamechange] = useState("");
    const [lname, lnamechange] = useState("");
    const [username, usernamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [phone, phonechange] = useState("");
    const [usertype, usertypechange] = useState("user");
    const navigate = useNavigate();
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (fname === null || fname === '') {
            isproceed = false;
            errormessage += ' Firstname';
        }
        if (lname === null || lname === '') {
            isproceed = false;
            errormessage += ' Lastname';
        }
        if (username === null || username === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += ' Phone';
        }
        if (usertype === null || usertype === '') {
            isproceed = false;
            errormessage += ' UserType';
        }
        if (!isproceed) {
            toast.warning(errormessage)
        }
        else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(username)) {
            }
            else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { fname,lname,"userName":username,password,"contactNo":phone,"type":usertype };
        if (IsValidate()) { 
            
            if(usertype==='user'){
                console.log(regobj)
                userRegister(regobj)
                .then((res) => {
                    toast.success('Registered successfully.')
                    navigate('/login');
                }).catch((err) => { toast.error('Failed :' + err.message); });
            }else{
                registerOwner(regobj)
                .then((res) => {
                    toast.success('Registered successfully.')
                    navigate('/login');
                }).catch((err) => { toast.error('Failed :' + err.message); });
            }
        }
    }
    return (
        <>
        
        <div className="register-div">
        <Navs/>
            <div className="offset-lg-3 col-lg-6 register-form-div">
                <div className="loginnew-div">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card card-div">
                        <div className="card-header">
                            <h2>User Registeration</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group">
                                    <label>First Name <span className="errmsg">*</span></label>
                                    <input value={fname} onChange={e => fnamechange(e.target.value)}
                                        className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name <span className="errmsg">*</span></label>
                                    <input value={lname} onChange={e => lnamechange(e.target.value)}
                                        className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => usernamechange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input value={password} onChange={e => passwordchange(e.target.value)}
                                        type="password" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Contact No. <span className="errmsg">*</span></label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)}
                                        className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>User Type <span className="errmsg">*</span></label>
                                    <br></br>
                                    <input type="radio" checked={usertype === 'owner'} onChange={e => usertypechange(e.target.value)} name="usertype" value="owner" className="app-check"></input>
                                    <label>owner&nbsp;</label>
                                    <input type="radio" checked={usertype === 'user'} onChange={e => usertypechange(e.target.value)} name="usertype" value="user" className="app-check"></input>
                                    <label>user</label>
                                </div>

                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            Already have an account ? <Link to={'/login'} className="btn btn-primary">Login here</Link>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Register;