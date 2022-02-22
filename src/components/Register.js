import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Reg.css";
import moment from "react-moment";
import axios from "axios";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "react-datepicker/dist/react-datepicker.css";
import FloatingWhatsApp from "react-floating-whatsapp";
// import Datepicker from "react-datepicker";
export default function Login() {
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
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(FormValues));

    axios
      .post("http://127.0.0.1:8000/register/", {
        First_Name: FormValues["firstname"],
        Last_Name: FormValues["lastname"],
        email: FormValues["email"],
        phone: FormValues["phone"],
        password: FormValues["password"],
        address: FormValues["address"],
        birth: FormValues["bdate"],
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsSubmit(true);
  };
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...FormValues, [name]: value });
    console.log(FormValues);
  };

  useEffect(() => {
    console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log(FormValues);
    }
  }, [FormErrors]);
  const validate = (values) => {
    const errors = {};
    const validname = /[A-Za-z]$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validphone = /^01[0125][0-9]{8}$/;

    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    } else if (!validname.test(values.firstname)) {
      errors.firstname =
        "This is not a valid name!, Name should be charachters only";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    } else if (!validname.test(values.lastname)) {
      errors.lastname =
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
    if (!values.repeatpassword) {
      errors.repeatpassword = "Please Repeat Your Password ";
    } else if (values.repeatpassword != values.password) {
      errors.repeatpassword = "Passwords Don't Match";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    } else if (!validphone.test(values.phone)) {
      errors.phone = "This is not a valid Egyption Phone Number!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.bdate) {
      errors.bdate = "Birth Date is required!";
    }
    return errors;
  };
  // const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
    <br/> <br/>
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Register Now </h2>
              {Object.keys(FormErrors).length === 0 && isSubmit ? (
                <div classNameName="ui message success">
                  Registered successfully
                </div>
              ) : (
                console.log(JSON.stringify(FormValues, undefined, 2))
              )}
              <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      name="firstname"
                      placeholder="First Name"
                      aria-label="First name"
                      value={FormValues.firstname}
                      onChange={handleChange}
                    />
                    <p id="msg">{FormErrors.firstname}</p>

                    <label for="floatingInput">First Name</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      name="lastname"
                      placeholder="Last Name"
                      aria-label="Last name"
                      value={FormValues.lastname}
                      onChange={handleChange}
                    />
                    <p id="msg">{FormErrors.lastname}</p>
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>

                <div className="form-group">
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
                    <label for="floatingInput">Email address</label>
                  </div>
                </div>

                <div className="form-group">
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter Your Password"
                      value={FormValues.password}
                      onChange={handleChange}
                    />
                    <p id="msg">{FormErrors.password}</p>
                    <label for="floatingInput">Password</label>
                  </div>
                </div>

                <div className="form-group">
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      name="repeatpassword"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Please Confirm Your Password"
                      placeholder="Please Confirm Your Password"
                      value={FormValues.repeatpassword}
                      onChange={handleChange}
                    />
                    <p id="msg">{FormErrors.repeatpassword}</p>
                    <label for="floatingInput">Confirm Your Password</label>
                  </div>
                </div>
                <div className="form-group">
                  <div class="form-floating ">
                    <textarea
                      type="text"
                      name="address"
                      className="form-control"
                      id="floatingTextarea"
                      placeholder="Address"
                      value={FormValues.address}
                      onChange={handleChange}
                    ></textarea>

                    <p id="msg">{FormErrors.address}</p>
                    <label for="floatingTextarea">Address</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group input-group-md mb-3">
                    <div class="form-floating mb-3">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        id="floatingInput"
                        placeholder="+20"
                        value={FormValues.phone}
                        onChange={handleChange}
                      />

                      <p id="msg">{FormErrors.phone}</p>
                      <label for="floatingInput">Phone Number</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="floatingInput">Birthdate</label>
                  <div className="input-group input-group-md mb-3">
                    <div class="form-floating mb-3">
                      <DatePickerComponent
                        name="bdate"
                        maxDate={new Date()}
                        value={FormValues.bdate}
                        onChange={handleChange}
                        showYearDropdown
                        scrollableMonthYearDropdown
                      />
                      <p id="msg">{FormErrors.bdate}</p>
                    </div>
                  </div>
                </div>

                <div className="float-left">
                  <button
                    type="submit"
                    className="btn btn-login btn-outline-danger"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div classNameName="card-footer">
                <div classNameName="d-flex justify-content-center links">
                  Already have an account?
                  <Link to="/">Login</Link>
                </div>
              </div>
            </div>
            <div className="col-md-8 banner-sec">
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
                      src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a>
          <FloatingWhatsApp
            phoneNumber="+20 1204822114"
            accountName="Mariam"
            allowClickAway
            notification
            notificationDelay={60000}
            notificationSound
          />
        </a>
      </section>
    </>
  );
}
