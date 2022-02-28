import React, {useEffect, useState} from 'react';
import "./packages.css";
import PackageCard from "./package-card";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Packages(sv_id) {
    // const [packages, setPackages] = useState({})
    //
    //  useEffect(() => {
    //
    //     axios.get(`http://127.0.0.1:8000/packages/${sv_id}`)
    //     .then((res) => setPackages(res.data))
    //     .catch((err) => console.log(err))
    //
    //   }, [])
    // console.log(sv_id.service_id)
    const packs= [{pck_price:4000,pck_name:"Glossy protection film"},{pck_price:6500,pck_name:"Matte protection film"}]
    return (
        <div className="pricing6 py-5 bg-light">
            <br/><br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h3 className="mb-3">Packages available</h3>
                        <h6 className="subtitle font-weight-normal">With EvoCare we offer 100% satisafaction</h6>
                    </div>
                </div>
                <div className="row mt-4">

                    {packs.map((data)=>{
                return(
                    <PackageCard packs = {data} service = {sv_id.service_id}/>
                )
            })}

                </div>
            </div>
        </div>
    )}

export default Packages;