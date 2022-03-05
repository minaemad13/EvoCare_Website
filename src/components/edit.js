import React, { useState ,useEffect} from "react";
import "./edit.css";
import axios from "axios";
import jwt from "jwt-decode";
import { useHistory } from 'react-router-dom'
export default function Edit() {
  const history = useHistory()


  const [FormValues, setFormValues] = useState([]);
  const [FormErrors, setFormErrors] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
   const data1={
      "First_Name": FormValues.First_Name,
      "Last_Name": FormValues.Last_Name,
      "phone": FormValues.phone,
      "email":FormValues.email,
      "address":FormValues.address ,
      "birth": FormValues.birth,
      "password":FormValues.password,
      
    }
    axios.put(`http://127.0.0.1:8000/edit/${user_id}`,data1, {headers:{
     
      'Authorization': token
    }
   } )
      .then(function (response) {
       // console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
      history.push('/edit'); 

  };

  const handleChange = (e) => {
   // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...FormValues, [name]: value });
   // console.log(FormValues);
    setFormErrors(validate(FormValues));
  };

  useEffect(() => {
    //console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
     // console.log(FormValues);
    }
  }, [FormErrors]);
  const validate = (values) => {
    const errors = {};
    const validname = /[A-Za-z]$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validPassword =
      /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validphone = /^01[0125][0-9]{8}$/;

    if (!values.First_Name) {
      errors.First_Name = "Firstname is required!";
    } else if (!validname.test(values.First_Name)) {
      errors.First_Name =
        "This is not a valid name!, Name should be charachters only";
    }
    if (!values.Last_Name) {
      errors.Last_Name = "Lastname is required!";
    } else if (!validname.test(values.Last_Name)) {
      errors.Last_Name =
        "This is not a valid name!, Name should be charachters only";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (validPassword.test(values.password)) {
      errors.password =
        "This is not a valid Password format!, Minimum eight characters, at least one letter, one number and one special character ";
    }
    // if (!values.repeatpassword) {
    //   errors.repeatpassword = "Please Repeat Your Password ";
    // } else if (values.repeatpassword !== values.password) {
    //   errors.repeatpassword = "Passwords Don't Match";
    // }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    } else if (!validphone.test(values.phone)) {
      errors.phone = "This is not a valid Egyption Phone Number!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }

    return errors;
  };

  return (
    <div className="body1" style={{backgroundColor:"#1C1C1C"}}>
     
      <div className="container emp-profile" style={{backgroundColor:"#1C1C1C"}}>
        <div className="row">
          <div className="col-md-6">
            <div className="profile-head">
              <h5 className="text-center" style={{color:"white"}}>{FormValues.First_Name} {FormValues.Last_Name}</h5>

              {Object.keys(FormErrors).length === 0 && isSubmit ? (
                <div classNameName="ui message success">
                  Updated successfully
                </div>
              ) : (
               console.log(JSON.stringify(FormValues, undefined, 2))
              )}

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
        </div>
        <form onSubmit={(e) => {handleSubmit(e)}} method="POST" className="edit-form">
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
                      <label style={{color:"white"}}>First Name</label>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="First_Name"
                          className="form-control"
                          placeholder="First Name"
                          aria-label="First Name"
                          aria-describedby="basic-addon1"
                          value={FormValues.First_Name}
                          onChange={handleChange}
                        />
                      </div>
                      <p id="msg">{FormErrors.First_Name}</p>
                    </div>
                  </div>
                  <br />
                 
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Last Name</label>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          name="Last_Name"
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          aria-label="Last Name"
                          aria-describedby="basic-addon1"
                          value={FormValues.Last_Name}
                          onChange={handleChange}
                        />
                      </div>
                      <p id="msg">{FormErrors.Last_Name}</p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Birth Date</label>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="birth"
                          className="form-control"
                          placeholder="Bitth Date"
                          aria-label="First Name"
                          aria-describedby="basic-addon1"
                          value={FormValues.birth}
                          onChange={handleChange}
                        />
                      </div>
                    
                    </div>
                  </div>
                  <br/>

                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Address</label>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          aria-label="Address"
                          aria-describedby="basic-addon1"
                          value={FormValues.address}
                          onChange={handleChange}
                        />
                      </div>
                      <p id="msg">{FormErrors.address}</p>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>New Password</label>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="New Password"
                          aria-label="New Password"
                          aria-describedby="basic-addon1"
                          value={FormValues.password}
                          onChange={handleChange}
                        />
                      </div>
                      <p id="msg">{FormErrors.password}</p>
                    </div>
                  </div>
                  <br />

                  {/* <div className="row">
                    <div className="col-md-6">
                      <label>Confirm New Password</label>
                    </div>

                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="password"
                          name="repeatpassword"
                          className="form-control"
                          placeholder="Confirm New Password"
                          aria-label="Confirm New Password"
                          aria-describedby="basic-addon1"
                          value={FormValues.repeatpassword}
                          onChange={handleChange}
                        />
                      </div>
                      <p id="msg">{FormErrors.repeatpassword}</p>
                    </div>
                  </div> */}
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>E-Mail</label>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-6">
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="E-Mail"
                            aria-label="E-Mail"
                            aria-describedby="basic-addon1"
                            value={FormValues.email}
                            onChange={handleChange}
                          />
                        </div>
                        <p id="msg">{FormErrors.email}</p>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label style={{color:"white"}}>Phone Number</label>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-6">
                        <div className="input-group mb-3">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            aria-label="Phone Number"
                            name="phone"
                            value={FormValues.phone}
                            onChange={handleChange}
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <p id="msg">{FormErrors.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              className="btn btn-outline-warning me-md-2"
              type="submit"
              className="btn btn-login btn-outline-warning"
              name="save"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
