import axios from "axios"

export const getAllVehcile=()=>{
    return axios.get("http://localhost:8082/vehicle/getAll").then(res=>{
        return res.data;
    })
    .catch(err=>console.log(err))
}

export const getVehiclByOwnerId=(id)=>{
    return axios.get("http://localhost:8082/vehicle/getBy/owner/"+id).then(res=>{
        return res.data;
    })
    .catch(err=>console.log(err));
}
export const addVehicle=(data)=>{
    console.log(data)
    return axios.post("http://localhost:8082/vehicle/add",data).then(res=>{console.log(res);return res.data}).catch(err=>console.log(err))
}

export const deleteVehicle=(id)=>{
    return axios.delete("http://localhost:8082/vehicle/delete/"+id).then().catch(err=>console.log(err));
}
export const getvehicleById =(id)=>{
    return axios.get("http://localhost:8082/vehicle/byId/"+id).then(res=>{
        return res.data;
    })
}

export const updateVehicle =(data)=>{
    return axios.put("http://localhost:8082/vehicle/update",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err));
}
export const getVehileByPrice=()=>{
    return axios.get("http://localhost:8082/vehicle/price").then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getVehicleByType=(data)=>{
    ///vehicle/wheeler/{type}
    return axios.get("http://localhost:8082/vehicle/wheeler/"+data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getVehiclesByPriceAndType=(data)=>{
    ///price/{type}
    return axios.get("http://localhost:8082/vehicle/price/"+data).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}