import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
// import Footer from './footer';
import { Link } from "react-router-dom";
import { UserData } from './services/UserData';

import MainNavBar from './MainNavBar';
import Footer from './Footer';
import ImgView from './ImgView';

import './UI.css';
import './Checkout.css'
import MainPage from './MainPage';

class SignUp extends Component {
 
    constructor(props){
        super(props)
            this.state={
              order:[{}],
              user:'',
              grandtotal:'',
              address:'',
              payment:'',
              items:''
            }
        this.confirm=this.confirm.bind(this)
    }
    componentDidMount(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
 
        if(sessionStorage.getItem('user')){

           var a=JSON.parse(sessionStorage.getItem('user'))
           this.setState({
               user:a
           })


           axios.get(`http://localhost/order/orderapi/post/read_single.php?id=${a.id}`)
           .then(response=>{this.setState({
               order:response.data.data
           },()=>{
               for(var a in this.state.order){
                   this.setState({ 
                       items:(this.state.items)+a
                    })

                    console.log(this.state.order)
               }

              
            
            var firstname=document.getElementsByClassName('checkfn')[0]
            firstname.value=this.state.user.firstName;

            var lastname=document.getElementsByClassName('checkln')[0]
            lastname.value=this.state.user.lastName;
            
            var email=document.getElementsByClassName('checkem')[0]
            email.value=this.state.user.email;
           })

    
        })

        }

     
     
    }

