import React from 'react'
import About from '../Componets/About'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'

const Hoc = (PagesComponent) => {
    return function WithPages(){
        return (
            <div>
                <Navbar />
                <Header />
                <About />
                <PagesComponent />
                <Footer />
                
            </div>
        )

    }
 
}

export default Hoc