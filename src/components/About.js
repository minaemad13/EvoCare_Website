import React from 'react';
import "./About.css";
import 'bootstrap/dist/css/bootstrap.css';
// import Logo from "../media/bg.png";
import Car from "../media/manager.jpeg"
import Staff from "../media/staff.jpeg"
// import { Link } from 'react-router-dom'; 
function About() {
    return (


        <div className="bg py-5 text-center" id='body'>


            <div className="container py-5" style={{backgroundColor:'transparent'}}>
                <div className="mb-3" >
                    <div className="row g-0" >
                        <div className="col-md-4">
                            <img src={Car} className="card-img" alt="img" />
                        </div>
                        <div className="col-md-8" >
                            <div className="card-body"  >
                                <h2 className=" text-center mb-2">About Us</h2>
                                <hr className="hr"></hr>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="container py-5" style={{backgroundColor:'transparent'}}>
                <div className="mb-3">
                    <img src={Staff} className="card-staff" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
            </div>

        </div>


    );
}
export default About;