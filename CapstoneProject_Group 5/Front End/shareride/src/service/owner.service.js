import axios from "axios"

export const loginOwner =(data)=>{
    return axios.post("http://localhost:8082/owner/login",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const registerOwner=(data)=>{
    return axios.post("http://localhost:8082/owner/register",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const updateOwner=(data)=>{
    return axios.put("http://localhost:8082/owner/update",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getOwnerById=(id)=>{
    return axios.get("http://localhost:8082/owner/getById/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getAllOwner=()=>{
    return axios.get("http://localhost:8082/owner/getAll").then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
