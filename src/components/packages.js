import React, {useEffect, useState} from 'react';
import "./packages.css";
import PackageCard from "./package-card";
import axios from "axios";
function Packages(sv_id) {
    // const [packs, setPacks] = useState({})
    //
    //  useEffect(() => {
    //
    //     axios.get(`http://127.0.0.1:8000/packages/${sv_id}`)
    //     .then((res) => setPackages(res.data))
    //     .catch((err) => console.log(err))
    //
    //   }, [])
    // console.log(sv_id.service_id)
    const packs= [{pck_price:4000,id: 1,pck_name:"Glossy protection film"},{pck_price:6500,id: 2,pck_name:"Matte protection film"}]
    return (
        <div className="pricing6 py-5">
            <div className="container cont">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h3 className="mb-3 font-bold text-white">Packages available</h3>
                        <h6 className="subtitle  text-light font-weight-normal">With EvoCare we offer 100% satisafaction</h6>
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