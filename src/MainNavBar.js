import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import axios from 'axios';

class TopNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user:'',
      usercart: [{}],
      grandtotal:0,
      orderid:'',
      record:[{}],
      newstate:[{}],
      items:''    }
    this.deleteconfirm=this.deleteconfirm.bind(this)
  }
 async componentDidMount() {

if(!sessionStorage.getItem('user')){
  document.getElementsByClassName('itemno')[0].style.display='none'
}
    document.body.style.overflow="visible"
if(sessionStorage.getItem('user')){
    var user=sessionStorage.getItem('user');
    var b=JSON.parse(user)
    console.log(b.id)
    if(user){
      var a=JSON.parse(user)
      this.setState({
        user: a.firstName
      }
      )
    }
    const url=`http://localhost/order/orderapi/post/read_single.php?id=${b.id}`;
    const response=await fetch(url);
    const data= await response.json();
   this.setState({usercart:data.data});
   console.log(this.state.usercart)

var total=0;
for(var a in this.state.usercart){
  if(this.state.usercart[a].prod_saleprice==='no sale'){
  total=(this.state.usercart[a].prod_price)*(this.state.usercart[a].quantity)
 this.setState({
   grandtotal:(this.state.grandtotal)+total,
   items:Number(this.state.items)+Number(this.state.usercart[a].quantity)
 })

}
 else{
  total=(this.state.usercart[a].prod_saleprice)*(this.state.usercart[a].quantity)
  this.setState({
    grandtotal:(this.state.grandtotal)+total,
    items:Number(this.state.items)+Number(this.state.usercart[a].quantity)
  })}
 }
console.log(this.state.items)
localStorage.setItem('total',this.state.grandtotal)
}

    document.addEventListener('scroll', function () {
      // When the event DOMContentLoaded occurs, it is safe to access the DOM

      // When the user scrolls the page, execute myFunction
      window.addEventListener('scroll', myFunction);
      var header = document.getElementById("container");
      var sticky = header.offsetTop;
      window.onscroll = function () { myFunction() };



      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    })


    document.addEventListener('scroll', function () {

      window.addEventListener('scroll', scrollFunction);

      var mybutton = document.getElementById("myBtn");

      window.onscroll = function () { scrollFunction() };


      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      document.getElementById("myBtn").onclick = function
        topFunction() {


        if (window.scrollY != 0) {
          setTimeout(function () {
            window.scrollTo(0, window.scrollY - 30);
            topFunction();
          }, 10);
        }
      }

    })

  }

  openNav() {
    const a = document.getElementsByClassName("sidenav")[0];
    a.style.display = "block";
  }
  closeNav() {
    const a = document.getElementsByClassName("sidenav")[0];
    a.style.display = "none";
  }
  hoverDiv = (pic1) => {

    const a = document.getElementById('hoverdiv')
    a.style.display = 'block';

    const x = document.getElementsByClassName('hoverImg')[0];
    x.src = pic1;
  }
  closeHoverDiv() {
    const a = document.getElementById('hoverdiv')
    a.style.display = 'none';


  }
  hoverBrandDiv = (pic1, pic2, pic3, pic4, pic5, pic6) => {
    const x = document.getElementById('brandhoverdiv')
    x.style.display = 'block';
    const a = document.getElementsByClassName('brandpic1')[0];
    a.src = pic1;
    const b = document.getElementsByClassName('brandpic2')[0];
    b.src = pic2;
    const c = document.getElementsByClassName('brandpic3')[0];
    c.src = pic3;
    const d = document.getElementsByClassName('brandpic4')[0];
    d.src = pic4;
    const e = document.getElementsByClassName('brandpic5')[0];
    e.src = pic5;
    const f = document.getElementsByClassName('brandpic6')[0];
    f.src = pic6;
  }
  closeHoverBrandDiv() {
    const a = document.getElementById('brandhoverdiv')
    a.style.display = 'none';


  }
  openCart(){
    
    var x=document.getElementById('rowcart')
    x.style.display="block"
    document.body.style.overflow = "hidden";


  }
  closeCart(){
    var a=document.getElementById('rowcart')
    a.style.display="none"
    document.body.style.overflow = "visible";
    

  }
registereddiv(){
  var a=document.getElementsByClassName("userregistered")[0].style.display="block"
}
registereddivclose(){
  var a=document.getElementsByClassName("userregistered")[0].style.display="none"
  
}
signout(){
  sessionStorage.removeItem('user')
  window.location.reload(true)
  localStorage.setItem('items',"")

}
// deleteitem(id){
//   console.log(id)
// var a=document.querySelector('.ui.basic.modal')
// a.style.display="block"
// var x=document.getElementById('rowcart')
// x.style.display="none"

