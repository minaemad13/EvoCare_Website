import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Log.css";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import jwt from 'jwt-decode'
import {useHistory} from 'react-router-dom';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";


export default function Login({setIsAuthenticated}) {
  const history = useHistory()
  const initialValues = { email: "", password: "" };
  const [FormValues, setFormValues] = useState(initialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [logMessage, setlogMessage] = useState('');


  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [prop]: event.target.value });
    setFormValues({ ...FormValues, [name]: value });
  };



  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(FormValues));
    axios
      .post("http://127.0.0.1:8000/login/", {
        email: FormValues["email"],
        password: FormValues["password"],
      })
      .then(function (response) {
        // console.log(response.data.user_id);
        // console.log(response.data.message);
        if(response.request.status === 200){
                    setlogMessage('')
                }
                else{
                    setlogMessage(response.request.message)
                };

      const token = response.data.jwt;
      const user = jwt(token);
     const  user_id=user.id // decode your token here
      localStorage.setItem('token', token);
      setIsAuthenticated(user);
      history.push('/'); 
      
      
      })
      .catch(function (error) {
        console.log(error);
        setlogMessage("the email or password is not correct");
      });

    setIsSubmit(true);
  };

  const handleChange = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...FormValues, [name]: value });
    //console.log(FormValues);

  };

  useEffect(() => {
    //console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
    //  console.log(FormValues);
    }
  }, [FormErrors]);
  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    return errors;
  };
  return (
    <>
      <section className="login-block ">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 login-sec">
              <h2 className="text-center" style={{color:"#efb533"}}>Login</h2>
              {Object.keys(FormErrors).length === 0 && isSubmit ? (
                <div classNameName="ui message success" style={{color:"#efb533"}}>
                  {/*Signed in successfully*/}
                </div>
              ) : (
                console.log(JSON.stringify(FormValues, undefined, 2))
              )}
              <br></br>
              <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                {/* <div className="form-group">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={FormValues.email}
                      onChange={handleChange}
                    />
                    <p id="msg">{FormErrors.email}</p>
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                </div> */}
                <InputLabel htmlFor="standard-adornment-email" style={{color:"white"}} id="inputs">
                  Enter your Email
                </InputLabel>
                <br></br>
                <Input
                  id="inputs"
                  style={{backgroundColor:"white" , borderRadius:"5px" ,width:"75%", height: "calc(2.5rem + 2px)"}}
                  name="email"
                  type="email"
                  placeholder=" name@example.com"
                  value={FormValues.email}
                  onChange={handleChange}
                />
                <p id="msg">{FormErrors.email}</p>

                <br />
                <br />
                <InputLabel htmlFor="standard-adornment-password" style={{color:"white"}} id="inputs">
                  Enter your Password
                </InputLabel>
                <br></br>
                <Input
                  id="inputs"
                  name="password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password"),handleChange}
                  style={{backgroundColor:"white" , borderRadius:"5px" ,width:"75%", height: "calc(2.5rem + 2px)"}}
                  value={FormValues.password}
                  placeholder="Enter Your Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        id="inputs"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <p id="msg">{FormErrors.password}</p>

                <br />
                <br />

                {/* <div className="form-group">
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter Your Password"
                      value={FormValues.password}
                      onChange={
                        (handleChange, handlePasswordChange("password"))
                      }
                      type={FormValues.showPassword ? "text" : "password"}
                    />
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {FormValues.showPassword ? (
                        <Visibility  style={{ color: "#efb533" }}/>
                      ) : (
                        <VisibilityOff style={{ color: "#efb533" }} />
                      )}
                    </IconButton>
                    <p id="msg">{FormErrors.password}</p>
                    <label for="floatingInput">Password</label>
                  </div>
                </div> */}
                {logMessage && <p className="alert alert-danger">
                  {logMessage}
                </p>}
                <br />
                <div className="form-check">
                  {/* <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    <small>Remember Me</small>
                  </label> */}
                  <div className="d-grid gap-3 col-3 mx-auto">
                    <div className="float-left">
                      <button
                        type="submit"
                        className="btn btn-login btn-outline-warning"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="card-footer text-center">
                  <div className="d-flex justify-content-center links" style={{color:"white"}}>
                    Don't have an account?
                    <Link to="/Register" style={{color:"#efb533"}}>Register</Link>
                  </div>
                </div>
              </form>
              <br />
            </div>

            <div className="col-md-8 content  d-none d-md-block">
            <img src={require('../resources/logo.png')} alt="" className="img-fluid" style={{width:"890px",height:"900px"}}/>
            {/* <img src={require("../resources/8bdd1dd1-f7bb-4873-89f0-0182e3885254.jpeg")} alt="intro" className="img-fluid"  style={{width:"850px",height:"600px"}}/> */}
              
              <div
              
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={require("../resources/handwash.jpg")} 


                      // src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a>
          <FloatingWhatsApp
            phoneNumber="+20 1012769465"
            accountName="Esraa Bahaa"
            allowClickAway
            notification
            notificationDelay={60000}
            notificationSound
          />
        </a> */}
      </section>
      
    </>
  );
}
