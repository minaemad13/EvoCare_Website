import React, {useEffect, useState} from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import './carousel_custom.css';

export default ({service_id}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);
    //fetch backend api for images
    useEffect(() => {
        fetch("http://127.0.0.1:8000/images/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setImages(result.images);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    // console.log(images)
    // console.log(service_id)
    // console.log(error)
    return (
        <div className="container-fluid">
            {/*<h1> Responisve Carousel</h1>*/}
            <Carousel autoPlay width="100%" dynamicHeight={true} showStatus={false} showThumbs={false}>
                {/*load only images for specific services*/}
                {images && images.filter(image => image.sv_id === service_id).map(image => {
                        return (
                            <div>
                                {image.image &&<img  alt={image.alt} src={`http://127.0.0.1:8000${image.image}`}/>}
                                {/*render legend when title is valid*/}
                                {image.title && <p className="legend">{image.title}</p>}
                            </div>)
                })}
            </Carousel>
            <br/>
        </div>
    );
}
