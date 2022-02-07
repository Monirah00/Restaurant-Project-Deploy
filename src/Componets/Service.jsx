import React,{useEffect} from "react";
import Hoc from "../Hocs/Hoc";
import Sdata from '../ServiceData/Sdata'
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'

const Service = () => {
  useEffect(() => {
    Aos.init()
   },)
 
  return (
    <>
      <section>
        <div className="container">
          <div className="py-5 px-5">
            <h4 className="text-center py-2 px-2">OUR SERVICE</h4>
            <hr className="text-danger" />
          </div>
                   <div className="row">
                     {
                       Sdata.CardData.map((item,index) => {
                         return(
                           <div className="col-lg-4 col-sm-12" key={index} data-aos='flip-left'>
                             <div className="card">
                               <div className="card-body text-center">
                                 <span className="icons">{item.icons}</span>
                                 <div className="card-title py-2">
                                   <h4>{item.heding}</h4>
                                 </div>
                                 <div className="card-text">
                                   <p>{item.para}</p>
                                 </div>
                               </div>
                             </div>
                           </div>
                         )
                       })
                     }
                   </div>
        </div>
      </section>
    </>
  );
};

export default Hoc(Service);
