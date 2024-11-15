import React, { useEffect, useState } from 'react'

import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';



export const Home = () => {

    const navigate = useNavigate();

    const {users, loading, error} = useSelector((state)=> 
         state.users)
    const dispatch = useDispatch();
  
    useEffect(() => {
        if(!users.length){
            dispatch(fetchUsers());
        }
      
    }, []);
    
  return (
    <div className="">
         <NavBar  />
   <div className="container">
       
        <div className="form-data"></div>
        <div className="container ">
            <h1 className="title text-center">Users list</h1>
            <button type="button" className="btn btn-primary text-center"
            onClick={()=>navigate("/addUser")}
            >Add newUser</button>
            <div className="container  h-100 d-flex align-items-center justify-content-center">
                <div className="row mr-3">
                    {
                        users.map((element)=>(
                            <Card
                            key = {element.id}
                            id = {element.id}
                            data = {element}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
   </div>
   </div>
  )
}
