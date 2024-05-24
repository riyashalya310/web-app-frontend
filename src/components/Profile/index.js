import { useEffect, useState } from 'react'
import './index.css'
import Cookies from 'js-cookie'

const Profile=(props)=>{
    const {match} = props
    const {params} = match
    const {id} = params
    const [details,setDetails]=useState({})
    const [error,setError]=useState("")

    const apiCallStudent=async()=>{
        const options = {
            method: "Get",
            headers:{
                jwtToken: Cookies.get('jwt-token')
            }
          };
          const url = `https://web-app-2ffv.onrender.com/students-list/${id}`;
          const response = await fetch(url, options);
          const data=await response.json();
          if (response.ok){
            setDetails(data)
          }
          else{
            setError(data)
          }
    };

    useEffect(apiCallStudent(),[]);

    return(
        <div>
            <h1>Student Id - {details.id}</h1>
            <p>Subject Name - {details.name}</p>
            <p>Marks - {details.marks}</p>
        </div>
    )
}

export default Profile