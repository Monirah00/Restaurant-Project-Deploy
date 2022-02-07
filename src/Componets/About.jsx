import React,{useState,useEffect} from 'react';
import Resturent_Pic from '../Images/Restaurant_About.jpg'
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'

const About = () => {
    const [state] = useState({
        Heading1:'About Us',
        Heading2:'WelCome To Our Restaurant',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendi at dignissimos perferendis? Saepe nemo eaque molestiae enim quosrepellendus, iure ea aut magni vero ut atque quod repudiandae et ullam eveniet provident culpa consequatur quia maiores! Sunt facerquis id Quisquam omnis aspernatur iure quibusdam perspiciatis temporibus temporibus doloremque assumenda totam temporibus doloremque assumenda totamtemporibus doloremque assumenda totam temporibus doloremque assumenda totam doloremque assumenda totam?'
    })
    useEffect(() => {
        Aos.init()
       },)
    const {Heading1,para,Heading2} = state
  return (
      <>
      <section>
          <div className="container py-5 px-5">
                <h3 className='text-center'>{Heading2}</h3>
                <hr className='text-danger' />
              <div className="row">
                 <div className="col-lg-6 col-sm-12"  data-aos='fade-left'>
                     <img className='AboutPic' src={Resturent_Pic} alt="" />
                 </div>
                 <div className="col-lg-6 col-sm-12"  data-aos='fade-right'>
                     <div className="About-content">
                         <h3 className='text-center  mb-3'>{Heading1}</h3>
                         <p>{para}</p>
                     </div>
                     
                 </div>
              </div>
          </div>
      </section>
      </>
  )
};

export default About;
