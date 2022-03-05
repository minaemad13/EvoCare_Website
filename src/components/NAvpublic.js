import { Link as L } from 'react-router-dom';
import { Link } from 'react-scroll';
import jwt from "jwt-decode"
import { useEffect, useState } from 'react';
import axios from "axios";
import {IoPersonCircleSharp} from 'react-icons/io5'
import {IoHome} from 'react-icons/io5'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {RiTeamFill} from "react-icons/ri"
// import { HashLink } from 'react-router-hash-link';

// import { HashLink as Linkh } from 'react-router-hash-link';

import { HashLink } from 'react-router-hash-link';






const NAvpublic = ({isAuthenticated,setIsAuthenticated}) => {
  const [name,setName] = useState("")

  useEffect(  // get the booked date from database when the value of selected date changed useing react hook on update  
    () => {
      if (isAuthenticated){
      const token= localStorage.getItem("token");
      const user = jwt(token);
      const user_id=user.id 
    
      axios
      .get(`http://127.0.0.1:8000/getuser/${user_id}`)
      .then(function (response) {
        //console.log(response.data.First_Name)
        setName(response.data.First_Name)
      })
      .catch(function (error) {
        console.log(error);
      });}
    },
    [isAuthenticated],
  );

  const scrollTop=()=>{
    window.scrollTo(0, 0)

  }

  const handellogout = ()=>{
    localStorage.removeItem('token');
    setIsAuthenticated(null)
  }



  

  return (
    <div className='fluid-container'>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark static-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">

            <img src={require('../resources/logo.png')} alt="" className="d-inline-block img-responsive" />
            <span className='fw-bold'>Evo</span><span className='fw-bold' style={{ color: '#efb533' }}>Care</span>

          </Link>
          <button className="navbar-toggler" id ="bt"type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
             
                <L className="nav-link active" to ="/" onClick={scrollTop}> <IoHome style={{color:"#efb533"}}/> Home</L>
              </li>
        
              <li className="nav-item">

                <HashLink 

                  className='nav-link'
  to="/#services"
  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
>
  <MdOutlineMiscellaneousServices style={{color:"#efb533"}}/>
  Services
</HashLink>
              </li>
              <li className="nav-item">
                <L  className="nav-link" to={"/about"}> <RiTeamFill style={{color:"#efb533"}}/>About Us</L>
              </li>

            </ul>


            <form className="" >


              {isAuthenticated?
              <> 
              <ul className='navbar-nav mx-auto pe-3'>
              
              <li className="nav-item  ">
                
                <L className="nav-link "to ="/profile" >
           {name}       <IoPersonCircleSharp style={{color:"#efb533"}}/></L>
                </li>
      
              

                 <L className="nav-link" to="/login">
                <li className="nav-item " onClick={handellogout} >

                 <button type="button" className="btn btn-outline-warning btn-sm">Logout</button>
                </li></L>
               
              
              </ul ></>
               :<ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <L className="nav-link" to="/register">ٌ    <button type="button" className="btn btn-outline-warning btn-sm">Register</button></L>
                </li>
                <li className="nav-item">
                  <L className="nav-link" to="/login">    <button type="button" className="btn btn-outline-warning btn-sm">Login</button></L>
                </li></ul>}

            </form>
          </div>

        </div>
      </nav>

    </div>);
}
export default NAvpublic;