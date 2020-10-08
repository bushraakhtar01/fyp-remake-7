import React from 'react';
import axios from 'axios';
import './adminui.css'
import {Link} from "react-router-dom";

class query extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queries:[{}]
    }}

   async componentDidMount(){
    if(!sessionStorage.getItem("userData")){
        
      this.props.history.push('/login')
  }else{
  const url="https://pehnaway67.000webhostapp.com/api2/post/read.php";
  const response=await fetch(url
    ,
    {
      method: 'GET',
    // mode: "no-cors",
    //  headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // }
  }

);
  const data= await response.json();
  // console.log(response);
 this.setState({queries:data.data});

}
} 
render(){
 
  return(
    <div className="container-fluid admincontainer">
              
    <div className="row">
    <div className="col-lg-2 col-md-12 col-sm-12 col-12 bg-dark adminsidenav">
    <p className="adminclose" onClick={this.close}>X</p>
    <Link to='/home'><img src="adminlogo.png" className="adminpic"></img></Link>

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
  
  
          <div className="col-lg-10">
          <h1 className=" pt-5">User Queries/ Comments</h1>
          <hr></hr>
        <div className="table-responsive tb">
        <table className="table table-striped table-dark">
        <thead>
          <tr>
          <td colSpan='1'>Id</td>
            <td>User</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Date</td>
            <td>Queries</td>
          </tr>
        </thead>
        <tbody>
          {this.state.queries.map(querie => (
          <tr>
           
            <td>{querie.id}</td>
            <td>{querie.uname}</td>
            <td>{querie.email}</td>
            <td>{querie.phone}</td>
            <td>{querie.date_query}</td>
            <td>{querie.comments}</td>



          </tr>
          )
          )}
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
        </div>
      </div>
    </div>
    </div>
  
  )
}


}
export default query;