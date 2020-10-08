
//import react libraries
import React, { Component } from 'react';

// import { BrowserRouter, Route, Link, Router, browserHistory } from "react-router-dom";

import {Link} from "react-router-dom";

import { withRouter } from "react-router-dom";
import Khaadi from './Khaadi';




class AdminUI extends Component{

componentDidMount(){
}
render(){

  if(sessionStorage.getItem("userData")){
    return(

      <div>
    
      <div className="ui visible thin left demo vertical inverted sidebar labeled icon menu"
       style={{color: '#000000'}}> 
        <img src="adminlogo.png" alt="Avatar" style={{width: '100px', marginTop: '30px'}} />
        <h3 style={{color:'#424242'}}>Admin</h3>
    
        <h5 style={{marginTop:'-10px',color:'#cfd8dc'}}>Web Developer</h5>
        <hr ></hr>
        {/* <Link to="/" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
       Home</Link> */}
        {/* <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
          {/*  */}
        {/* Khaadi
        </a> */} 
    
        <Link to="/khaadi" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
        Khaadi</Link>
        <Link to="/nishaat" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
        Nishaat</Link>
        <Link to="/gulahmed" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
        GulAhmed</Link>
      
        <Link to="/sanasafinaz" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
        Sana Safinaz</Link>
        <Link to="/alkaram" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
        Alkaram</Link>
       
            
            <Link to="/sapphire" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
         Sapphire</Link>
         <Link to="/userqueries" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
         User Queries/Comments</Link>
      
           
    </div>
    
    </div>
    );
    

  }

  return(<div></div>)

}
}

export default (AdminUI);