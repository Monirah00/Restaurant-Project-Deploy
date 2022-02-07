import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Data from "../Ldata/Ldata";
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'

const HomePages3 = () => {
  useEffect(() => {
    Aos.init()
   },)
  return (
    <>
      <h3 className="text-center">Dinner Item</h3>
      <hr className="text-danger" />
      <div className="row py-5 px-5">
        {Data.CardData.map((item, index) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index} data-aos='fade-right'>
              <div className="Card">
                <img className="Sdata pb-3" src={item.img} alt="" />

                <h6>
                  <s>{item.Discount}</s>
                </h6>
                <h5>{item.Price}</h5>
                <Link className="p-1 text-danger" to={`/Details/${index + 1}`}>
                  Order NoW
                </Link>
                <Link className="p-1 text-danger" to={`/Details/${index + 1}`}>
                  DeTaiLs
                </Link>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePages3;
