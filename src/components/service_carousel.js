import React, {useEffect, useState} from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import './carousel_custom.css';

export default ({service_id}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    //fetch backend api for images
    useEffect(() => {
        fetch("http://127.0.0.1:8000/images/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.images);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    // console.log(items)
    // console.log(service_id)
    // console.log(error)
    return (
        <div className="container-xl">
            {/*<h1> Responisve Carousel</h1>*/}}
            <Carousel autoPlay width="100%" dynamicHeight={true} showStatus={false}>
                {/*load only images for specific services*/}
                {isLoaded && items.map(item => {
                    if (item.sv_id === service_id) {
                        return (
                            <div>
                                <img alt={item.alt} src={`http://127.0.0.1:8000${item.image}`}/>
                                {/*render legend when title is valid*/}
                                {item.title && <p className="legend">{item.title}</p>}
                            </div>)
                    }
                })}
            </Carousel>
        </div>
    );
}
