 import React, { Component } from 'react';
 import MainNavBar from './MainNavBar';
 import About from './About';
 import Footer from './Footer';


 class AboutFullPage extends Component{

    render(){
        return(

         <div>
           <MainNavBar/>
            <About/>
            <Footer/>
         </div>
          
        );

    }
 }
 export default AboutFullPage;