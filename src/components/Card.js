import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import React from "react";
const Card = ({ data }) => {
  //console.log(data)
  return (<>

    <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card border-warning border-2 mb-5 " >


        <img className="card-img-top im" src={require(`../resources/${data.source}`)} alt="Card image cap" />
        {/* <div className="middle" id ="show">
<button className="btn btn-warning rounded-pill "> Show More</button>
</div> */}
        <div className="card-body bg " >
          <h5 className="mb-3 fw-bold">{data.title}</h5>

          <div>
            <Link to={`${data.url}`}>
            <button className="btn btn-outline-warning rounded-pill "> Show More</button>
           </Link>
            </div>
        </div>



        {/* <div className="card-body bg">
    
  
    <a href="#" className="btn btn-warning">Show More</a>
  </div> */}
      </div>


    </div>

  </>);
}

export default Card;