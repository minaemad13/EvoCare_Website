import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";

export default function Profile() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatpassword: "",
    phone: "",
    bdate: "",
    address: "",
  };
  const [FormValues, setFormValues] = useState(initialValues);
  // const token = localStorage.getItem("token");
  // const user = jwt(token);
  // const user_id = user.id;

  // axios
  //   .get(`http://127.0.0.1:8000/getuser/${user_id}`)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <div className="body1">
      <br />
      <br />
      <div className="container emp-profile justify-content-center">
        <form>
          <div className="row ">
            <div className="col-md-6">
              <div className="profile-head">
                {/* <h5>Welcome:{FormValues.firstname}</h5> */}

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      User Info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-info">
                <Link to="/edit">Edit Profile</Link>
              </button>
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
                      <label>Full Name</label>
                    </div>
                    <div className="col-md-6">
                      {/* <p>{FormValues.firstname}</p> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>E-mail</label>
                    </div>
                    <div className="col-md-6">{/* <p>{email}</p> */}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Password</label>
                    </div>
                    <div className="col-md-6">{/* <p>{password}</p> */}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">{/* <p>{phone}</p> */}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Birth Date</label>
                    </div>
                    <div className="col-md-6">{/* <p>{birth}</p> */}</div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Address</label>
                    </div>
                    <div className="col-md-6">{/* <p>{address}</p> */}</div>
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
