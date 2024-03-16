import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginOwner } from "../../service/owner.service";
import { userLogin } from "../../service/user.service";
import Navs from "./Navbar";
const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const [usertype, usertypeupdate] = useState('user');
    const[user,setUser]=useState({});
    console.log(usertype);
    useEffect(() => {
        sessionStorage.clear();
    }, []);
    const usenavigate = useNavigate();
    const ProceedLogin = (e) => {
        
        e.preventDefault();
        if (validate()) {
            let user={
                "username":username,
                "password":password
            }
            console.log(user)
            console.log(usertype)
            if(usertype==='user'){

            
            userLogin(user).then(res=>{console.log( res);setUser(res)
            console.log(res)
            console.log(res.type)
            var flag=true;
            localStorage.setItem('user',JSON.stringify(res))
            if(res.type==='user'){
                flag=false
                toast.success('User Login Successfully');
             usenavigate('/user')
            }
            else{
                toast.error('Please Enter valid credentials');
            }
            
        }).catch(err=>console.log(err))
            }
            else{
                var flag=true
                loginOwner(user).then(res=>
                    {console.log( res);setUser(res);
                        flag=false
                        localStorage.setItem('user',JSON.stringify(res))
                        toast.success('Owner Login Successfully');
                        usenavigate('/owner')
                    }
                )
                if(!flag){
                    toast.error('Please Enter valid credentials');
                }
                
            }
            }
    
}

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        if (usertype === '' || usertype === null) {
            result = false;
            toast.warning('Please Enter UserType');
        }
        return result;
    }
    return (
        <>
        <Navs/>
        <div className="row login-div">
            <div className="offset-lg-3 col-lg-6">
                <div className="loginnew-div">
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card card-div">
                        <div className="card-header">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>User Type <span className="errmsg">*</span></label>
                                <br></br>
                                <input type="radio" checked={usertype === 'owner'} onChange={e => usertypeupdate(e.target.value)} name="usertype" value="owner" className="app-check"></input>
                                <label>owner&nbsp;</label>
                                <input type="radio" checked={usertype === 'user'} onChange={e => usertypeupdate(e.target.value)} name="usertype" value="user" className="app-check"></input>
                                <label>user</label>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            Don't have an account ? <Link className="btn btn-primary" to={'/register'}>Register here</Link>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;