import React from 'react';
import axios from 'axios';
import './adminui.css'
import {Link} from "react-router-dom";

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[{}]
    }}

   async componentDidMount(){
    if(!sessionStorage.getItem("userData")){
        
      this.props.history.push('/login')
  }else{
  const url="http://localhost/order/orderapi/post/read.php";
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
 this.setState({orders:data.data});

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
          <h1 className=" pt-5">Orders Details</h1>
          <hr></hr>
        <div className="table-responsive tb">
        <table className="table table-striped table-dark">
        <thead>
          <tr>
          <td colSpan='1'>Order Id</td>
            <td>User Name</td>
            <td>User Email</td>
            <td>User Address</td>
            <td>User Payment</td>
            <td> Code</td>
            <td> Brand</td>
            <td> Price</td>
            <td> Color</td>
            <td> Size</td>
            <td>Sale Price</td>
            <td>Quantity</td>


          </tr>
        </thead>
        <tbody>
          {this.state.orders.map(order => (
          <tr>
           
            <td>{order.order_id}</td>
            <td>{order.firstName}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.payment}</td>
            <td>{order.prod_code}</td>
            <td>{order.prod_brand}</td>
            <td>{order.prod_price}</td>
            <td>{order.prod_color}</td>
            <td>{order.prod_size}</td>
            <td>{order.prod_saleprice}</td>
            <td>{order.quantity}</td>




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
export default Order;