// }
// no(){
//   var no=document.querySelector('.ui.basic.modal')
// no.style.display="none"
// document.body.style.overflow = "visible";

// }
// deleteconfirm(id){

//   var formData = new FormData();
        
//   formData.append("id", id);

//   const config = {
//     headers: { 
//         'content-type': 'multipart/form-data'
//     }
// }


// axios.post('http://localhost/order/orderapi/post/delete.php ',formData,config)
// .then(response=>{console.log(response)})

// console.log(this.state)
// }
deletemodal(n){
 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
var a=  document.getElementsByClassName('fa-window-close')[0]
// a.setAttribute("data-toggle","modal")
// a.setAttribute( "data-target","#exampleModal")
this.setState({
  orderid:n.order_id,
  record:n
})
console.log(a)
}
deleteconfirm(){
  console.log(this.state.orderid)
     var formData = new FormData();
        
  formData.append("order_id", this.state.orderid);

  const config = {
    headers: { 
        'content-type': 'multipart/form-data'
    }
}


axios.post('http://localhost/order/orderapi/post/delete.php/ ',formData,config)
.then(response=>{console.log(response)})
var a=  document.getElementsByClassName('fa-window-close')[0]

const newstate= this.state.usercart.slice();
newstate.splice(newstate.indexOf(this.state.record), 1)
this.setState({
    usercart:newstate
})
window.location.reload(true)
console.log(this.state.record.quantity)

}
  render() {


    return (

      <div className="container-fluid" id="container">
        <button id="myBtn" title="Go to top"><i class="arrow up icon"></i></button>
  
        <div className="modal fade deletemod" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete this item?</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
  
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary bas px-3" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-light px-3" onClick={this.deleteconfirm}>Yes</button>
      </div>
    </div>
  </div>
</div>
<div className="row" id="rowcart" >
    <div className="col-lg-4 col-md-4 col-sm-12 col-12 cartCol">
      <p className="yourcart p-3"><span className="closecart" onClick={this.closeCart}>X</span>Your Cart</p>
    
      {this.state.usercart && sessionStorage.getItem('user')? (
          <div> 
       { this.state.usercart.map((a)=>(
       
          <div className="row">
          <div className="col-5">
<img src={a.prod_image} className="cartorderimg p-2" ></img><i class="fa fa-window-close" data-toggle="modal" data-target="#exampleModal" onClick={this.deletemodal.bind(this,a)} ></i>
            </div>
            <div className="col-7">
            <p className="cartordercategory">{a.prod_category}</p>
            <p className="cartordercolor">Color: <span className="cocolor"> {a.prod_color}</span></p>
            <p className="cartordercolor">Size: <span className="cocolor"> {a.prod_size}</span></p>
         {a.prod_saleprice==="no sale"?(   <p className="cartorderprice pt-3">PKR {(a.prod_price)*(a.quantity)}</p>)
         :(   <p className="cartorderprice pt-3">PKR {(a.prod_saleprice)*(a.quantity)}</p>)}
            </div>            
          </div>          
        )
        )}
      
        <p className="cartordergrandtotal">TOTAL: PKR {this.state.grandtotal}</p>
        <Link to="/checkout" ><button className="btn cartorderview px-4 pt-2" onClick={this.addtocart}>Proceed to checkout
          </button></Link>
        </div>
      ):
      (<div>
        <p className="emptycart p-2">Oh no! Your shopping cart’s empty. Time to go shopping!</p>
        </div>)}
    </div>
  </div>

 

        
        

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-sm-8 col-8  sidenav" >
              {/* <i className="fa fa-times fa-1x mt-2" onClick={this.closeNav} aria-hidden="true"></i> */}
              <div className="col" style={{ padding: '0', margin: '0' }}>
                <p onClick={this.closeNav} className="closesidenav pt-3 mx-0">X</p>
              </div>

              <div className="row  "  >
                <div className="col-6 sidenavimgcol">
                 <Link to="/unstitched"> <img src="sidenavpic1.jpg" className="sidenavpics"></img>
                  <p className="textonimg">Unstitched</p></Link>
                </div>
                <div className="col-6 sidenavimgcol" >
                <Link to="/stitched"><img src="sidenavpic5.jpg" className="sidenavpics"></img>
                  <p className="textonimg">stitched</p></Link> 
                </div>
                <div className="col-6 sidenavimgcol " >
                <Link to="/newarrivals"><img src="sidenavpic6.jpg" className="sidenavpics"></img>
                  <p className="textonimg">New Arrivals</p></Link> 
                </div>
               
                <div className="col-6 sidenavimgcol" >
                <Link to="/sale"><img src="sidenavpic3.jpg" className="sidenavpics"></img>
                  <p className="textonimg">Sale</p></Link> 
                </div>
                <div className="col-6 sidenavimgcol" >
                  <Link to="/brandfullpage" className="navlinks"> <img src="sidenavpic2.jpg" className="sidenavpics"></img>
                    <p className="textonimg">Brands</p>
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
        
  
        <div className="row rw" >
          <div className="col-md-3 col-sm-3 col-3 slider ">
            <i class="fa fa-sliders " aria-hidden="true" onClick={this.openNav}></i>
          </div>
          <div className=" col-lg-2 col-md-6 col-sm-6 col-6 logodiv">
            <Link to="/mainpage" ><img src="logo_transparent.png" className="pehnawaylogo px-lg-0 pt-2 ml-lg-3"></img></Link>
          </div>
          <div className="col-lg-8 navdiv">
            <ul className="navul mt-3">
            <Link to={{
             pathname:'/unstitched',
            
            }} className="navlinks"><li className="navli px-4" onMouseOver={() => this.hoverDiv("sidenavpic1.jpg")} onMouseOut={this.closeHoverDiv} >
                UNSTITCHED
                </li></Link>

          <Link to={{
             pathname:'/stitched',
         
            }} className="navlinks">      <li className="navli px-4" onMouseOver={() => this.hoverDiv("sidenavpic5.jpg")} onMouseOut={this.closeHoverDiv}>
                Stitched
</li></Link>
              <Link to={{
                pathname:'/newarrivals'
              }}className="navlinks"> 
              <li className="navli px-4" onMouseOver={() => this.hoverDiv("sidenavpic6.jpg")} onMouseOut={this.closeHoverDiv}>
                New arrivals
</li></Link>
<Link to={{
                pathname:'/sale'
              }}className="navlinks"> 
              <li className="navli px-4" onMouseOver={() => this.hoverDiv("sidenavpic3.jpg")} onMouseOut={this.closeHoverDiv}>
             SALE
</li></Link>
         
              <Link to="/brandfullpage" className="navlinks"><li className="navli px-4" onMouseOver={() => this.hoverBrandDiv("ak.png", "sp.png", "SN.png", "nl.png", "kd.png", "gul.png")} onMouseOut={this.closeHoverBrandDiv}>Brands</li></Link>

            </ul>

          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-3 ">
            <ul className="userbagul mt-lg-5 ">
              <li className="userbagli">
                <i className="fa fa-shopping-bag mx-md-4 mx-sm-3 " onClick={this.openCart}>
               {this.state.items===""?(<span className="itemno p-1">0</span>):
               (<span className="itemno p-1">{this.state.items}</span>)}</i>
                
              </li>
              <li className="userbagli">
               <Link to="/userregister" style={{color: 'inherit'}}> <i className="fa fa-user mx-md-3 mx-sm-2 "  
               onMouseEnter={this.registereddiv} ></i></Link>

              </li>
            </ul>
          </div>
        </div>

        <div id="hoverdiv" >
          <div className="row p-3" >
            <div className="col-lg-3">
              <img src="" className="hoverImg"></img>
            </div>

            <div className="col-lg-3">
              <ul className="hoverul">

                filter By Brands
        <hr className="hoverulhr"></hr>
                <li>
               Alkaram
        </li>
                <li>
                 Gul Ahmed
        </li>
                <li>
                Khaadi
        </li>
                <li>
                 Nishat
        </li>
                <li>
             Sana safinaz
        </li>
        <li>
            Sapphire
        </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="hoverul">

                filter By Category
        <hr className="hoverulhr"></hr>
                <li>
                  Shirt Shalwar
        </li>
                <li>
                  Shirt Shalwar dupatta
        </li>
                <li>
                  long shirt
        </li>
                <li>
                  kurti
        </li>
                <li>
                  fancy
        </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="hoverul">

                filter By Fabric
        <hr className="hoverulhr"></hr>
                <li>
                  Khaddar
        </li>
                <li>
                  kurti
        </li>
                <li>
                  poly viscose
        </li>
                <li>
                  medium silk
        </li>
                <li>
                  cross hatch
        </li>
                <li>
                  velvet
        </li>

              </ul>
            </div>
   
          </div>
        </div>

        <div id="brandhoverdiv" >
          <div className="row p-3" id="a">
            <div className="col-3">
              <img src="" className="brandpic1"></img>
            </div>
            <div className="col-3">
              <img src="" className="brandpic2"></img>
            </div>
            <div className="col-3">
              <img src="" className="brandpic3"></img>
            </div>
            <div className="col-3">
              <img src="" className="brandpic4"></img>
            </div>
            <div className="col-3">
              <img src="" className="brandpic5"></img>
            </div>
            <div className="col-3">
              <img src="" className="brandpic6"></img>
            </div>
          </div>
        </div>

<div className="userregistered" onMouseLeave={this.registereddivclose}>
 {sessionStorage.getItem('user')?(<div>
<p className="px-lg-4 px-md-4 px-sm-4 px-2 pt-3"><Link to="/signup" style={{color:'inherit'}}>
  <i class="fa fa-user-circle-o fa-2x pb-2" aria-hidden="true"></i>
<br></br>Welcome <span className="username">{this.state.user}!</span></Link></p>
<hr></hr>
<p className="px-lg-4 px-md-4 px-sm-4 px-2 pt-lg-3 pt-md-3 pt-sm-3 pt-2" onClick={this.signout}>Sign Out</p>
<hr></hr>
</div>): (<div>
<p className="px-lg-4 px-md-4 px-sm-4 px-2 pt-3"><Link to="/signup" style={{color:'inherit'}}>Create Account</Link></p>
<hr></hr>
<p className="px-lg-4 px-md-4 px-sm-4 px-2 pt-lg-3 pt-md-3 pt-sm-3 pt-2"><Link to="/userregister" style={{color:'inherit'}}>Login</Link></p>
<hr></hr>
</div>)}

</div>
        
      </div>

    )
  }

}
export default TopNav;








// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import  './main.css';

// class TopNav extends Component{


// componentDidMount(){
//   document.addEventListener('scroll', function() {
//     // When the event DOMContentLoaded occurs, it is safe to access the DOM

//     // When the user scrolls the page, execute myFunction
//     window.addEventListener('scroll', myFunction);
//     var header = document.getElementById("container");
// var sticky = header.offsetTop;
// window.onscroll = function() {myFunction()};





// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// })


// document.addEventListener('scroll', function() {

//   window.addEventListener('scroll', scrollFunction);

//   var mybutton = document.getElementById("myBtn");

//   window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// document.getElementById("myBtn").onclick = function
// topFunction(){


//     if(window.scrollY!=0)
//     {
//         setTimeout(function() {
//            window.scrollTo(0,window.scrollY-30);
//             topFunction();
//         }, 10);
//      }
//   }

// })

// }
//     render(){


//         return(

//             <div className="container-fluid" id='container' >
//                   <button   id="myBtn" title="Go to top"><i class="arrow up icon"></i></button>
//                {/* logo row */}
//                <div className="row">
//                   <div className="col">
//                  <Link to="/mainpage"> <center><img src="logo1.jpg" className="mainlogo"/></center></Link>

//                   </div>

//                </div>

//                   {/* sign in , register and cart row */}