    changeHandler= e => {
        this.setState({[e.target.name]: e.target.value},()=>console.log(this.state.payment))
        
    }

confirm(e){        
        e.preventDefault()
        var formData = new FormData();
        formData.append("id", this.state.user.id);
        formData.append("address", this.state.address);
        formData.append("payment", this.state.payment);

    

     console.log(this.state.address)



        const config = {
            headers: { 
                'content-type': 'multipart/form-data'
            }
        }

        
        var a = document.getElementsByClassName("loadercheck")[0];
                        a.style.display = "block";
                        var b = document.getElementsByClassName("confirmbtn")[0];
                        b.style.display = "none";
                        if( ((this.state.payment!==""&& this.state.address!=="")&&(this.state.address!==""||this.state.payment!==""))){
                            axios.post('http://localhost/order/orderapi/post/update.php',formData,config)
                            .then(response=> {  showLoader()
                                    function showLoader() {
                                        setTimeout(function () {
                                            var a = document.getElementsByClassName("loadercheck")[0];
                                            a.style.display = "none";
                                            var b = document.getElementsByClassName("confirmbtn")[0];
                                            b.style.display = "block";
                                            // var r = document.getElementsByClassName('response')[0]
                                            // r.style.display = "none"
                    
                                            
                                        }, 3000);
                    
                                        var interval=setInterval(showResponse,3000)
                                        function showResponse(){
                                            
                                                var r = document.getElementsByClassName('responsecheck')[0]
                                                r.style.display = "block"
                        
                                            }
                                        var that=this;
                                        setTimeout( ()=>{
                                            clearInterval(interval)
                                            var r = document.getElementsByClassName('responsecheck')[0]
                                                r.style.display = "none"
                                                window.location.reload(false)
                                                // history.push('/mainpage')
                                         
                                            },7000)
                                            var firstname=document.getElementsByClassName('checkfn')[0]
                                            firstname.value='';
                                
                                            var lastname=document.getElementsByClassName('checkln')[0]
                                            lastname.value='';
                                            
                                            var email=document.getElementsByClassName('checkem')[0]
                                            
                                            email.value='';
                                
                                            var card=document.getElementsByClassName('checkpay')[0]
                                            
                                            card.value='';
                            
                                            var add=document.getElementsByClassName('checkad')[0]
                                            
                                            add.value='';
                                
                                            var check=document.getElementsByClassName('checkcash')[0]
                                            
                                            check.checked=false;
                                       
                    
                                        }
                                    
                                    }
                            )
                        }
                                 else{
                    var a = document.getElementsByClassName("loadercheck")[0];
                    a.style.display = "block";
                    var b = document.getElementsByClassName("confirmbtn")[0];
                    b.style.display = "none";
                 
                    myFunction()
                    function myFunction() {
                        setTimeout(function () {
                            var a = document.getElementsByClassName("loadercheck")[0];
                            a.style.display = "none";
                            var b = document.getElementsByClassName("confirmbtn")[0];
                            b.style.display = "block";
                        }, 3000);
        
                        var interval=setInterval(ab,3000)
                        function ab(){
                            
                                var r = document.getElementsByClassName('declinecheck')[0]
                                r.style.display = "block"
        
                            }
                        
                        setTimeout( function stop(){
                            clearInterval(interval)
                            var r = document.getElementsByClassName('declinecheck')[0]
                                r.style.display = "none"
                            },5000)
        
               
        
                    }
        
                
        
        
        
        
               
        }
        
                            
        // var a = document.getElementsByClassName("loadercheck")[0];
        //                 a.style.display = "block";
        //                 var b = document.getElementsByClassName("confirmbtn")[0];
        //                 b.style.display = "none";
     
        // axios.post('http://localhost/order/orderapi/post/update.php',formData,config)
        // .then(response=>
        // {
        //     if( ((this.state.payment!==""&& this.state.address!=="")||(this.state.address!==""||this.state.payment!==""))){
               
        //         showLoader()
        //         function showLoader() {
        //             setTimeout(function () {
        //                 var a = document.getElementsByClassName("loadercheck")[0];
        //                 a.style.display = "none";
        //                 var b = document.getElementsByClassName("confirmbtn")[0];
        //                 b.style.display = "block";
        //                 // var r = document.getElementsByClassName('response')[0]
        //                 // r.style.display = "none"

                        
        //             }, 3000);

        //             var interval=setInterval(showResponse,3000)
        //             function showResponse(){
                        
        //                     var r = document.getElementsByClassName('responsecheck')[0]
        //                     r.style.display = "block"
    
        //                 }
        //             var that=this;
        //             setTimeout( ()=>{
        //                 clearInterval(interval)
        //                 var r = document.getElementsByClassName('responsecheck')[0]
        //                     r.style.display = "none"
        //                     window.location.reload(false)
        //                     // history.push('/mainpage')
                     
        //                 },7000)
        //                 var firstname=document.getElementsByClassName('checkfn')[0]
        //                 firstname.value='';
            
        //                 var lastname=document.getElementsByClassName('checkln')[0]
        //                 lastname.value='';
                        
        //                 var email=document.getElementsByClassName('checkem')[0]
                        
        //                 email.value='';
            
        //                 var card=document.getElementsByClassName('checkpay')[0]
                        
        //                 card.value='';
        
        //                 var add=document.getElementsByClassName('checkad')[0]
                        
        //                 add.value='';
            
        //                 var check=document.getElementsByClassName('checkcash')[0]
                        
        //                 check.checked=false;
                   

        //             }
                
        //         }
        //         else if((this.state.payment==""&& this.state.address=="")||(this.state.address==""||this.state.payment=="")){
        //             var a = document.getElementsByClassName("loadercheck")[0];
        //             a.style.display = "block";
        //             var b = document.getElementsByClassName("confirmbtn")[0];
        //             b.style.display = "none";
                 
        //             myFunction()
        //             function myFunction() {
        //                 setTimeout(function () {
        //                     var a = document.getElementsByClassName("loadercheck")[0];
        //                     a.style.display = "none";
        //                     var b = document.getElementsByClassName("confirmbtn")[0];
        //                     b.style.display = "block";
        //                 }, 3000);
        
        //                 var interval=setInterval(ab,3000)
        //                 function ab(){
                            
        //                         var r = document.getElementsByClassName('declinecheck')[0]
        //                         r.style.display = "block"
        
        //                     }
                        
        //                 setTimeout( function stop(){
        //                     clearInterval(interval)
        //                     var r = document.getElementsByClassName('declinecheck')[0]
        //                         r.style.display = "none"
        //                     },5000)
        
               
        
        //             }
        
                
        
        
        
        
        //         }    
        // }
        
        
        // )
    }
        
