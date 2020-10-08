import React, { Component } from 'react';

import  './div.css';





class Div extends Component{


    render(){
        

        return(
          <div className="container-fluid"  >

            {/* Top trending */}

          <div className="row">
            <div className="col" >
              <h2 className="toptrendingheading">Top Trending</h2>
            </div>
           </div>

          {/* Choose the best */}

          <div className="row">
            
            <div className="col">
              <p className="choosebestpara">Choose the best, wear the elegance</p>
            </div>
            </div>

            {/* 1st row */}

            <div className="row" >

              {/* 1st img */}
              <div className="col-md-3 col-6 picstoptrending" >
              <div className="card"  >
            <img className="card-img-top" src="PicCarousel10.jpg"></img>
  
            </div>
              
              </div>
              {/* 2nd img */}
              <div className="col-md-3 col-6 picstoptrending">
              <div className="card" >
            <img className="card-img-top" src="PicCarousel1.jpg"></img>
  
            </div>
              
              </div>

            {/* 3rd img */}
            <div className="col-md-3 col-6 picstoptrending">
           
              <div className="card" >
            <img className="card-img-top" src="PicCarousel12.jpg"></img>
  
            </div>
              
              </div>
            
            
           
           {/* 4th img */}
          <div className="col-md-3 col-6 picstoptrending">
              <div className="card" >
            <img className="card-img-top" src="PicCarousel6.jpg"></img>
  
            </div>
              
              </div>
              </div>

             {/* 5th img */}

            <div className="row">
              <div className="col-md-3 col-6 picstoptrending">
              <div className="card" >
            <img className="card-img-top" src="PicCarousel2.jpg"></img>
  
            </div>
              
              </div>


             {/* 6th img */}
            <div className="col-md-3 col-6 picstoptrending">
           
              <div className="card" >
            <img className="card-img-top" src="PicCarousel7.jpg"></img>
  
            </div>
              
              </div>
            
            {/* 7th img */}
           
         
          <div className="col-md-3 col-6 picstoptrending">
              <div className="card" >
            <img className="card-img-top" src="PicCarousel11.jpg"></img>
  
            </div>
               
               {/* 8th img */}
              </div>
              <div className="col-md-3 col-6 picstoptrending">
              <div className="card" >
            <img className="card-img-top" src="PicCarousel9.jpg"></img>
  
            </div>
              
              </div>

          



          </div>































          </div>

   
      
        )
    }

}
export default Div;

// import React, { Component } from 'react';
// import './main.css';

// class Div extends Component{
//   render(){
//     return(
    
//     <div className="toptrendingdiv" >
//         {/* heading */}
//         <h3 id="headingtt" >Top Trending</h3>
//           {/* paragraph */}
//         <p id="paratt" >Choose the best, wear the elegance</p>
  
//              {/* Images */}
//         <div >
//       <div className="ui card"  id="pic1row1tt">
//         <div className="image">
//           <img src="PicCarousel12.jpg" />
//         </div>
//       </div>
//       <div className="ui card"  id="pic2row1tt">
//         <div className="image">
//           <img src="PicCarousel10.jpg" />
//         </div>
//       </div>
//       <div className="ui card"  id="pic3row1tt" >
//         <div className="image">
//           <img src="PicCarousel2.jpg" />
//         </div>
//       </div>
//       <div className="ui card"  id="pic4row1tt">
//         <div className="image">
//           <img src="PicCarousel7.jpg" />
//         </div>
//       </div>     
//        <div className="ui card"  id="pic1row2tt" >

//         <div className="image">
//           <img src="PicCarousel11.jpg" />
//         </div>
//       </div>
//       <div className="ui card"  id="pic2row2tt" >
//         <div className="image">
//           <img src="PicCarousel4.jpg" />
//         </div>
//       </div>
//       <div className="ui card"  id="pic3row2tt" >
//         <div className="image">
//           <img src="PicCarousel1.jpg" />
//         </div>
//       </div>
//       <div className="ui card"  id="pic4row2tt" >
//         <div className="image">
//           <img src="PicCarousel6.jpg" />
//         </div>
//       </div>
// </div>
 
        

  
//   </div>
  
//     );

// }
// }
// export default Div;