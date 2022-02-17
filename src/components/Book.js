import React, { useEffect } from 'react';
import { Datepicker} from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment'
import { useLocation } from "react-router-dom";
import { FaCalendarCheck, FaMoneyCheck } from 'react-icons/fa';

import emailjs from "emailjs-com"

const today = moment();
const date = today.format('YYYY-MM-DD') + "T00:00"


const Book = () => {

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
  const userid = 1
 // const location = useLocation();

    // useEffect(() => {
    //    setPackage_price(location.state.price);
    //    setPackage_price(location.state.id);
    // }, [location]);

  useEffect(
    () => {
      axios.get('http://127.0.0.1:8000/invalid/')
        .then(function (response) {
          setInvalid(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [selected],
  );
  invalid.map((inv) => {
    //console.log(inv.Date_Time)
    myinvalid.push({ start: inv.Date_Time, end: inv.Date_Time })
  });
  const onSelectedChange = (ev) => {
    setSelected(ev.value);
  };
  //******************************************** */
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_fh510hk",
     "template_mgopfxs", e.target, 
     "user_Qdr9KNtFvRj7X19Pg2l5x").then((res)=>{console.log(res)}).catch(err=>{
          console.log(err)
     })
    axios.post('http://127.0.0.1:8000/book', {

      "Date_Time": selected,
      "User_Id": userid,
      "First_Name": FormData["First_Name"],
      "Last_Name": FormData["Last_Name"],
      "Email": FormData["Email"],
      "Phone": FormData["Phone"],
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(FormData);
    // console.log(FormData['First_Name']);
  };

  const FormHandeller = (e) => {
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
  
  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1 className='text-center' style={{ color: "orange" }}>Date and Time</h1>
      <div className='m-5' style={{fontSize:"20px"}}>
        <Datepicker
          controls={['calendar', 'timegrid']}
          min={date}
          max="2222-12-11T00:00"
          stepMinute={60}
          minTime="10:00"
          maxTime="22:00"
          display='inline'
          returnFormat='iso8601'
          theme="material-dark"
          themeVariant='dark'
          invalid={myinvalid}
          onChange={onSelectedChange}
        />
      </div>
      <br></br>
      <div className="container ">
        <div className='row'>
          <div className='col-6'>
            <div className='row' style={{ marginTop: "50px" }}>
              <FaCalendarCheck width={200} height={50} color='orange' />
              <br></br>
              <p style={{ color: 'orange' }}>Booking Date and Time </p>
              <h3 style={{ color: "orange" }}> {selected}</h3>
            </div>
            <div className='row' style={{ marginTop: "50px" }}>
              <FaMoneyCheck width={200} height={50} color='orange' />
              <br></br>
              <p style={{ color: 'orange' }}>Reservation Tax</p>
              <h3 style={{ color: 'orange' }}>50 EGP</h3>
            </div>
          </div>
          <div className='col-6' style={{ backgroundColor: "black", height: "400px" }}>
            <h3 style={{ color: "white", marginTop: "20px" }}>Please input your <span style={{ color: "orange" }}>contact details</span></h3>
            <div style={{ marginTop: "50px" }}>

              <form onSubmit={(e) => handleSubmit(e)}>
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
                <input type="hidden" name="selected" value={selected}/>
                <br></br>
                <button type="submit" className="btn btn-outline-warning">Conferm Booking</button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Book;