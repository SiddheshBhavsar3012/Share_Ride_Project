import axios from "axios"

export const addRoutes =(data)=>{
    return axios.post("http://localhost:8082/route/add",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const getRoutes=(data)=>{
    return axios.post("http://localhost:8082/route/distance",data).then(res=>{return res.data}).catch(err=>console.log(err))
}