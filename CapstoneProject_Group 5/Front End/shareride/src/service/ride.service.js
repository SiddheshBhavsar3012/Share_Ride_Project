import axios from 'axios'
export const getDataByAvailableRides=(data)=>{
    return axios.post("http://localhost:8082/ride/getByTime/Location",data).then(res=>{
        return res.data
    })
    .catch(err=>console.log(err))
}

export const getAllRides=()=>{
    return axios.get("http://localhost:8082/ride/getAll").then(res=>{return res.data}).catch(err=>console.log(err))
}

export const addRide =(data)=>{
    return axios.post('http://localhost:8082/ride/add',data).then(res=>{
        return res.data;
    }).catch(err=>console.log(err));
}

export const deleteRide=(id)=>{
    return axios.delete("http://localhost:8082/ride/delete/"+id).then().catch(err=>console.log(err))
}

export const updateRideCapacity=(data)=>{
    return axios.put(`http://localhost:8082/ride/update/capacity/${data.id}/${data.cap}`).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getRideById=(id)=>{
    return axios.get("http://localhost:8082/ride/byid/"+id).then(res=>{
        return res.data
    })
    .catch(err=>console.log(err))
}
export const updateRide=(data)=>{
    return axios.put("http://localhost:8082/ride/update",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getRideByOwnerId=(id)=>{
    return axios.get("http://localhost:8082/ride/owner/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}