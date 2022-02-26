import { Link as L } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useState } from 'react';






const NAvpublic = () => {
  const [isAuthenticated,setIsAuthenticated]=useState(
  localStorage.getItem("token")
  )

  
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
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">

            <img src={require('../resources/logo.png')} alt="" class="d-inline-block img-responsive" />
            <span className='fw-bold'>Evo</span><span className='fw-bold' style={{ color: '#efb533' }}>Care</span>

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <L className="nav-link active" to ="/"> Home</L>
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


            <form className="d-flex" >


              {isAuthenticated?<ul>
                <button className="btn btn-sm btn-outline-warning " type="button">Book Appoinement</button> 
                <li className="nav-item">
                   <button className=" btn nav-link" >Logout</button>
                </li>
              </ul>
               :<ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <L className="nav-link" to="/register">ٌRegister</L>
                </li>
                <li className="nav-item">
                  <L className="nav-link" to="/login">Login</L>
                </li></ul>}
              {/* <button className="btn btn-sm btn-outline-warning " type="button">Book Appoinement</button> */}
              {/* <ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <L className="nav-link" to="/register">ٌRegister</L>
                </li>
                <li className="nav-item">
                  <L className="nav-link" to="/login">Login</L>
                </li></ul> */}
              {/* <button className="btn btn-sm btn-outline-warning " type="button">Book Appoinement</button> */}

            </form>




           

          </div>

        </div>
      </nav>

    </div>);
}
export default NAvpublic;