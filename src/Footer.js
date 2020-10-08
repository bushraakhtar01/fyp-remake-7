import React, { Component } from 'react';
import './gallery.css';

import {Link} from "react-router-dom";



class Footer extends Component{


    render(){
        

        return(
          <div className="container-fluid footer">

               {/* footer div  */}
              <div className="row">
               <div className='col-md-3 footercolumn'    >
                 
                   <ul  >
                   <li className="li1" > 
                           Help
                       </li>
                       <li className="footerlis"  >
                      <Link to='/contactus' className="footerlinks">
                           Contact Us
                           </Link>
                       </li>
                       <li className="footerlis"  >
                       <Link to='/privacy' className="footerlinks">
                          Privacy Policy
                           </Link>
                       </li>
                   </ul>
                   </div>

                   <div className='col-md-3 footercolumn'   >
                 
                 <ul  >
                 <li className="li1" > 
                        Our Company
                     </li>
                     <li className="footerlis"  >
                     <Link to='/about' className="footerlinks">
                          About Us
                           </Link>
                     </li>
                     <li className="footerlis"  >
                     <Link to='/terms' className="footerlinks">
                        Terms &amp; Conditions
                           </Link>
                     </li>
                 </ul>

             
              

             </div>


               
                

               <div className='col-md-3 footercolumn'   >
                 
                 <ul  >
                 <li className="li1" > 
                         Customer Care
                     </li>
                     <li className="footerlis"  >  <Link to='/faq' className="footerlinks">
                        FAQ</Link>
                     </li>
                     <li className="footerlis"  >
                         care@Pehnaway.com
                     </li>
                 </ul>

             
              

             </div>
             <div className='col-md-3 socialmediacol'   >
                 
                 <ul  id="some" >
                 <li className="li1" > 
                       Follow Us
                     </li>
                     <li className="socialmedia" >
                     <i class="facebook icon big" ></i>
                     </li>
                     <li  className="socialmedia"  >
                     <i class="twitter icon big" ></i>
                     </li>

                     <li className="socialmedia">
                     <i class="youtube icon big"></i>
                     </li>
                     <li className="socialmedia">
                     <i class="instagram icon big"></i>
                     </li>
                 </ul>

             
              

             </div>
       

                </div>

                <div className='row'>
                    <div className="col lastdiv" >
                        <p className="lastfooter">
                            Copyright 	&copy; Pehnaway Pakistan Limited. All Rights Reserved
                        </p>
                    </div>

                </div>
            


              

        


          































          </div>

   
      
        )
    }

}
export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const footer=()=>{
// return(

// <div className= 'container-fluid' >
//     {/* First Div  */}

//     {/* mark youself div */}

// <div className = "row" id="firstdvft" >
// <div  className = "col-sm-6">
//       {/* headings */}
// <h3 id="heading1ft" >Mark Yousrelf First To Know</h3>
// <h3 id="heading2ft">Stay in touch to find out the best offers and exclusive news.</h3>
// </div>
// {/* email  */}
// <div className="ui input col-sm-6">
// <input type="email" placeholder="Type your email..." id="emailinputft" ></input> 
// <button class="ui secondary button" id="okaybuttonft">
//   Okay
// </button>
// </div>
// </div>

// {/* second div */}
// {/* help Contact */}
// <div className="row" id="helpcontactft">
//       <div className="col">
// <ul className="helpulft" >
// <li><a href="#" id="helpli1ft" >
// Help
// </a></li>
// <li><a href="#" id="helpli2ft">
// Contact Us
// </a></li>


// </ul></div>
// {/* 
// ways to shop */}
//       <div className="col"><ul className="helpulft" >
// <li >  <a href="#" id="waysft"  >
// Ways to shop
// </a></li>
// <li >  <Link to='/aboutfullpage'> <p id="aboutft" >
// About
// </p></Link></li>
// <li><a href="#" id="faqft" >
// FAQS
// </a></li>
// <li><a href="#" id="paymentft" >
// Payments
// </a></li>
// </ul></div>

// {/* customer care */}
//       <div className="col"><ul className="helpulft" >
// <li><a href="#"  id="customercareft" style={{color:'black',fontFamily:'sans-serif',fontSize:'19px',fontWeight:'bold'}}>
// Customer Care
// </a></li>
// <li><a href="#" id="noft" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'3px',fontSize:'15px'}}>
// 0316-0022324
// </a></li>
// <li><a href="#" id="emailcareft" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'30px',fontSize:'15px'}}>
// care@Pehnaway.com
// </a></li>
// {/* <li><a href="#"  style={{color:'#666666',fontFamily:'sans-serif',marginTop:'55px',fontSize:'15px'}}>
// Payments
// </a></li> */}
// </ul></div>

//       <div className="col"><ul className="helpulft">
// <li><a href="#" id="accountft" >
// My Account</a>
// </li>
// <li><a href="#" id="accountinfoft" >
// Account info
// </a></li>
// <li><a href="#" id="addressft" >
// Addresses
// </a></li>
// <li><a href="#" id="orderft" >
// Order history
// </a></li>
// </ul></div>



// {/* 

// Follow us */}

// <div className='col' id="followusdv">
// <ul className="helpulft" >
// <li><a href="#" id="followlift">
// Follow Us
// </a></li>
// <li><a href="#" id="fblift" >
// <img className="socialmediaimg" src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/facebook-icon.svg"
//  >     
// </img>
// </a></li>
// <li><a href="#" id="twterlift" >
// <img className="socialmediaimg" src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/twitter-icon.svg"
//  >     
// </img>
// </a></li>
// <li><a href="#" id="youtubelift" >
// <img className="socialmediaimg" src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/youtube-icon.svg"
//  >     
// </img>
// </a></li>
// <li><a href="#" id="instalift">
// <img className="socialmediaimg" src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/instagram-icon.svg"
//  >     
// </img>
// </a></li>

// </ul>

// </div>
// </div>

// {/* terms conditions , privacy policy */}

// <hr id="linepp"></hr>

// <div className = 'row' id="divpp">
// <div className='col-6'>     
// <a id="termscond"  href="#">Terms Conditions</a>    
// <a id="privacypolicy1"  href="#">.Privacy Policy</a>
// </div>

// <div className='col-6'>    
// <a id="privacypolicy2"  href="#">.Privacy Policy</a>
// </div>
// </div>










// </div>
// );
// };
// export default footer;