    render() {
     

        return (
            <div>
                <MainNavBar />
                <div className="container-fluid py-lg-5 py-4">
                    <p className=""><span className="maindetails">Your Details </span></p>


                    <div className="row p-2">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-12 dashboard-panel-6  py-5" >
                         
                            <form className="signupForm">
                            
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">First Name <span >*</span></p>
                                    <input type="text" className="form-control checkfn"  id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">Last Name <span >*</span></p>
                                    <input type="text" className="form-control checkln" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>

                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara"> Email <span >*</span></p>
                                    <input type="email" className="form-control checkem" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <h3 className="details py-2">Address Details</h3>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">Full Address <span >*</span></p>
                                    <input type="text" className="form-control checkad" name="address" onChange={this.changeHandler} id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>
                           
                                <h3 className="details py-2">Payment Details</h3>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara ">Cash on Card  (If Cash on card then please enter your card number below) <span >*</span></p>
                                    <input type="text" className="form-control checkpay" name="payment" onChange={this.changeHandler} id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>
                          

                                <div className="form-group" id="usersignupform">
                                <input type="checkbox" className="checkcash" name="payment" value="cash on delivery" onChange={this.changeHandler}/>
  <label for="payment" className="loginPara"> &nbsp; Cash on delivery <span >*</span></label><br></br>
                                </div>

                                <div className="response pb-2 pt-2 px-2 mb-2"><i class="fa fa-check fa-lg" aria-hidden="true"></i> &nbsp; You are signed up successfully!</div>
                                <div className="decline pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Please fill all fields</div>
                                <img src="loader.gif" className="loadercheck"></img>
                                <button type="submit" className="btn RegisterBtn confirmbtn" onClick={this.confirm}>Confirm</button>
                                <div className="responsecheck pb-2 pt-2 px-2 mb-2"><i class="fa fa-check fa-lg" aria-hidden="true"></i> &nbsp; Order confirmed successfully!</div>
                                <div className="declinecheck pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Required fields, Please fill these!</div>
                                <div className="declinecheck pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Sorry order not confirmed!</div>
                            </form>


                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12 pt-lg-0 pt-md-0 pt-sm-0 pt-4' >
                        <p className=""><span className="maindetails">Order Summary </span></p>
                      {this.state.items==""?(<p className="cartQuantity pt-2">0 Item in Cart</p>):(<p className="cartQuantity pt-2">{Number(this.state.items)+1} Item in Cart</p>)}
                        {this.state.user && this.state.order? (
          <div> 
       { this.state.order.map((a)=>(
       
          <div className="row">
          <div className="col-5">
<img src={a.prod_image} className="cartorderimg p-2" ></img>
            </div>
            <div className="col-7">
            <p className="cartordercategory">{a.prod_category}</p>
            <p className="cartordercolor">Color: <span className="cocolor"> {a.prod_color}</span></p>
            <p className="cartordercolor">QTR: <span className="cocolor"> {a.quantity}</span></p>

            <p className="cartordercolor">Size: <span className="cocolor"> {a.prod_size}</span></p>
         {a.prod_saleprice==="no sale"?(   <p className="cartorderprice pt-3">PKR {(a.prod_price)*(a.quantity)}</p>)
         :(   <p className="cartorderprice pt-3">PKR {(a.prod_saleprice)*(a.quantity)}</p>)}
            </div>            
          </div>          
        )
        )}
      
        <p className="cartordergrandtotal pt-4">TOTAL: PKR {localStorage.getItem('total')}</p>
        
        </div>
      ):
      (<div>
        
        </div>)}
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SignUp;