import React, { useRef } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';

const EditSingleData = () => {


  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const {id} = useParams();
  const {users, loading, error} = useSelector((state)=> 
    state.users);


  //Getting the current user data
  const currentUserData = users.find(user => user.id === +id );
  const {name, email, username, phone, website} = currentUserData;


  //UserRef items
  const nameRef = useRef(name);
  const emailRef = useRef(email);
  const usernameRef = useRef(username);
  const phoneRef = useRef(phone);
  const websiteRef = useRef(website);




  const saveData =(e)=>{
    e.preventDefault();
    const editableValue ={
      ...currentUserData,
      name: nameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      phone: phoneRef.current.value,
      website: websiteRef.current.value
    };
    
    dispatch(updateUser(editableValue));
    navigate("/");


  }

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <form className='form-container'>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" 
            placeholder={name}
            contentEditable = {true}
            ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" 
            placeholder={username}
            contentEditable = {true}
            ref={usernameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" 
            placeholder={email}
            contentEditable = {true}
            ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" 
            placeholder={phone}
            contentEditable = {true}
            ref={phoneRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">Website</label>
            <input type="text" className="form-control" id="website"
            placeholder={website}
            contentEditable = {true}
            ref={websiteRef}
            />
          </div>

          <div className="button-container row">
            
          <button type="button" className="btn custom-button btn-primary col col-sm-12 col-md-6"
          onClick={(e)=>saveData(e)}
          >Save</button>
          <button type="button" className="btn 
          custom-button
          btn-secondary col col-sm-12 col-md-6">Cancel</button>
          </div>

        </form>
      </div>

    </div>

  )
}

export default EditSingleData