import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import axios from 'axios'
const UseGetAllUsers = () => {
  const [users, setUsers] =useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const getUser=async ()=>{
        setLoading(true)
        try {
            const token=Cookies.get("token")
            const response=await axios.get("/api/user/allusers",{
                credential:"include",
                headers:{

                    "Authorization":`Bearer ${token}`
                }
            })
            setUsers(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)
    
        }
    }
    getUser()
   
  },[])
  return[users,loading]
}

export default UseGetAllUsers