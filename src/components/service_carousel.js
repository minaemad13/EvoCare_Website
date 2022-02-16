import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default ({ service_id }) => {
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://127.0.0.1:8000/images/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.images);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
    console.log(items)
    console.log(service_id)
  return(
      <div className="">
        <Carousel autoPlay>
          {items.map(item => {
              if (item.sv_id === service_id){
                  return(
                      <div>
            <img alt=""  src={`http://127.0.0.1:8000${item.image}`}/>
            <p className="legend">{item.title}</p>
          </div>)
              }
        })}
        </Carousel>
      </div>
  );
}
