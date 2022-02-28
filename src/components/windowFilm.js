import React from 'react';
import "./windoFilm.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Carousel from "./service_carousel";
import Packages from "./packages";

function windowFilm() {
    return (
        <div className="bg py-5 text-center"id='body'>

        <div className="container cont py-5">
            <Carousel service_id={8} />

            <h2 className=" text-center mb-2">Window Film</h2>
            <hr className="hr"></hr>
            <div className="my-3 px-5 mx-5">
                <p className="font">Save time and money</p>
                <p className="my-3 px-5 mx-5 ">
                    We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours  <br />
                    Our goal is to provide our customers with the friendliest, most convenient hand car wash experience possible.
                </p>
            </div>
        </div>

        <Packages service_id={8} />

    </div>




    );
}

export default windowFilm;
