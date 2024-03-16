import axios from "axios"

export const addLocation =(data)=>{
    return axios.post("http://localhost:8082/location/add",data).then(res=>{return  res.data}).catch(err=>console.log(err))
}

export const getLocationById=(id)=>{
    return axios.get("http://localhost:8082/location/getById/"+id).then(res=>{return  res.data}).catch(err=>console.log(err))
}
export const deleteLocationById=(id)=>{
    return axios.delete("http://localhost:8082/location/delete/"+id).then(res=>{return  res.data}).catch(err=>console.log(err))
}
export const getAllLocations=()=>{
    return axios.get("http://localhost:8082/location/getall").then(res=>{return  res.data}).catch(err=>console.log(err))
}