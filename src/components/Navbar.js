import {FaSistrix} from 'react-icons/fa';
// import Logo from '../resources/2019_09_17_16_43_IMG_1247.PSD.svg'
const Nav = () => {
    return ( <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
    {/* <Logo/> */}

      <img src={require('../resources/logo.png')} alt=""  class="d-inline-block img-responsive"/> 
      
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
  
          
      <form className="d-flex" >
    <button className="btn btn-sm btn-outline-warning " type="button">Book Appoinement</button>
  </form>
  
  
  
    
      {/* <div className='mx-3'><FaSistrix className='search'/></div> */}
 
    </div>

  </div>
  </nav>  
    
    </div> );
}
 
export default Nav;