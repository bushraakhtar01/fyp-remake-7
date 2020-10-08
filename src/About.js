import React from 'react';
import Footer from './Footer';
import MainNavBar from './MainNavBar';
import './about.css';

const About=()=>{
    
  return(
      <div>
          <MainNavBar/>
    <div className="container-fluid pt-5">
                
                <div className="row  pt-3 px-lg-5 px-md-5 px-sm-3 px-3">
                    <div className="col-lg-6 col-12 pb-lg-1 pb-md-5 pb-sm-5 pb-5 aboutdiv">
                        <h2 className="allheadings">ABOUT PEHNAWAY</h2>
                        <hr></hr>

    <p className = "contactuspara">Pehnaway is a unique, separate and collective platform to advantage females where multiple brands and their respective clothes are showcased.We provide a platform to the brands which don't have their existing outlet. To mitigate the monetary dealing, by eliminating the third-party involvement for the brands whose outlet are not exist. To  Save the time of the busy women because females mostly deprived of taking out times to rush individual outlets because of their busy routines.Pehnaway is a platform which will bring all the brands in one place. The brands whose outlet exist and the one  whose outlets do not exist.</p>
    <h3 className = "allheadings">OUR MISSION AND VISION </h3>
    <hr></hr>
    <p className = "contactuspara">We aim to earn our clients' long-term loyalty by trying to provide more than which is promised, being reliable and honest and "going further" to offer superb customized support that produces an excellent business experience.
</p>
</div>
                    <div className="col-lg-6 col-12">
                        <img className = "imageabout" src = "aboutimg.jpg"/>
                  </div>

                </div> 
            </div>
             <Footer/> 
            </div>
  );
};

export default About;