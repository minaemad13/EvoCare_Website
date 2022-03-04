import React, { useEffect, useState } from 'react';
import "./packages.css";
import PackageCard from "./package-card";
import axios from "axios";
function Packages(sv_id) {
    const [error, setError] = useState(null);
    const [packs, setPacks] = useState([])
    useEffect(() => {
            fetch(`http://127.0.0.1:8000/packages/${sv_id.service_id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setPacks(result.packages);
                    },
                    (error) => {
                        setError(error);
                    }
                )
        }, [])
    //  useEffect(() => {
    //
    //     axios.get(`http://127.0.0.1:8000/packages/${sv_id.service_id}`)
    //     .then((res) => setPacks(res.data))
    //     .catch((err) => console.log(err))
    //
    //   }, [])
    // console.log(sv_id.service_id)
    // const packs= [{pck_price:4000,id: 1,pck_name:"Glossy protection film"},{pck_price:6500,id: 2,pck_name:"Matte protection film"}]
    return (
        <div className="pricing6 py-5">
            <div className="container cont" >
                <div className=" text-center">
                    <br></br>
                    <h3 className="mb-3 font-bold text-white" style={{ fontWeight:"bold" }} >PACKAGES AVAILABLE</h3>
                    <hr className="hr " />
                    <p className="font mb-5">With EvoCare we offer 100% satisafaction</p>

                </div>

                <div className="row mt-4">

                    {packs.map((data) => {
                        return (
                            <PackageCard packs={data} service={sv_id.service_id} />
                        )
                    })}

                </div>
            </div>
        </div>

    )
}

export default Packages;