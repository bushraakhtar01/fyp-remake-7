import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import AdminUI from './AdminUI';


class Alkaram extends Component{

 
  constructor(props)
  {
  super(props); 
  this.state={
      brands: [{}],
      isEdit: false,
      isDelete: false,
 
      }
  }
  
  async componentDidMount(){
    if(!sessionStorage.getItem("userData")){
      this.props.history.push('/login')
  }else{
      const url="https://pehnawaywomenclothing.000webhostapp.com/api/post/read.php ";
      const response=await fetch(url);
      const data= await response.json();
     this.setState({brands:data.data});
    }
}


 





close(){
  const a=document.getElementsByClassName('adminsidenav')[0]
  a.style.display='none';
  const b=document.getElementById('imagecolid');
  b.style.display='block';

}


render(){
 
  const {brands} = this.state
  return(     
    <div>
                       
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
<div className="col-lg-10  adminpage" id="imagecolid">
<h1 className="adminheading pt-lg-5 pt-md-5 pt-sm-5 pt-4 px-5">Welcome to Alkaram Admin Pannel</h1>
<hr></hr>
<h2 className="adminparagraph px-5 pt-0">View all the brands available to pehnaway, their respective data and see user queries.</h2>


<div className="row px-lg-4 px-md-4 pt-lg-5 pt-md-5 pt-sm-5 pt-3">
  {this.state.brands.map(brand=>
<div className="col-lg-4 col-md-4 col-sm-6 col-6">
<img className="adminimages px-2 pb-4" src={"https://pehnawaywomenclothing.000webhostapp.com/api/post/" + brand.image}></img>
<div className="px-2 pb-5"> 
  <h4 className="recordssubheadings">{brand.name}</h4>
  <hr></hr>
  <h4 className="recordssubheadings">{brand.code}</h4>
  <hr></hr>
  <h4 className="recordssubheadings">{brand.category_name}</h4>
  <hr></hr>
  <h5 className="recordssmallheadings">{brand.color}</h5>
  <hr></hr>
  <h5 className="recordssmallheadings">{brand.material}</h5>
  <hr></hr>
  <h5 className="recordssmallheadings">{brand.size_type}</h5>
  <hr></hr>
  <h5 className="recordssmallheadings">PKR {brand.price}</h5>





  </div>
</div>
  )}
</div>
</div>
</div>

</div>

</div>

);
}

}
export default (Alkaram);


// import React, { Component } from 'react';

// import axios from 'axios';
// import {Link} from "react-router-dom";
// import AdminUI from './AdminUI';




// class Sanasafinaz extends Component{

 
//   constructor(props)
//   {
//   super(props); 
//   this.state={
//       brands: []
//       }
//   }

  
//   async componentDidMount(){

//     if(!sessionStorage.getItem("userData")){
        
//       this.props.history.push('/login')
//   }else{
//       const url="http://localhost/sanasafinaz/api/post/read.php";
//       const response=await fetch(url);
//       const data= await response.json();
//      this.setState({brands:data.data});
//     }
// }




// render(){

//   return(     
//     <div>
//       <AdminUI />
//     <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px'}}>
//         <div className="container">
            
           
//           <h1 className="display-4">Sana Safinaz</h1>
//           <hr class="my-4"></hr>
//           <p class="lead">Admin Not Allowed To Modify Sana Safinaz Records.</p>
//   <hr class="my-4"></hr>


//        </div>


//     </div>

//     <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px',  marginTop:'-20px'}}>
//         <div className="container">
            
//           <h1 className="display-6" style={{textAlign:'center',  letterSpacing:'2px'}}>Current Record</h1>
//           <p class="lead" style={{textAlign: 'center', color:'#e57373'}}>All the available data is shown below</p>
//           <hr class="my-7"></hr>
// <div>
//     {this.state.brands.map((brands,id)=>
//     <div className="ui link cards " style={{display: 'inline-block' ,  marginLeft: '50px'}} >
//       <div className="card " >
//              <div className="image">
//                <img src={"http://localhost/sanasafinaz/api/post/" + brands.image}/>
//              </div>
//        <div className="content" >
//             <div className="header">{brands.code}</div>
//                  <div className="meta">
//                      <a>{brands.name}</a>
//                   </div>
//                  <div className="description">
//                     {brands.color}
//                  </div>
//         </div>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">{brands.material}</li>
//           <li className="list-group-item">{brands.type}</li>
//           <li className="list-group-item">{brands.size_type}</li>
//           <li className="list-group-item">{brands.category_name}</li>
//           <li className="list-group-item" style={{textAlign: 'right', color: 'grey'}}><i className="money bill alternate icon large"></i>{brands.price}</li>
//         </ul>
        
    
//       </div>
//     </div> )
//     }
// </div> 


// </div>          
// </div>      
// </div>

// );
// }
// }


// export default (Sanasafinaz);


// import React, { Component } from 'react';

// import axios from 'axios';
// import {Link} from "react-router-dom";
// import AdminUI from './AdminUI';




// class Alkaram extends Component{

 
//   constructor(props)
//   {
//   super(props); 
//   this.state={
//       brands: []
//       }
//   }

  
//   async componentDidMount(){

//     if(!sessionStorage.getItem("userData")){
        
//       this.props.history.push('/login')
//   }else{
//       const url="http://localhost/php_rest_myblog/api/post/read.php";
//       const response=await fetch(url);
//       const data= await response.json();
//      this.setState({brands:data.data});
//     }
// }




// render(){

//   return(     
//     <div>
//       <AdminUI />
//     <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px'}}>
//         <div className="container">
            
           
//           <h1 className="display-4">Alkaram</h1>
//           <hr class="my-4"></hr>
//           <p class="lead">Admin Not Allowed To Modify Alkaram Records.</p>
//   <hr class="my-4"></hr>


//        </div>


//     </div>

//     <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px',  marginTop:'-20px'}}>
//         <div className="container">
            
//           <h1 className="display-6" style={{textAlign:'center',  letterSpacing:'2px'}}>Current Record</h1>
//           <p class="lead" style={{textAlign: 'center', color:'#e57373'}}>All the available data is shown below</p>
//           <hr class="my-7"></hr>
// <div>
//     {this.state.brands.map((brands,id)=>
//     <div className="ui link cards " style={{display: 'inline-block' ,  marginLeft: '50px'}} >
//       <div className="card " >
//              <div className="image">
//                <img src={"http://localhost/php_rest_myblog/api/post/" + brands.image}/>
//              </div>
//        <div className="content" >
//             <div className="header">{brands.code}</div>
//                  <div className="meta">
//                      <a>{brands.name}</a>
//                   </div>
//                  <div className="description">
//                     {brands.color}
//                  </div>
//         </div>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">{brands.material}</li>
//           <li className="list-group-item">{brands.type}</li>
//           <li className="list-group-item">{brands.size_type}</li>
//           <li className="list-group-item">{brands.category_name}</li>
//           <li className="list-group-item" style={{textAlign: 'right', color: 'grey'}}><i className="money bill alternate icon large"></i>{brands.price}</li>
//         </ul>
        
    
//       </div>
//     </div> )
//     }
// </div> 


// </div>          
// </div>      
// </div>

// );
// }
// }


// export default (Alkaram);
