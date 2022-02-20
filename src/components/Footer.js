import { useState } from 'react';
import axios from 'axios';
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
const Footer = () => {


    const [FormData, setFormData] = useState({
        user_name: "",
        feedback: "",
    });
    const handleSubmit = () => {
        var userid = 1

        axios.post('http://127.0.0.1:8000/feedback/', {
            "user_id": userid,
            "user_name": FormData['user_name'],
            "feedback": FormData['feedback'],

        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
        // console.log(FormData);
        // console.log(FormData['First_Name']);

    }


    const FormHandeller = (e) => { // this functio that take data from form set it in state using setstate and take the value make the custum validation on it 
        if (e.target.name === "user_name") {
            setFormData({
                ...FormData,
                user_name: e.target.value
            });
            //   setFormErr({
            //     ...FormErr,
            //     First_NameErr:
            //       e.target.value.length === 0 ? "This Fieald is required" : ""
            //   });

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







    return (





<footer className=' content1 px-5'>
        <div className=" container-fluid py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-5">
                    <div className="col-lg-4 col-md-6">
                        <h6 className="">About US</h6>
                        <p className="small text-muted pe-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <span><img src={require('../resources/logo.png')} alt="" className="d-inline-block img-responsive" /> </span>
                        <span className='fw-bold'>Evo</span><span style={{ color: '#efb533' }}>Care</span>
                        {/* <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p> */}
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h6 className=" mb-3"> Services</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className='anch'>Protection Film</a></li>
                            <li><a href="#" className='anch'>Dipping</a></li>
                            <li><a href="#" className='anch'>Polish</a></li>
                            <li><a href="#" className='anch'>Nanoceramic</a></li>
                            <li><a href="#" className='anch'>Car Care</a></li>
                            <li><a href="#" className='anch'>Window Film</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h6 className="text-white mb-3">Quick links</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className='anch'>Home</a></li>
                            <li><a href="#" className='anch'>About</a></li>

                            {/* <li><a href="#"></a></li> */}
                            {/* <li><a href="#">FAQ</a></li> */}
                        </ul>
                        <ul class="list-inline">
                    <li class ="list-inline-item"><a href='#'> <FaFacebookSquare className='icon2'/></a> </li>
                    <li class ="list-inline-item"><a href='#'> <BsInstagram className='icon2'/></a> </li>
                </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h6 className="text-white mb-3">Message</h6>
                        {/* <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
                        <form action='post' onSubmit={(e) => handleSubmit(e)}>
                            <div className="input-group pe-5">
                                <div className="mb-2">
                                    {/* <label for="exampleFormControlInput1" className="form-label">Your name</label> */}
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={FormData.user_name} name="user_name" onChange={(e) => FormHandeller(e)} />
                                </div>
                                <div className="">
                                    {/* <label for="exampleFormControlTextarea1" className="form-label">Examp</label> */}
                                    <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows="3" placeholder='Leave us message' value={FormData.feedback} name="feedback" onChange={(e) => FormHandeller(e)}></textarea>
                                    <button type='submit' className='btn btn-dark' >Send</button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <hr/> */}
            {/* <div class="container-lg text-center">
                <span>Follow Us:</span>
                
                <ul class="list-inline">
                    <li class ="list-inline-item"><a href='#'> <FaFacebookSquare className='icon2'/></a> </li>
                    <li class ="list-inline-item"><a href='#'> <BsInstagram className='icon2'/></a> </li>
                </ul>
            
            </div>  */}
        </div>
        
        </footer>










    );
}

export default Footer;