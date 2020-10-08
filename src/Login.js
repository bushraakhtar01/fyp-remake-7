import React, { Component } from 'react';    
import { Link } from 'react-router-dom';
import axios from "axios";
import {PostData} from './services/PostData';
import Khaadi from './Khaadi';
import {Redirect} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateApi from './CreateApi';
import  AdminUI from './AdminUI';
import Home from './Home';
import Sapphire from './Sapphire';
import CreateSapphire from './CreateSapphire';
import './login.css';


class Login extends Component {  
    constructor(props) {  
        super(props);  
  
        this.state = {  
            email: '',  
            password: '' ,
           redirect : false
     
    }  
       this.login= this.login.bind(this);
       this.onChange= this.onChange.bind(this);
    }  

    componentDidMount(){
      if(sessionStorage.getItem('userData')){
        this.props.history.push('/');
      }
     
    }
    login(){
      if(this.state.email && this.state.password){
            PostData(this.state).then ((result)=>{
                
                 let responseJson = result;
                 console.log(responseJson.message);
              
                if(responseJson.message==="Successful login."){
                   
                    sessionStorage.setItem('userData', responseJson);
                    this.setState({redirect: true})
                    console.log(responseJson);
                    this.props.history.push('/');
                    console.log(responseJson.message)
                    
                    
                   
                }
                // else if(responseJson.message==="Login failed."){
                // console.log("login error");
                
                // }
                
            }).catch ((error)=>{
            
              var invalid=document.getElementsByClassName('declinelogin')[1];          
              invalid.innerHTML= error ;
             invalid.style.display="block"

             setTimeout(()=>{
           
             invalid.style.display="none"
             document.getElementsByClassName('loginem')[0].value=""
             document.getElementsByClassName('loginpw')[0].value=""


                console.log(error)
              },2000)

            
            });
        }
        else{
          var emptyfields=document.getElementsByClassName('declinelogin')[0];          
      
         emptyfields.style.display="block"

         setTimeout(()=>{
           
          emptyfields.style.display="none"
          document.getElementsByClassName('loginem')[0].value=""
          document.getElementsByClassName('loginpw')[0].value=""

           },2000)
        }

        }
      
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        
    }
    render() { 

      return (
        <div className="container-fluid" id = "abox">
              {/* headings */}
             <div className="container">
                <h1 className="display-4 para">ADMIN LOGIN FORM</h1> 
               <h1 className="display-4 para2">Welcome Admin, Login below to view records!</h1>
               <hr class="my-4" ></hr>
             </div>
     
     {/* jumbotron */}
             <div className="jumbotron jumbotron-fluid" id = "center">
           <img src="adminlogo.png" alt="Avatar" className = "image"/>
               <hr className = "line"></hr>
               <div>
                 <h1>Login</h1>
                 <hr className = "line2" ></hr>
               </div>
       
       {/* form */}
     
               <div className = "container">
               <div className="form-group" id = "inp1">
               <i class="envelope icon big" id = "icn1"></i>
                 <label>EMAIL</label>
               <input type="text" className="form-control loginem" id = "field1" name="email" placeholder="Enter Email" onChange={this.onChange} />
               </div>
               <div className="form-group" id = "inp2">
               <i class="lock icon big icn" id = "icn2"></i>
                 <label>PASSWORD</label>
               
                 <input type="password" className="form-control loginpw" id = "field2" name="password" placeholder="Enter Password" onChange={this.onChange} />
               </div>
     
          
               <hr className = "line"></hr>
             
                                <div className="declinelogin pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Required fields, Please fill these!</div>
                                <div className="declinelogin pb-2 pt-2 px-2 mb-2"></div>
               <button className="btn btn-primary"  id = "btn1" type="submit" value="Login" onClick={this.login}
               >Submit</button>
             <div className = "w-100"></div>
             <Link to="/mainpage"><button className="btn btn-primary" 
             id = "btn2"
             type="submit" value="Login" onClick={this.login}
               >Back</button></Link>
     
             </div>
     
               </div>
     </div>
     
     
         );
    }
  }
export default (Login);  

//  return (  
            
//             <div className="jumbotron " style={{ backgroundImage: 'url(logincover.jpg)',backgroundSize:'cover',width:'98%', height:'140vh'}}>
// <div className="container">
            
//             <h1 className="display-4" style={{ textAlign:'center', fontFamily:'helvatica',textShadow:'3px 3px 3px #c62828' ,letterSpacing:'2px',color:'#ffe0b2'}}>ADMIN LOGIN FORM</h1>
//             <h3 style={{textAlign:'center', fontSize:'30px',fontFamily:'helvatica', textShadow:'3px 3px 3px #ffab91',color:'white',}}>Welcome Admin, Login below to view records!</h3>
//             <hr class="my-4" ></hr>
//           </div>
  
  
// <div className="jumbotron jumbotron-fluid " style={{width:'52%', height:'90vh',marginLeft:'25%',opacity:'0.7'}}>
    
// <img src="adminlogo.png" alt="Avatar" style={{width: '100px',marginLeft:'41%', marginTop: '-30px',position:'relative'}} />
// <hr style={{width:'50%',marginLeft:'28%',backgroundColor:'#9e9e9e'}}></hr>
// <div>
// <h3 style={{marginLeft:'44%'}}>Login</h3>
// <hr style={{backgroundColor:"#9e9e9e",marginTop:'10px',marginLeft:'39%',width:'17%'}}></hr>
// </div>


