import React,{Component} from "react";
import Khaadi from "./Khaadi";
import AdminUI from "./AdminUI";
import Login from "./Login";
import {Link} from 'react-router-dom';
import './adminui.css';
import TopNav from './TopNav';




class Home extends Component{
    componentDidMount(){
        if(!sessionStorage.getItem("userData")){
            
            this.props.history.push('/mainpage')
        
        }
    }

    close(){
      const a=document.getElementsByClassName('adminsidenav')[0]
      a.style.display='none';
      const b=document.getElementById('imagecolid');
      b.style.display='block';
    
    }
    
    render(){
   


       
            return(
                <div>
                       
                       <div className="container-fluid admincontainer">
                           
      <div className="row">
        <div className="col-lg-2 col-md-12 col-sm-12 col-12 bg-dark adminsidenav" >
            <p className="adminclose" onClick={this.close}>X</p>
          <img src="adminlogo.png" className="adminpic"></img>
          <h2 className="adminhead">Admin</h2>
          <p className="webhead">Web Developer</p>

          <ul className="adminsidenavlist">
           <Link to="/alkaram"><li>
              Alkaram
            </li></Link> 
            <hr></hr>
           <Link to="/gulahmed"><li>
              Gul Ahmed
            </li></Link> 
            <hr></hr>

           <Link to="/khaadi"><li>
              Khaadi
            </li></Link> 
            <hr></hr>

           <Link to="/nishaat"><li>
              Nishat
            </li></Link> 
            <hr></hr>

           <Link to="/sapphire"><li>
              Sapphire
            </li></Link> 
            <hr></hr>

           <Link to="/sanasafinaz"><li>
              Sana Safinaz
            </li></Link> 
            <hr></hr>

           <Link to="/userqueries"><li>
              User Queries/Comments
            </li></Link> 
            <hr></hr>
            <Link to="/order"><li>
    Order Details
    </li></Link> 
    <hr></hr>
          
          </ul>
        </div>
        <div className="col-lg-10  adminpage" id="imagecolid">
         <h1 className="adminheading pt-lg-5 pt-md-5 pt-sm-5 pt-4 px-5">Welcome to Admin Pannel</h1>
         <hr></hr>
         <h2 className="adminparagraph px-5 pt-0">View all the brands available to pehnaway, their respective data and see user queries.</h2>
         <div className="row px-lg-4 px-md-4 pt-lg-5">
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="khaadicoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
         <h5 className="card-title">KHAADI</h5>
            <hr></hr>
            <Link to="/khaadi"><button className="btn btn-primary adminhomebuttons">Show Records</button></Link>
        </div>
      </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="alkaramcoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">ALKARAM</h5>
          <hr></hr>
          
         <Link to='/alkaram'><button className="btn btn-primary adminhomebuttons">Show Records</button></Link>
        </div>
      </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="nishatcoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">NISHAT</h5>
          <hr></hr>
         <Link to="/nishaat"><button className="btn btn-primary adminhomebuttons">Show Records</button></Link> 
        </div>
      </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="sapphirecoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">SAPPHIRE</h5>
          <hr></hr>
          <Link to='/sapphire'><button className="btn btn-primary adminhomebuttons">Show Records</button></Link>
        </div>
      </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="gulcoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">GULAHMED</h5>
          <hr></hr>
         <Link to='/gulahmed'><button className="btn btn-primary adminhomebuttons">Show Records</button></Link> 
        </div>
      </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="sanasafinazacoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">SANA SAFINAZ</h5>
          <hr></hr>
          <Link to='/sanasafinaz'><button className="btn btn-primary adminhomebuttons">Show Records</button></Link> 
        </div>
      </div>
      
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="userqueriescoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">ORDER DETAILS</h5>
          <hr></hr>
          <Link to='/order'><button className="btn btn-primary adminhomebuttons">Show Records</button></Link> 
        </div>
      </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="card admincard pt-3 mx-4">
        <img src="userqueriescoveradminpannel.jpg" className="card-img-top" alt="..." />
        <div className="card-body admincardbody">
          <h5 className="card-title">USER QUERIES</h5>
          <hr></hr>
          <Link to='/userqueries'><button className="btn btn-primary adminhomebuttons">Show Records</button></Link> 
        </div>
      </div>
             </div>
             
         </div>
        </div>
      </div>

    </div>
           
                </div>
            )
        
   
    }
}


export default Home;