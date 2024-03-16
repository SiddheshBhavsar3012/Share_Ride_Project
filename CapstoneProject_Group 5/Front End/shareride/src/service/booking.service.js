import axios from "axios"

export const getBookingDetailsUserId=(id)=>{
    return axios.get("http://localhost:8084/bookingDetailas/byuser/Id/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const addBookingDetails=(data)=>{
    return axios.post("http://localhost:8084/bookingDetailas/add",data).then(res=>{
        return res.data
    }).catch(err=>console.log(err));
}

export const getBookingDetailsByStatus=(status)=>{
    return axios.get("http://localhost:8084/bookingDetailas/byStatus/"+status).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const getBookingDetailsById=(id)=>{
    return axios.get("http://localhost:8084/bookingDetailas/bookingId/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const getAllBookingDetails=()=>{
    return axios.get("http://localhost:8084/bookingDetailas/getAll").then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const updateDetails=(data)=>{
    ///updateStatus/{id}/status/{status}
    axios.put("http://localhost:8084/bookingDetailas/updateStatus/status/"+data.status+"/"+data.id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const getBookingDetailsByOwnerId=(id)=>{
    return axios.get("http://localhost:8084/bookingDetailas/byownerId/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}
export const deleteBookingDetails=(id)=>{
    return axios.delete("http://localhost:8084/bookingDetailas/delete/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err));
}