//                 <div className="row" >
//                  <div className="col " id="signinpara"  >
//                      <ul style={{float:'right'}} >
//                         <li className="login-cart"  ><i class="user outline large icon"></i> &nbsp; &nbsp; </li>
//                         <li className="login-cart"><i class="shopping cart large icon"></i></li>

//                      </ul>
//                   </div>
//                    </div>

//                <nav className="navbar navbar-expand-lg navbar-light " >
//   <button  className="navbar-toggler navtogglebutton" type="button"  data-toggle="collapse"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"  ></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarNav"   >
//     <ul className="navbar-nav" >

//       <li class="nav-item" >
//         <p  > NEW ARRIVALS &nbsp; &nbsp;</p>


//       </li>
//       <li class="nav-item">
//         <p > UNSTITCHED &nbsp; &nbsp;</p>

//       </li>
//       <li class="nav-item">

//         <p > STITCHED &nbsp; &nbsp;</p>
//       </li>
//       <li class="nav-item">

//         <p >FANCY &nbsp; &nbsp;</p>
//       </li>
//       <li class="nav-item">

//           <p > KURTI &nbsp; &nbsp;</p>
//       </li>
//       <li class="nav-item">

//       <Link to="/brandfullpage" className="brandsLink"><p > BRANDS &nbsp; &nbsp;</p></Link>
//       </li>

//     </ul>
//   </div>
// </nav>


//               </div>

//         )
//     }

// }
// export default TopNav;

