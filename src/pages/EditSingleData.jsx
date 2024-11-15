import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userSlice";
import NavBar from "../components/NavBar";


const EditSingleData = () => {


  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const {id} = useParams();
  const {users, loading, error} = useSelector((state)=> 
    state.users);


  //Getting the current user data
  const currentUserData = users.find(user => user.id === +id );
  


  // State to hold the initial form data
  const [formData, setFormData] = useState(currentUserData);

  // Refs for all input fields
  const idRef = useRef();
  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const suiteRef = useRef();
  const cityRef = useRef();
  const zipcodeRef = useRef();
  const phoneRef = useRef();
  const websiteRef = useRef();
  const companyNameRef = useRef();
  const catchPhraseRef = useRef();
  const bsRef = useRef();

  // Populate refs with initial state data on mount
  useEffect(() => {
    if (formData) {
      idRef.current.value = formData.id;
      nameRef.current.value = formData.name;
      usernameRef.current.value = formData.username;
      emailRef.current.value = formData.email;
      streetRef.current.value = formData.address.street;
      suiteRef.current.value = formData.address.suite;
      cityRef.current.value = formData.address.city;
      zipcodeRef.current.value = formData.address.zipcode;
      phoneRef.current.value = formData.phone;
      websiteRef.current.value = formData.website;
      companyNameRef.current.value = formData.company.name;
      catchPhraseRef.current.value = formData.company.catchPhrase;
      bsRef.current.value = formData.company.bs;
    }
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect updated data from refs
    const updatedData = {
      id: +idRef.current.value,
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      address: {
        street: streetRef.current.value,
        suite: suiteRef.current.value,
        city: cityRef.current.value,
        zipcode: zipcodeRef.current.value,
      },
      phone: phoneRef.current.value,
      website: websiteRef.current.value,
      company: {
        name: companyNameRef.current.value,
        catchPhrase: catchPhraseRef.current.value,
        bs: bsRef.current.value,
      },
    };
  
    dispatch(updateUser(
      updatedData
    ));
    navigate("/");
  };

  return (
    <div className="">
      <NavBar />
    <div className="container mt-5">
      <h1 className="mb-4">User Profile Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>ID</label>
            <input type="number" className="form-control" ref={idRef} readOnly />
          </div>
          <div className="col-md-6">
            <label>Name</label>
            <input type="text" className="form-control" ref={nameRef} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Username</label>
            <input type="text" className="form-control" ref={usernameRef} />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input type="email" className="form-control" ref={emailRef} />
          </div>
        </div>

        <fieldset className="border p-3 mb-3">
          <legend className="w-auto">Address</legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Street</label>
              <input type="text" className="form-control" ref={streetRef} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Suite</label>
              <input type="text" className="form-control" ref={suiteRef} />
            </div>
            <div className="col-md-6 mb-3">
              <label>City</label>
              <input type="text" className="form-control" ref={cityRef} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Zipcode</label>
              <input type="text" className="form-control" ref={zipcodeRef} />
            </div>
          </div>
        </fieldset>

        <fieldset className="border p-3 mb-3">
          <legend className="w-auto">Company</legend>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label>Company Name</label>
              <input type="text" className="form-control" ref={companyNameRef} />
            </div>
            <div className="col-md-4 mb-3">
              <label>Catchphrase</label>
              <input type="text" className="form-control" ref={catchPhraseRef} />
            </div>
            <div className="col-md-4 mb-3">
              <label>Business Slogan</label>
              <input type="text" className="form-control" ref={bsRef} />
            </div>
          </div>
        </fieldset>

        <fieldset className="border p-3 mb-3">
          <legend className="w-auto">Contact</legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input type="text" className="form-control" ref={phoneRef} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Website</label>
              <input type="text" className="form-control" ref={websiteRef} />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default EditSingleData;
