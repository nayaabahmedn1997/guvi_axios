import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../redux/userSlice';




 const Card = ({id, data}) => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
    const {name, company, username} = data;
  return (
    <div className="card col-sm-12 col-md-6 col-lg-3  m-1 " >
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{username}</h6>
      <p className="card-text">{company.catchPhrase}</p>
      
      <button type="button" className="btn btn-primary card-link"
      onClick={()=>navigate(`/editSingleData/${id}`)}
      >Edit</button>
      <button type="button" className="btn btn-danger card-link"
      onClick={()=>dispatch(deleteUser(id))}
      >Delete</button>
      
    </div>
  </div>
  )
}

export default Card;
