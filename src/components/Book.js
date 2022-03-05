import React, { useEffect } from 'react';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment'
import { useLocation } from "react-router-dom";
import jwt from "jwt-decode"
import { FaCalendarCheck, FaMoneyCheck } from 'react-icons/fa';
 import Carousel from "./service_carousel";

import emailjs from "emailjs-com"

// git current date in this format YYY-MM-DDT00:00 (iso8601)
const today = moment();
const date = today.format('YYYY-MM-DD') + "T00:00"

// this component to reserve appointement 
const Book = () => {
  // initialize states for selected date , invalid dates , pachage price , form data
  const [selected, setSelected] = useState([]);
  const [invalid, setInvalid] = useState([]);
  const [package_price, setPackage_price] = useState([]);
  const [package_id, setPackage_id] = useState([]);
  const [FormData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Phone: "",
  });
  const [FormErr, setFormErr] = useState({
    First_NameErr: "",
    Last_NameErr: "",
    EmailErr: "",
    PhoneErr: "",
  });
  var myinvalid = []


  // it will handel 
  const token= localStorage.getItem("token");
  const user = jwt(token);
  const  user_id=user.id 
  const location = useLocation();
  
  useEffect(() => {
     
  if (location.state.packageId){
    setPackage_price(location.state.packagePrice);
    setPackage_id(location.state.packageId);
  }
  else{
    setPackage_price(100);
    setPackage_id(0);
  }
  }, []);

  useEffect(  // get the booked date from database when the value of selected date changed useing react hook on update  
    () => {
      axios.get('http://127.0.0.1:8000/invalid/',{headers:{
     
        'Authorization': token
    }})
        .then(function (response) {
          setInvalid(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [],
  );

  invalid.map((inv) => {         // loop on data that get from database to push it in myivalid list to represent it 
    //console.log(inv.Date_Time)
    myinvalid.push({ start: inv.Date_Time, end: inv.Date_Time })
  });
//console.log(myinvalid)
  const handleSubmit = (e) => {   // take the form values and selected date and time from calender and send it to backend using post request 
    e.preventDefault();
    emailjs.sendForm("service_fh510hk",
      "template_mgopfxs", e.target,
      "user_Qdr9KNtFvRj7X19Pg2l5x").then((res) => { console.log("OK") }).catch(err => {
        console.log(err)
      })
    const data1= {
        "Date_Time": selected,
        "User_Id": user_id,
        "First_Name": FormData["First_Name"],
        "Last_Name": FormData["Last_Name"],
        "Email": FormData["Email"],
        "Phone": FormData["Phone"],
        "package_price":package_price*0.20,
        "package_id":package_id,
      }
    axios.post('http://127.0.0.1:8000/book', data1,{
      headers: {
      
        'Authorization': token
    
  }
}
    )
      .then(function (response) {
      //  console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
    axios.get('http://127.0.0.1:8000/invalid/', {headers:{
     
      'Authorization': token
  }})
        .then(function (response) {
          setInvalid(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

        axios.post('http://127.0.0.1:8000/testpayment/')
        .then(function (response) {
         // console.log(response.data.url);
          window.location.replace(response.data.url);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    // console.log(FormData);
    // console.log(FormData['First_Name']);
  };



  const onSelectedChange = (ev) => { // set Date and time using set state when value change in Calender 
    setSelected(ev.value);
  };


  const FormHandeller = (e) => { // this functio that take data from form set it in state using setstate and take the value make the custum validation on it 
    if (e.target.name === "First_Name") {
      setFormData({
        ...FormData,
        First_Name: e.target.value
      });
      setFormErr({
        ...FormErr,
        First_NameErr:
          e.target.value.length === 0 ? "This Fieald is required" : ""
      });

    }
    else if (e.target.name === "Last_Name") {
      setFormData({
        ...FormData,
        Last_Name: e.target.value
      });
      setFormErr({
        ...FormErr,
        Last_NameErr:
          e.target.value.length === 0 ? "This Fieald is required" : ""
      });
    }
    else if (e.target.name === "email") {
      setFormData({
        ...FormData,
        Email: e.target.value
      });
      setFormErr({
        ...FormErr,
        EmailErr:
          e.target.value.length === 0 ? "This Fieald is required" : !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) ? "Please inbut valid Email" : ""
      });

    } else if (e.target.name === "Phone") {
      setFormData({
        ...FormData,
        Phone: e.target.value
      });
      setFormErr({
        ...FormErr,
        PhoneErr:
          e.target.value.length === 0 ? "This Fieald is required" : e.target.value.length < 11 ? "please the Phone must be 11 number" : !(/^01[0125][0-9]{8}$/.test(e.target.value)) ? "Please Enter Valid Egyption Phone Number" : ""
      });

    }
  }



  // backgroundImage:`url(${background})` , backgroundrepeat: "no-repeat" 
  return (
    <div style={{ backgroundColor: "#1C1C1C" }}>
       <Carousel service_id={7} />
      <div className='container' style={{backgroundColor:"#1C1C1C"}}>
        <h1 className='text-center' style={{ color: "#efb533" }}>Date and Time</h1>
        <div className='m-5' style={{ border: "2 #efb533 solid" }}>
          <Datepicker  //using the DatePicker Component using mobiscroll that can take Date and Time
            controls={['calendar', 'timegrid']}
            min={date}
            max="2222-12-11T00:00"
            stepMinute={60}
            minTime="10:00"
            maxTime="22:00"
            display='inline'
            returnFormat='iso8601'
            theme="ios-dark"
            themeVariant='dark'
            invalid={myinvalid}
            onChange={onSelectedChange}
          />
        </div>
        <hr style={{ color: "#efb533", height: "2px" }}></hr>
        <div className="container "style={{backgroundColor:"#1C1C1C"}}>
        <div className='row'>
            <div className='col-6 text-center' >
              <div className='row' style={{ marginTop: "50px" }}>
                <FaCalendarCheck size={30} color='#efb533' />
                <br></br>
                <p style={{ color: '#efb533' }}>Booking Date and Time </p>
                <h4 style={{ color: "#efb533" }}> {selected}</h4>
              </div>
              <div className='row' style={{ marginTop: "50px" }}>
                <FaMoneyCheck size={30} color='#efb533' />
                <br></br>
                <p style={{ color: '#efb533' }}>Reservation Tax</p>
                <h4 style={{ color: '#efb533' }}>{package_price*0.20} EGP</h4>
              </div>
      
            </div>
            {/* backgroundColor: "black", */}
            <div className='col-6 text-center' style={{ height: "400px" }}>
              <h3 style={{ color: "white", marginTop: "20px" }}>Please input your <span style={{ color: "#efb533" }}>contact details</span></h3>
              <div style={{ marginTop: "50px" }}>

                <form  method='POST'  onSubmit={(e) => handleSubmit(e)} >
                  <div className='row'>
                    <div className="col-6">

                      <input type="text" placeholder='First Name*' className="form-control" value={FormData.Name} name="First_Name" onChange={(e) => FormHandeller(e)} />
                      <small className="text-danger">{FormErr.First_NameErr}</small>
                    </div>
                    <div className="col-6">

                      <input type="text" placeholder='Last Name*' className="form-control" value={FormData.Name} name="Last_Name" onChange={(e) => FormHandeller(e)} />
                      <small className="text-danger">{FormErr.Last_NameErr}</small>
                    </div>
                  </div>
                  <br></br>
                  <div className='row' >
                    <div className="col-md-6">

                      <input type="email" placeholder='Email *' className="form-control" value={FormData.Email} name="email" onChange={(e) => FormHandeller(e)} />
                      <small className="text-danger">{FormErr.EmailErr}</small>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder='Phone Number*' className="form-control" value={FormData.Username} name="Phone" onChange={(e) => FormHandeller(e)} />
                      <small className="text-danger">{FormErr.PhoneErr}</small>
                    </div>
                  </div>
                  <input type="hidden" name="selected" value={selected} />
                  <br></br>
                  <button type="submit" className="btn btn-outline-warning">Confirm Booking</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Book;