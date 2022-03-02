import { Link as L } from 'react-router-dom';
import { Link } from 'react-scroll';
import jwt from "jwt-decode"
import { useEffect, useState } from 'react';
import axios from "axios";
// import { HashLink } from 'react-router-hash-link';

// import { HashLink as Linkh } from 'react-router-hash-link';








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
        console.log(response.data.First_Name)
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



  
  const handelScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  }
  return (
    <div className='fluid-container'>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark static-top">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">

            <img src={require('../resources/logo.png')} alt="" class="d-inline-block img-responsive" />
            <span className='fw-bold'>Evo</span><span className='fw-bold' style={{ color: '#efb533' }}>Care</span>

          </Link>
          <button className="navbar-toggler" id ="bt"type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
             
                <L className="nav-link active" to ="/" onClick={scrollTop}> Home</L>
              </li>
        
              <li className="nav-item">
              <Link onClick={() => handelScroll}
                  to="services"
                  activeClass="active"

                  offset={-70}

                  duration={500}
                  spy={true}

                  className='nav-link'
                >
                  Services
                </Link>

              

              </li>
              <li className="nav-item">
                <L  className="nav-link" to={"/about"}>About Us</L>
              </li>

            </ul>


            <form className="" >


              {isAuthenticated?
              <> 
              <ul className='navbar-nav mx-auto'>

      
                <li className="nav-item " onClick={handellogout} >
                 <L className="nav-link" to="/login">Logout</L>
                </li>
                <li className="nav-item  ">
                <L className="nav-link "to ="/profile" >{name} </L>
                </li>
              </ul ></>
               :<ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <L className="nav-link" to="/register">ٌRegister</L>
                </li>
                <li className="nav-item">
                  <L className="nav-link" to="/login">Login</L>
                </li></ul>}

            </form>




           

          </div>

        </div>
      </nav>

    </div>);
}
export default NAvpublic;