//   <div className="form-group"  style={{ color:'black'}}>
//     <label style={{fontSize:'18px', color:"#424242" ,letterSpacing:'2px',marginLeft:'30%',fontWeight: 'bold'}} >EMAIL</label>
//     <i class="envelope icon big" style={{marginTop:'30px',color:'#757575', marginLeft: '-100px',position:'absolute'}}></i>
//      <input type="text" className="form-control col-6" style={{marginLeft:'30%', borderRadius: '20px'}} name="email" placeholder="Enter Email" onChange={this.onChange} />
     
//     <small className="form-text text-muted" style={{marginLeft:'30%', color: 'black'}}>We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group"  style={{ color:'black',marginTop:'30px'}}>
//     <label  style={{fontSize:'18px',color:"#424242",  letterSpacing:'2px',fontWeight: 'bold',marginLeft:'30%'}}  >PASSWORD</label>
//     <i class="lock icon big" style={{marginTop:'30px',color:'#757575', marginLeft: '-150px',position:'absolute'}} ></i>
//     <input type="password" className="form-control col-6" style={{marginLeft:'30%',borderRadius: '20px'}} name="password"  placeholder="Enter Password" onChange={this.onChange} />
//     <small className="form-text text-muted" style={{marginLeft:'30%', color: 'black'}}>We'll never share your password with anyone else.</small>
//   </div>
  
 
//   <hr style={{backgroundColor:"#9e9e9e",marginTop:'10px',marginLeft:'29%',width:'50%'}}></hr>
// <button className="btn btn-primary col-6" style={{backgroundColor:'#c62828',borderRadius: '20px',borderColor:'#bbdefb', color: 'white',marginLeft:'30%',marginTop:'20px'}}
//  type="submit" value="Login" onClick={this.login}
//   >Submit</button>
//   <Link to="/mainpage"><button className="btn btn-primary col-6" style={{backgroundColor:'#ff9800',borderRadius: '20px',borderColor:'#bbdefb', color: 'white',marginLeft:'30%',marginTop:'20px'}} type="submit" value="Login" onClick={this.login}
//   >Back</button></Link>

//    </div>

// </div>
// ;  
     
//     }  
// }  
  



// import React, { Component } from 'react';
// import './login.css';
// import { Link } from 'react-router-dom';

// import axios from "axios";

// import { PostData } from './services/PostData';
// import Khaadi from './Khaadi';
// import { Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import CreateApi from './CreateApi';

// import AdminUI from './AdminUI';

// import Home from './Home';
// import Sapphire from './Sapphire';
// import CreateSapphire from './CreateSapphire';




// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       redirect: false

//     }
//     this.login = this.login.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   componentDidMount() {
//     if (sessionStorage.getItem('userData')) {
//       this.props.history.push('/');
//     }
//   }
//   login() {
//     if (this.state.email && this.state.password) {
//       PostData(this.state).then((result) => {

//         let responseJson = result;
//         console.log(responseJson);

//         if (responseJson) {

//           sessionStorage.setItem('userData', responseJson);
//           this.setState({ redirect: true })
//           console.log(responseJson);
//           this.props.history.push('/');



//         }
//         else {
//           console.log("login error");

//         }

//       });
//     }

//   }





//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });

//   }
//   render() {
//     console.log(sessionStorage);

//     console.log('props in login -> ', this.props);



//     // if(sessionStorage.getItem('userData')){

//     //    return(

//     //    );

//     //    } 

//     return (
//    <div className="container-fluid" id = "abox">
//          {/* headings */}
//         <div className="container">
//            <h1 className="display-4 para">ADMIN LOGIN FORM</h1> 
//           <h1 className="display-4 para2">Welcome Admin, Login below to view records!</h1>
//           <hr class="my-4" ></hr>
//         </div>

// {/* jumbotron */}
//         <div className="jumbotron jumbotron-fluid" id = "center">
//       <img src="adminlogo.png" alt="Avatar" className = "image"/>
//           <hr className = "line"></hr>
//           <div>
//             <h1>Login</h1>
//             <hr className = "line2" ></hr>
//           </div>
  
//   {/* form */}

//           <div className = "container">
//           <div className="form-group" id = "inp1">
//           <i class="envelope icon big" id = "icn1"></i>
//             <label>EMAIL</label>
//           <input type="text" className="form-control" id = "field1" name="email" placeholder="Enter Email" onChange={this.onChange} />
//           </div>
//           <div className="form-group" id = "inp2">
//           <i class="lock icon big icn" id = "icn2"></i>
//             <label>PASSWORD</label>
          
//             <input type="password" className="form-control" id = "field2" name="password" placeholder="Enter Password" onChange={this.onChange} />
//           </div>

     
//           <hr className = "line"></hr>
//           <button className="btn btn-primary"  id = "btn1" type="submit" value="Login" onClick={this.login}
//           >Submit</button>
//         <div className = "w-100"></div>
//         <Link to="/mainpage"><button className="btn btn-primary" 
//         id = "btn2"
//         type="submit" value="Login" onClick={this.login}
//           >Back</button></Link>

//         </div>

//           </div>
// </div>


//     );

//   }
// }

// export default (Login);  