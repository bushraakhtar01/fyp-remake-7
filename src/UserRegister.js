import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
// import Footer from './footer';
import { Redirect,Link } from "react-router-dom";
import { UserData } from './services/UserData';

import MainNavBar from './MainNavBar';
import Footer from './Footer';
import ImgView from './ImgView';

import './UI.css';
import MainPage from './MainPage';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect:false
            

        }
        this.login = this.login.bind(this);
       

        this.onChange = this.onChange.bind(this);


    }
componentDidMount(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
    onChange = e => {

        this.setState({ [e.target.name]: e.target.value })


    }

    login(e) {
        e.preventDefault()
        // var a= document.getElementsByClassName("loader")[0];
        // a.style.display="block" ;
        // var b= document.getElementsByClassName("RegisterBtn")[0];
        // b.style.display="none";
        // myFunction()
        // function myFunction() {
        // setTimeout(function(){ 
        //    var a= document.getElementsByClassName("loader")[0];
        //    a.style.display="none" ;
        //    var b= document.getElementsByClassName("RegisterBtn")[0];
        //    b.style.display="block";
        // }, 3000);
        // }

        if (this.state.email && this.state.password) {
            UserData(this.state).then((result) => {
                console.log(result)

                var a = document.getElementsByClassName("loader")[0];
                a.style.display = "block";
                var b = document.getElementsByClassName("RegisterBtn")[0];
                b.style.display = "none";
   
                let responseJson = result;
            

                if (responseJson) {
                    sessionStorage.setItem('user',JSON.stringify(responseJson))
                
                    showLoader()
                    function showLoader() {
                        setTimeout(function () {
                            var a = document.getElementsByClassName("loader")[0];
                            a.style.display = "none";
                            var b = document.getElementsByClassName("RegisterBtn")[0];
                            b.style.display = "block";
                            // var r = document.getElementsByClassName('response')[0]
                            // r.style.display = "none"

                            
                        }, 3000);

                        var interval=setInterval(showResponse,3000)
                        function showResponse(){
                            
                                var r = document.getElementsByClassName('response')[0]
                                r.style.display = "block"
        
                            }
                        var that=this;
                        setTimeout( ()=>{
                            clearInterval(interval)
                            var r = document.getElementsByClassName('response')[0]
                                r.style.display = "none"
                                window.location.reload(false)
                                // history.push('/mainpage')
                         
                            },7000)
                            document.getElementById('exampleInputEmail1').value=""
                            document.getElementById('exampleInputPassword1').value=""
                       
                            
                       

                    }


                    //     //   sessionStorage.setItem('userData', responseJson);
                    //     //   this.setState({redirect: true})

                    //     //  
                    //     //   this.props.history.push('/');



                }


            })
                .catch ((error)=>{
                    var a = document.getElementsByClassName("loader")[0];
                    a.style.display = "block";
                    var b = document.getElementsByClassName("RegisterBtn")[0];
                    b.style.display = "none";
                 
                    myFunction()
                    function myFunction() {
                        setTimeout(function () {
                            var a = document.getElementsByClassName("loader")[0];
                            a.style.display = "none";
                            var b = document.getElementsByClassName("RegisterBtn")[0];
                            b.style.display = "block";
                        }, 3000);
        
                        var interval=setInterval(ab,3000)
                        function ab(){
                            
                                var r = document.getElementsByClassName('decline')[0]
                                r.innerHTML=error
                                r.style.display = "block"
        
                            }
                        
                        setTimeout( function stop(){
                            clearInterval(interval)
                            var r = document.getElementsByClassName('decline')[0]
                                r.style.display = "none"
                                document.getElementsByClassName('emailloginuser')[0].value="";
                                document.getElementsByClassName('pwdloginuser')[0].value="";
                            },5000)
                           
               
        
                    }
                  
                  });        
        }
        else{
            var a = document.getElementsByClassName("loader")[0];
            a.style.display = "block";
            var b = document.getElementsByClassName("RegisterBtn")[0];
            b.style.display = "none";
         
            myFunction()
            function myFunction() {
                setTimeout(function () {
                    var a = document.getElementsByClassName("loader")[0];
                    a.style.display = "none";
                    var b = document.getElementsByClassName("RegisterBtn")[0];
                    b.style.display = "block";
                }, 3000);

                var interval=setInterval(ab,3000)
                function ab(){
                    
                        var r = document.getElementsByClassName('decline')[0]
                        r.style.display = "block";

                    }
                
                setTimeout( function stop(){
                    clearInterval(interval)
                    var r = document.getElementsByClassName('decline')[0]
                        r.style.display = "none"
                
                    },5000)

                    document.getElementById('exampleInputEmail1').value=""
                    document.getElementById('exampleInputPassword1').value=""

            }

        }


    }


    render() {

if(this.state.redirect===true){
    return <Redirect push to="/mainpage" />;
}
        return (
            <div>
                <MainNavBar />
                <div className="container-fluid py-5">
                    <p className=""><span className="mainuserregisterheading">LOGIN OR CREATE AN ACCOUNT </span></p>


                    <div className="row p-2">
                        <div className="col-lg-6 py-5 dashboard-panel-6 columnsRegister">
                            <h2 className="login_registereduser">REGISTERED CUSTOMERS</h2>
                            <p className="loginPara">If you have already signed up, please log in here.</p>
                            <form>
                                <div className="form-group">
                                    <p className="loginPara">Email</p>
                                    <input type="email" className="form-control emailloginuser" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <p className="loginPara"> Password</p>

                                    <input type="password" className="form-control pwdloginuser" id="exampleInputPassword1" name="password" onChange={this.onChange} />
                                </div>
                                <img src="loader.gif" className="loader"></img>
                                <div className="response pb-2 pt-2 px-2 mb-2"><i class="fa fa-check fa-lg" aria-hidden="true"></i> &nbsp; Logged In successfully!</div>
                                <div className="decline pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Required fields, Please fill these!</div>
                                <button type="submit" className="btn RegisterBtn" onClick={this.login}>LOGIN</button>
                            </form>

                        </div>
                        <div className="col-lg-6 dashboard-panel-6  py-5 columnsRegister">
                            <h2 className="login_registereduser">NEW CUSTOMERS</h2>

                            <p className="createuserpara">By creating an account with our store, you will be able to move through the checkout process faster,
                                store multiple shipping addresses, view and track your orders in your account and more.</p>
                            <button className="btn createaccountBtn" ><Link to='/signup' className="signuplink">Create Account</Link></button>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default User;