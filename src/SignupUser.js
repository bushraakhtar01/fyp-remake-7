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
import MainPage from './MainPage';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            password: '',

        }
    }
    changeHandler = e => {

        this.setState({ [e.target.name]: e.target.value })


    }
    changeHandle = e => {

        this.setState({ [e.target.name]: e.target.value })


    }
    submitHandler = e => {

        e.preventDefault()


        if (this.state.firstName !== "" && this.state.email !== "" && this.state.lastName !== "" && this.state.password !== "") {
            var formData = new FormData();


            formData.append("firstName", this.state.firstName);
            formData.append("lastName", this.state.lastName);
            formData.append("email", this.state.email);
            formData.append("password", this.state.password);

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }


            axios.post('http://localhost/user_authentication/api/create_user.php', formData, config)
                .then(response => { console.log(response) })

            // var r = document.getElementsByClassName('response')[0]
            // r.style.display = "block"
            // myFunction()
            // function myFunction() {
            //     setTimeout(function () {
            //         var a = document.getElementsByClassName("response")[0];
            //         a.style.display = "none";
            //     }, 3000);
            // }
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
                    // var r = document.getElementsByClassName('response')[0]
                    // r.style.display = "none"

                    
                }, 3000);

                var interval=setInterval(ab,3000)
                function ab(){
                    
                        var r = document.getElementsByClassName('response')[0]
                        r.style.display = "block"

                    }
                
                setTimeout( function stop(){
                    clearInterval(interval)
                    var r = document.getElementsByClassName('response')[0]
                        r.style.display = "none"
                    },5000)

                    document.getElementById('exampleInputEmail1').value=""
                    document.getElementById('exampleInputPassword1').value=""

               

            }



        }
        else {
            var a = document.getElementsByClassName("loader")[0];
            a.style.display = "block";
            var b = document.getElementsByClassName("RegisterBtn")[0];
            b.style.display = "none";
            loaderStart()
            function loaderStart() {
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
                    
                        var r = document.getElementsByClassName('decline')[0]
                        r.style.display = "block"

                    }
                
                setTimeout( function clearResponse(){
                    clearInterval(interval)
                    var r = document.getElementsByClassName('decline')[0]
                        r.style.display = "none"
                    },7000)

            }

        }
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }







    render() {
        const { firstName, lastName, email, password } = this.state

        return (
            <div>
                <MainNavBar />
                <div className="container-fluid py-5">
                    <p className=""><span className="mainuserregisterheading">LOGIN OR CREATE AN ACCOUNT </span></p>


                    <div className="row p-2">
                        <div className="col-6 dashboard-panel-6  py-5 columnsRegister" id="registerForm">
                            <h2 className="login_registereduser">CREATE AN ACCOUNT</h2>



                            <form className="signupForm">
                                <h3 className="personalinfo py-2">Personal Infromation</h3>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">First Name</p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="firstName" value={firstName} onChange={this.changeHandler} />
                                </div>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">Last Name</p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="lastName" value={lastName} onChange={this.changeHandler} />
                                </div>

                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara"> Email</p>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={this.changeHandler} />
                                </div>
                                <div className="form-group">
                                    <p className="loginPara"> Password</p>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={this.changeHandler} />
                                </div>

                                <div className="response pb-2 pt-2 px-2 mb-2"><i class="fa fa-check fa-lg" aria-hidden="true"></i> &nbsp; You are signed up successfully!</div>
                                <div className="decline pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Please fill all fields</div>
                                <img src="loader.gif" className="loader"></img>
                                <button type="submit" className="btn RegisterBtn" onClick={this.submitHandler}>Register</button>

                            </form>


                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SignUp;