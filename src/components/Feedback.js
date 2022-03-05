import React, { useState ,useEffect} from "react";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import {IoChatbubblesOutline} from 'react-icons/io5'
import axios from "axios";
    
    
const Data = [{ op: "I just got a deluxe wash package and interior shampoo and was blown away by the quality and detail of the service. I couldn't be happier and have recommend friends and family members to stop by for the best hand car wash in Portland.", saheb: "DOTTI NEWMAN", car: "Audi Q5",}, { op: "I think Auto Spa is the best car washers ever. Love the price, convenience and customer service. When I have time and want to vacuum myself, it is easy and cheap. They provide towels and spray to wash the windows and I wash my dash. Thanks so much.", car: "Nissan Titan X5", saheb: "DAVID MAGNUS" }, { op: "Finally a car wash that does pay attention to the detail. I have a little extra time and money and I let them do the full detail and it always has turned out great. I use them all the time and now with pollen season upon us, they will be seeing my car even more often.", car: "Toyota Avensis", saheb: "JOSH WILLIAMS", }]

const Feedback = () => {
    var item = Data[Math.floor(Math.random() * Data.length)];
    const [feed, setFeed] = useState(item)
    const [feed2, setFeed2] = useState(item)


    useEffect(() => {

        axios.get('http://127.0.0.1:8000/feedbacks/')
        .then((res) => setFeed2(res.data))
        .catch((err) => console.log(err))
          
      }, [])

   // console.log(feed2)
   // console.log()






    const movenext = (feed) => {
        let k = Data.indexOf(feed)
       // console.log(k)
       // console.log(Data.length)
        if (k < Data.length - 1) {
            k++
        }
        else {
            k = 0
        }
        setFeed(Data[k])

    }
    const movepast = (feed) => {
        let k = Data.indexOf(feed)
        if (k > 0) {
            k--
        }
        else {
            k = Data.length - 1
        }
        setFeed(Data[k])
    }


    return (<>
        <div className="container-fluid testbg">
            <div className="text-center p-3 ">
                <div className="m-3"><h2>TESTIMONIALS</h2>
                    <hr className="hr" />
                </div>
                <div className="them_colormy-2 font"> our customers love us</div>
                <div className="px-5 my-5">
                    <p className=" margin">
                        “ {feed.op} ”
                    </p>
                </div>

                <div className="mb-4">
                    <button className="btn"
                        onClick={() => movepast(feed)}>
                             <AiOutlineDoubleLeft className="arrow"/>
                        
                    </button>


                    <span className="mx-5" ><IoChatbubblesOutline style={{color:'#efb533',fontSize:'45px'}}/></span>


                    <button className="btn"
                        onClick={() => movenext(feed)}
                    >
                   <AiOutlineDoubleRight className="arrow"/>
                    </button>
                </div>
                <div>
                    <p>{item.saheb}</p>
                </div>


            </div>
        </div>
    
    </> );
}
 
export default Feedback;