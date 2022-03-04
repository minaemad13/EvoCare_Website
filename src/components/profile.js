import React, { useState,useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";

export default function Profile() {
  

   const [FormValues, setFormValues] = useState([]);
   const token = localStorage.getItem("token");
   const user = jwt(token);
   const user_id = user.id;
 
   useEffect(  // get the booked date from database when the value of selected date changed useing react hook on update  
    () => {
      axios
      .get(`http://127.0.0.1:8000/getuser/${user_id}`,{headers:{
     
        'Authorization': token
    }})
      .then(function (response) {
        setFormValues(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    [],
  );
  return (
    <div className="body1" style={{backgroundColor:"#1C1C1C" , height:"650px" , paddingTop:"50px"}}>
    
      <div className="container emp-profile justify-content-center"  style={{backgroundColor:"#1C1C1C"}}>
        <form>
          <div className="row ">
            <div className="col-md-6">
              <div className="profile-head">
                {/* <h5>Welcome:{FormValues.firstname}</h5> */}

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active btn btn-outline-warning"
                      id="home-tab"
                      style={{backgroundColor:"#1C1C1C",color:"white" ,borderBottom:"5px solid #EFB533"}}
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      {FormValues.First_Name} Info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              
                <Link className="btn btn-outline-warning" to="/edit">Edit Profile</Link>
      
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Full Name</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{color:"#EFB533"}}>{FormValues.First_Name} {FormValues.Last_Name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>E-mail</label>
                    </div>
                    <div className="col-md-6"><p style={{color:"#EFB533"}}>{FormValues.email}</p></div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Phone</label>
                    </div>
                    <div className="col-md-6"><p style={{color:"#EFB533"}}>{FormValues.phone}</p></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Birth Date</label>
                    </div>
                    <div className="col-md-6"><p style={{color:"#EFB533"}}>{FormValues.birth}</p></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Address</label>
                    </div>
                    <div className="col-md-6"><p style={{color:"#EFB533"}}>{FormValues.address}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
     
    </div>
  );
}
