import React, { useState } from "react";
import "./edit.css";

export default function Edit() {
  const initialValues = {
    firstname: "",
    lastname: "",

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

  // const token = localStorage.getItem("token");
  // const user = jwt(token);
  // const user_id = user.id;

  // axios
  //   .get(`http://127.0.0.1:8000/edit/${user_id}`)
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
      <div className="container emp-profile">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="profile-head">
                <h5 className="text-center">Mariam Adel</h5>
                {/* username */}
                {Object.keys(FormErrors).length === 0 && isSubmit ? (
                  <div classNameName="ui message success">
                    Registered successfully
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
                      <label>First Name</label>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First Name"
                          aria-label="First Name"
                          aria-describedby="basic-addon1"
                          value={FormValues.firstname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Last Name</label>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Old Password"
                          aria-label="Old Password"
                          aria-describedby="basic-addon1"
                          value={FormValues.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Address</label>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Old Password"
                          aria-label="Old Password"
                          aria-describedby="basic-addon1"
                          value={FormValues.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>New Password</label>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="New Password"
                          aria-label="New Password"
                          aria-describedby="basic-addon1"
                          value={FormValues.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Confirm New Password</label>
                    </div>

                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Confirm New Password"
                          aria-label="Confirm New Password"
                          aria-describedby="basic-addon1"
                          value={FormValues.repeatpassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>E-Mail</label>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="E-Mail"
                            aria-label="E-Mail"
                            aria-describedby="basic-addon1"
                            value={FormValues.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone Number</label>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone Number"
                            aria-label="Phone Number"
                            value={FormValues.phone}
                            onChange={handleChange}
                            aria-describedby="basic-addon1"
                          />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="button"
              className="btn btn-outline-info me-md-2"
              name="save"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
