import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

import about from "../img/about.png"

export default function NewPost() {
  return (
    <>
   <Header />
    <section className="about container" id="about">
        <div className="contentBx">
           <h2>welcome to my world</h2>
        </div>
    </section>    
   <Footer />
    </>
  )
}
