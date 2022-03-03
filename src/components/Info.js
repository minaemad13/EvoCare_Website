import{RiRoadMapLine,RiTeamLine} from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import{GiExtraTime} from 'react-icons/gi'
import{AiOutlineCar} from 'react-icons/ai'
const Info = () => {
    return ( 
    <div className='container-fluid mb-3'>
    
        <div className='row '>
            <div className='col-lg-6 col-md-12 col-sm-12 '>
            <img className='img-fluid fitimg' src={require('../resources/53516221_350771638982447_936272238821244928_n.png')} alt="Card image cap" />

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className = "row ">
                  <div className='col-lg-6 col-md-6 col-sm-6 p-5'>
                  < RiRoadMapLine className='icons mb-3' />
                
                   <h5 className='formal'>CONVENIENCE</h5>
                   

                 <p style={{ fontSize: '12px' }} className='formal'>We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                   
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 p-5'>
                  < RiTeamLine className='icons mb-3' />
                
                   <h5 className='formal'>EXPERIENCED TEAM</h5>
                   

                 <p style={{ fontSize: '12px' }} className='formal'>Our crew members are all trained and skilled and fully equiped with equipment and supplies needed that we can deliver the best results.</p>
                   
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 p-5'>
                  < GiExtraTime className='icons mb-3' />
                
                   <h5 className='formal'>GREAT VALUE</h5>
                   

                 <p style={{ fontSize: '12px' }} className='formal'>We offer multiple services at a great value to meet your needs. We offer a premium service while saving your time and money.</p>
                   
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 p-5'>
                  < AiOutlineCar className='icons mb-3' />
                
                   <h5 className='formal'>ORGANIC PRODUCTS</h5>
                   

                 <p style={{ fontSize: '12px' }} className='formal'>Our products are eco-friendly and interior products are all organic. We use less than a gallon of water with absolutely zero-waste.</p>
                   
                  </div>
              </div>

            </div>

        </div>
        

</div>
    //      <div className=''>

    // <div className="row ">
    //     <div className="col-lg-6 col-md-12 col-sm-12 ">
    //         <img className="card-img-top1" src={require('../resources/image_01-1.jpg')} alt="Card image cap" />

    //     </div>
    //     <div className="col-lg-6 col-md-12 col-sm-12 iconsf ">
    //         <div className='row p-5'>
    //             <div className='col-lg-6 col-md-6  ' >
    //                 < RiRoadMapLine className='icons' />
    //                 <br/> <br/>
    //                 <h5>CONVENIENCE</h5>
    //                 <p>We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
    //                 <br/>
    //             </div>
    //             <div className='col-lg-6 col-md-6 ' >
    //             < AiOutlineCar className='icons' />
    //                 <br/> <br/>
    //                 <h5> ORGANIC PRODUCTS</h5>
    //                 <p>Our products are eco-friendly and interior products are all organic. We use less than a gallon of water with absolutely zero-waste.</p>
    //             <br/>
    //             </div>

               
    //             <div className='col-lg-6 col-md-6  ' >
    //             <RiTeamLine className='icons' />
    //                 <br/> <br/>
    //                 <h5>EXPERIENCED TEAM</h5>
    //                 <p>Our crew members are all trained and skilled and fully equiped with equipment and supplies needed that we can deliver the best results.</p>
    //             <br/>
    //             </div>
    //             <div className='col-lg-6 col-md-6 '  >
    //             < GiExtraTime className='icons' />
    //                 <br/> <br/>
    //                 <h5>GREAT VALUE</h5>
    //                 <p>We offer multiple services at a great value to meet your needs. We offer a premium service while saving your time and money.</p>
    //             <br/>
    //             </div>

    //         </div>


    //     </div>


    // </div>
    
    
    
    
    // </ div>
    );
}
 
export default Info;