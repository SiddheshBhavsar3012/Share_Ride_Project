import axios from "axios";
export const userLogin =(user)=>{
    return axios.post("http://localhost:8083/user/login",user).then( res=>{console.log( res.data);return res.data}).catch(err=>console.log(err))
}
export const userRegister=(user)=>{
    return axios.post("http://localhost:8083/user/register",user).then( res=>{console.log( res.data);return res.data}).catch(err=>console.log(err))
}