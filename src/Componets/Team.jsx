import React, { useState,useEffect } from "react";
import Hoc from "../Hocs/Hoc";
import img1 from "../Images/Team_img/img-1.jpg";
import img2 from "../Images/Team_img/img-2.jpg";
import img3 from "../Images/Team_img/img-3.jpg";
import img4 from "../Images/Team_img/img-4.jpg";
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'

const Team = () => {
  const [state] = useState({
    para: "Lorem Ipsum has been It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  });
  useEffect(() => {
    Aos.init()
   },)
  const { para } = state;
  return (
    <>
      <section>
        <div className="container">
          <h3 className="text-center py-1 px-3">Meet Our Beautiful Team</h3>
          <hr className='text-danger' />
          <div className="row py-5">
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos='fade-right'>
              <h4 className="text-center">Jordan Kk</h4>
              <div className="Team-card">
                <img className="Team-pic" src={img1} alt="" />
                <p>{para}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos='fade-left'>
              <h4 className="text-center">Harish Ahmed</h4>
              <div className="Team-card">
                <img className="Team-pic" src={img2} alt="" />
                <p>{para}</p>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos='fade-right'>
              <h4 className="text-center">Jon Dho</h4>
              <div className="Team-card">
                <img className="Team-pic" src={img3} alt="" />
                <p>{para}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos='fade-left'>
              <h4 className="text-center">HaToram RR</h4>
              <div className="Team-card">
                <img className="Team-pic" src={img4} alt="" />
                <p>{para}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hoc(Team);
