import axios from "axios"

export const sendUserMessage=(data)=>{
    return axios.post("http://localhost:8085/user/send",data).then(res=>{return res.data}).catch(err=>console.log(err))
}

export const getUserMessage=(id)=>{
    return axios.get("http://localhost:8085/user/getall/owner/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}


export const getOwnerMessage=(id)=>{
    return axios.get("http://localhost:8085/owner/getall/user/"+id).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
}

export const sendOwnerMessage=(data)=>{
    return axios.post("http://localhost:8085/owner/send",data).then(res=>{return res.data}).catch(err=>console.log(err))
}

export const deleteOwnerMsg=(id)=>{
    return axios.delete("http://localhost:8085/owner/delete/byid/"+id).then(res=>{
        return res.data
    })
}

export const deleteUserMsg=(id)=>{
    return axios.delete("http://localhost:8085/user/delete/byid/"+id).then(res=>{
        return res.data
    })
}