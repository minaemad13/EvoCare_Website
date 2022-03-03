import { useState } from 'react';
import axios from 'axios';
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode'
const Footer = () => {

    const [FormData, setFormData] = useState({
        user_name: "",
        feedback: "",
    });


    const handleSubmit = (e) => {
        const token = localStorage.getItem("token");
        const user = jwt(token);
        const user_id = user.id
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/feedback/', {
            "user_id": user_id,
            "user_name": FormData['user_name'],
            "feedback": FormData['feedback'],

        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
                console.log(error);
            });
            setFormData(
                {  user_name: "",
                feedback: "",}
            )
        
        


    }


    const FormHandeller = (e) => {
        if (e.target.name === "user_name") {
            setFormData({
                ...FormData,
                user_name: e.target.value
            });
        }
        if (e.target.name === "feedback") {
            setFormData({
                ...FormData,
                feedback: e.target.value
            });
            //   setFormErr({
            //     ...FormErr,
            //     First_NameErr:
            //       e.target.value.length === 0 ? "This Fieald is required" : ""
            //   });

        } 
    }
    const scrollTop=()=>{
        window.scrollTo(0, 0)
    
      }

    return (<>
<<<<<<< HEAD
        <footer className="content1 p-5" >
=======
        <footer className="content1 p-5 ">
>>>>>>> bb014b311bdf7e964118d2d3908547e70d41a739
            <div className='container-fluid  ' >
                <div className="row pt-3">

                    <div className="col-lg-4 col-md-8 col-sm-8 col-8">
                        <h6 className="">About US</h6>
                        <p className="small text-muted pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipisicing elit.</p>
                       <Link to = "/" className='logo' onClick={scrollTop}>
                        <span><img src={require('../resources/logo.png')} alt="" className="d-inline-block img-responsive" /></span>
                        <span className='fw-bold'>Evo</span><span style={{ color: '#efb533' }}>Care</span>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                        <h6 className=" mb-3"> Services</h6>
                        <ul className="list-unstyled small">
                            <li><Link to="/protectionfilm" className='anch'>Protection Film</Link></li>
                            <li><Link to="/dipping" className='anch'>Dipping</Link></li>
                            <li><Link to="/dipping" className='anch'>Polish</Link></li>
                            <li><Link to="/nano" className='anch'>Nanoceramic</Link></li>
                            <li><Link to="/car" className='anch'>Car Care</Link></li>
                            <li><Link to="/windowfilm" className='anch'>Window Film</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                        <h6 className="text-white mb-3">Quick links</h6>
                        <ul className="list-unstyled small">
                            <li ><Link to="/" className='anch'>Home</Link></li>
                            <li ><Link to="/about" className='anch'>About</Link></li>
                        </ul>
                        <ul class="list-inline">
                            <li class="list-inline-item"><Link to ={{pathname:'https://www.facebook.com/EVO.CarsCare/'}} target="_blank"><FaFacebookSquare className='icon2' /></Link> </li>
                            <li class="list-inline-item"><Link to={{ pathname: "https://www.instagram.com/evocare.egy/" }} target="_blank" > <BsInstagram className='icon2' /></Link> </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-8 col-8 ">
                        <h6 className="text-white mb-3">Message</h6>
                        <form method='POST' onSubmit={(e)=>handleSubmit(e)}>
                            <div className="input-group ">
                                <div className="mb-2">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={FormData.user_name} name="user_name" onChange={(e) => FormHandeller(e)} />
                                </div>
                                <div className="">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" cols="20" placeholder='Leave us message' value={FormData.feedback} name="feedback" onChange={(e) => FormHandeller(e)}></textarea>
                                    <button type='submit' className='btn btn-dark mt-1' >Send</button>
                                </div>


                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </footer>
    </>);
}

export default Footer;