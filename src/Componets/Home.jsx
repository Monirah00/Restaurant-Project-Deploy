import React,{useEffect} from "react";
import Hoc from "../Hocs/Hoc";
import Data from "../Bdatas/Bdata";
import { Link } from "react-router-dom";
import HomePages2 from "./HomePages2";
import HomePages3 from "./HomePages3";
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init()
   },)
  return (
    <>
      <section>
        <div className="container">
          <h3 className="text-center">BreckFast Item</h3>
          <hr className="text-danger" />
          <div className="row py-5 px-5">
            {Data.CardData.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index} data-aos="flip-left">
                  <div className="Card">
                    <img className="Sdata pb-3" src={item.img} alt="" />

                    <h6>
                      <s>{item.Discount}</s>
                    </h6>
                    <h5>{item.Price}</h5>
                    <Link
                      className="p-1 text-danger"
                      to={`/Details/${index + 1}`}
                    >
                      Order NoW
                    </Link>
                    <Link
                      className="p-1 text-danger"
                      to={`/Details/${index + 1}`}
                    >
                      DeTaiLs
                    </Link>
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        <HomePages2 />
        <HomePages3 />

        </div>
      </section>
    </>
  );
};

export default Hoc(Home);
