// import { FaSistrix } from 'react-icons/fa';
import { Link as L } from 'react-router-dom';
import { Link } from 'react-scroll';
// import { HashLink } from 'react-router-hash-link';





const Nav = () => {

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
          <a class="navbar-brand" href="#">

            <img src={require('../resources/logo.png')} alt="" class="d-inline-block img-responsive" />
            <span className='fw-bold'>Evo</span><span className='fw-bold' style={{ color: '#efb533' }}>Care</span>

          </a>
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
                <a className="nav-link" href="#">About Us</a>
              </li>

            </ul>


            <form className="d-flex" >
              {/* <button className="btn btn-sm btn-outline-warning " type="button">Book Appoinement</button> */}
              <ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <a className="nav-link" href="#">ٌRegister</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li></ul>
              {/* <button className="btn btn-sm btn-outline-warning " type="button">Book Appoinement</button> */}

            </form>




           

          </div>

        </div>
      </nav>

    </div>);
}

export default Nav;