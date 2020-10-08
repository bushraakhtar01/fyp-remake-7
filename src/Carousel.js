import React, { Component } from 'react';

import  './carousel.css';





class Carousel extends Component{



    render(){
        

        return(
    


        //   Indicators
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol> */}
      {/* 1st slide */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="mainpagepic1.png" alt="First slide" />
          {/* <div className="carousel-caption" >
            <h3 className="h3-responsive h" >Plethora Of Brands</h3>
            <p className='revitalizepara'>Revitalize Your Looks</p>
          </div>  */}
          
        </div>
        {/* 2nd slide */}
        <div className="carousel-item" >
          <img className="d-block w-100" src="mainpagepic2.png" alt="Second slide" />
          {/* <div className="carousel-caption" s>
            <h3 className="h3-responsive h" >Plethora Of Brands</h3>
            <p className='revitalizepara'>Revitalize Your Looks</p>
          </div>  */}
       
        </div>
        {/* 3rd slide */}
        <div className="carousel-item">
          <img className="d-block w-100" src="mainpagepic3.jpg" alt="Third slide" />
          {/* <div className="carousel-caption" s>
            <h3 className="h3-responsive h" >Plethora Of Brands</h3>
            <p className='revitalizepara'>Revitalize Your Looks</p>
          </div>  */}
       
        </div>
      </div>
      {/* controllers */}
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
  
  
    </div>
      
        )
    }

}
export default Carousel;


// import React,{Component} from 'react';
// import "./main.css";

// class Carousel extends Component{

// render(){
//   return(
  

     
//     <div id="carousel-example-2" className=" carousel slide carousel-fade" data-ride="carousel" className="carouseldiv" >
//       {/*Indicators*/}
     
//       <ol className="carousel-indicators"  >
//         <li data-target="#carousel-example-2" data-slide-to={0} className="active"  />
//         <li data-target="#carousel-example-2" data-slide-to={1}  />
//         <li data-target="#carousel-example-2" data-slide-to={2}  />
//       </ol>
   
//       {/*/.Indicators*/}
//       {/*Slides*/}
//       <div className="carousel-inner" role="listbox" >
//         <div className="carousel-item active" >
//           <div className="view">
//             <img className="d-block w-100" src="mainpagepic1.png" alt="First slide" />
//             <div className="mask rgba-black-slight-light" />
//           </div>
//        <div className="carousel-caption" >
//             <h3 className="h3-responsive" >Plethora Of Brands</h3>
//             <p>Revitalize Your Looks</p>
//           </div> 
        
        
//         </div>
//         <div className="carousel-item" >
//           {/*Mask color*/}
//           <div className="view">
//             <img className="d-block w-100" src="mainpagepic2.png" alt="Second slide" />
//             <div className="mask rgba-black-slight-light" />
//           </div>
//           <div className="carousel-caption">
//             <h3 className="h3-responsive"  >Plethora Of Brands</h3>
//             <p>Revitalize Your Looks</p>
//           </div>
//         </div>
//         <div className="carousel-item"  >
//           {/*Mask color*/}
//           <div className="view">
//             <img className="d-block w-100" src="mainpagepic3.jpg" alt="Third slide" />
//             <div className="mask rgba-black-slight" />
//           </div>
//           <div className="carousel-caption">
//             <h3 className="h3-responsive">Plethora Of Brands</h3>
//             <p>Revitalize Your Looks</p>
//           </div>
//         </div>
//       </div>
//       {/*/.Slides*/}
//       {/*Controls*/}
//       {/* <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev" >
//         <span className="carousel-control-prev-icon" aria-hidden="true" />
//         <span className="sr-only">Previous</span>
//       </a>
//       <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true" />
//         <span className="sr-only">Next</span>
//       </a> */}
//       {/*/.Controls*/}
//     </div>

//   );
// }


// }
// export default Carousel;

      

















     
// //       <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
// //       <div className="carousel-inner">
// //         <div className="carousel-item active" style={{height:'60vh',marginLeft:'82px'}}>
// //           <img className="d-block w-100" src="mainpagepic1.png" alt="First slide" />
// //           <div class="carousel-caption d-none d-md-block" style={{marginLeft:'-150px'}}>
// //               <h2>Plethora Of Brands</h2>
// //                 <p>Embrace the Elegance</p>
// //           </div>
// //         </div>

// //         <div className="carousel-item"  style={{height:'60vh',marginLeft:'82px'}}>
// //           <img className="d-block w-100" src="mainpagepic2.png" alt="Second slide" />
// //           <div class="carousel-caption d-none d-md-block" style={{marginLeft:'-150px'}}>
// //               <h2>Plethora Of Brands</h2>
// //                 <p>Embrace the Elegance</p>
// //           </div>
// //         </div>
    
// //         <div className="carousel-item"  style={{height:'60vh',marginLeft:'82px'}}>
// //           <img className="d-block w-100" src="mainpagepic3.jpg" alt="Third slide" />
// //           <div class="carousel-caption d-none d-md-block" style={{marginLeft:'-150px'}}>
// //               <h2>Plethora Of Brands</h2>
// //                 <p>Embrace the Elegance</p>
// //           </div>
// //         </div>
// //         </div>

// //       <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
// //         <span className="carousel-control-prev-icon" aria-hidden="true" />
// //         <span className="sr-only">Previous</span>
// //       </a>
// //       <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
// //         <span className="carousel-control-next-icon" aria-hidden="true" />
// //         <span className="sr-only">Next</span>
// //       </a>
// //       <ol class="carousel-indicators">
// //     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
// //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
// //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
// //   </ol>

  
// //     </div>
// //     );
    