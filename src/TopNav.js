import React from 'react';
import axios from 'axios';
import './adminui.css';
import {withRouter} from 'react-router-dom';



class TopNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        clear: false
    }
    this.logout= this.logout.bind(this);
}
openSidenav(){
 const a= document.getElementsByClassName('adminsidenav')[0];
 a.style.display='block';
 
 const b=document.getElementById("imagecolid");
 b.style.display='none';

}

notification(){
 
  // localStorage.setItem("count",'')
  const num=localStorage.getItem("count")
  for(var i=0;i<num;i++){
    
  document.getElementsByClassName('notidiv')[0].style.display='block'
    var e=document.getElementsByClassName('notidiv')[0];
    const icon=document.createElement('i');
    icon.classList.add("fa") 
    icon.classList.add("fa-commenting-o")
    icon.classList.add("fa-2x")
    icon.style.color="#E91E63"
    e.appendChild(icon)
    icon.insertAdjacentHTML('afterend', "&nbsp;")
    icon.insertAdjacentHTML('afterend', "&nbsp;")
    icon.insertAdjacentHTML('afterend', "&nbsp;")
    icon.insertAdjacentHTML('afterend', "&nbsp;")
    var tag = document.createElement("span");
    var text = document.createTextNode("Admin, 1 new notification from user queries");
   tag.appendChild(text);
    e.appendChild(text);

    const line=document.createElement("hr")
    e.appendChild(line)
    
  localStorage.setItem("count",'')
  
  
}

document.getElementsByClassName("fa-bell-o")[0].addEventListener("click",function(){
  document.getElementsByClassName('notidiv')[0].style.display="none";
  document.getElementsByClassName('bell')[0].innerHTML='0'
  
})

}
logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({clear: true})
    this.props.history.push('/mainpage');
    
}
  render(){
    var notiNumber=localStorage.getItem("count")
 if(!notiNumber){
   notiNumber=0;
   
 }

  // console.log('props in topnav -> ',this.props);
  if(sessionStorage.getItem("userData")){
    return(
      <div className="container-fluid pt-2 pb-2" id="admintopnav">
        <div className="row">
          <div className='col-6 pt-1'>
            <ul className="barHead">
              <li>
              <i class="fa fa-bars px-2" aria-hidden="true" onClick={this.openSidenav}></i>
              </li>
              <li>
              <span className="admintopheading px-1">Pehnaway</span>
              </li>
            </ul>
        </div>
          <div className="col-6 pt-1" style={{textAlign:'right'}}>
    <i class="fa fa-bell-o px-2" aria-hidden="true" onClick={this.notification}><span className="bell pt-1">{notiNumber}</span></i>
    <div className="notidiv ">

   </div>
         
          <i class="fa fa-sign-out px-3" aria-hidden="true" onClick={this.logout}></i>
            
            <i class="fa fa-circle p-0"  aria-hidden="true"></i> <i class="fa fa-user-o " aria-hidden="true"></i>
           </div>
        </div>
      </div>
    )
  }
  else{
    return(<div></div>)
  }
  
  }
}
export default  withRouter(TopNav);


// //import react libraries
// import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom'
// import './adminui.css';

// import Login from './Login';

// class TopNav extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//         clear: false
//     }
//     this.logout= this.logout.bind(this);
// }
// notification(){
 
//   // localStorage.setItem("count",'')
//   const num=localStorage.getItem("count")
//   for(var i=0;i<num;i++){
    
//   document.getElementsByClassName('notidiv')[0].style.display='block'
//     var e=document.getElementsByClassName('notidiv')[0];
//     const icon=document.createElement('i');
//     icon.classList.add("fa") 
//     icon.classList.add("fa-commenting-o")
//     icon.classList.add("fa-2x")
//     icon.style.color="#E91E63"
//     e.appendChild(icon)
//     icon.insertAdjacentHTML('afterend', "&nbsp;")
//     icon.insertAdjacentHTML('afterend', "&nbsp;")
//     icon.insertAdjacentHTML('afterend', "&nbsp;")
//     icon.insertAdjacentHTML('afterend', "&nbsp;")
//     var tag = document.createElement("span");
//     var text = document.createTextNode("Admin, 1 new notification from user queries");
//    tag.appendChild(text);
//     e.appendChild(text);

//     const line=document.createElement("hr")
//     e.appendChild(line)
    
//   localStorage.setItem("count",'')
  
  
// }

// document.getElementsByClassName("fa-bell-o")[0].addEventListener("click",function(){
//   document.getElementsByClassName('notidiv')[0].style.display="none";
//   document.getElementsByClassName('bell')[0].innerHTML='0'
  
// })

//   // if(localStorage.getItem("count")==""){
//   // document.getElementsByClassName('notidiv')[0].style.display='none'
    
//   //   document.getElementsByClassName("bell")[0].innerHTML="0"
//   //   var e=document.getElementsByClassName('notidiv')[0];
//   //   const icon=document.createElement('i');
//   //   icon.classList.add("fa") 
//   //   icon.classList.add("fa-commenting-o")
//   //   icon.classList.add("fa-2x")
//   //   icon.style.color="#E91E63"
//   //   e.appendChild(icon)
//   //   icon.insertAdjacentHTML('afterend', "&nbsp;")
//   //   icon.insertAdjacentHTML('afterend', "&nbsp;")
//   //   icon.insertAdjacentHTML('afterend', "&nbsp;")
//   //   icon.insertAdjacentHTML('afterend', "&nbsp;")
//   //   var tag = document.createElement("span");
//   //   var text = document.createTextNode("No new notification");
//   //  tag.appendChild(text);
//   //   e.appendChild(text);

//   //   const line=document.createElement("hr")
//   //   e.appendChild(line)
   
 
    
   
//   // }
 

// }
// logout(){
//     sessionStorage.setItem("userData",'');
//     sessionStorage.clear();
//     this.setState({clear: true})
//     this.props.history.push('/mainpage');
    
// }


// render(){
  
//   var notiNumber=localStorage.getItem("count")
//  if(notiNumber==""){
//    notiNumber=0
//  }

//   // console.log('props in topnav -> ',this.props);
//   if(sessionStorage.getItem("userData")){
// return(
//   <nav className="navbar navbar-light " style={{backgroundColor: '#e57373'}}>
//   <a className="navbar-brand" href="#">Navbar</a>
//   <div style={{display:'inline-block'}}>
//     <div>
//   <i class="fa fa-bell-o fa-2x px-3 " aria-hidden="true" onClick={this.notification}><span className="bell pt-1">{notiNumber}</span></i>
//   <button type="button" className="ui inverted white button"  onClick={this.logout}>Logout</button>
//   <div className="notidiv ">
   
//   </div>
//   </div>
  
//   <img src="adminlogo.png" alt="Avatar" style={{width: '40px'}} />
//   <img src="onlinelogo.png"
//    alt="Avatar" style={{width: '15px',marginTop:'30px',position:'absolute',marginLeft:'-40px'}} />
    
//  </div>
// </nav>
//  );

// }else{
//   return(<div></div>)
// }

// }
// }

// export default withRouter(TopNav);