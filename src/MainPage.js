import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import  MainNavBar from './MainNavBar';
import Carousel from './Carousel';
import Div from './Div';
import Gallery from './Gallery';
import Note from './Note';
import Footer from './Footer';
import About from './About';

class MainPage extends Component{


    render(){
        return(
            <div>
                   <MainNavBar/>
   
         
                 <Carousel/>
                 <Div/>
                  <Gallery/>
                  <Note/>
              
                   <Footer/>  
              </div>
         
         
        );
    }

}
export default MainPage;