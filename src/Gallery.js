

import React, { Component } from 'react';
import './gallery.css';




class Gallery extends Component{


    render(){
        

        return(
          <div className="container-fluid" >

              {/* Gallery Heading */}
              <div className="row">
                <div className="col" id="gallery">
                    <h2 className="galleryHeading">
                        GALLERY
                        <hr className="galleryLine"></hr>
                    </h2>
                </div>
                </div>



                {/* cards */}
                <div className="row" style={{padding:'3%'}} >
                    <div className="col-md-3" >
                    <div className="card" className="gallerycard"  >
                     <img className="card-img"  src="khaadigallery.png"  ></img>
                     <h3 className="collectionheading" >KHAADI COLLECTION</h3>
  
                     </div>

                    </div>
                    <div className="col-md-3"   >
                    <div className="card"  className="gallerycard" >
                     <img className="card-img"  src="sapphiregallery1.jpg"  ></img>
                     <h3 className="collectionheading" >SAPPHIRE COLLECTION</h3>
                     </div>

                   </div>

                   <div className="col-md-3"  >
                   <div className="card" className="gallerycard"  >
                     <img className="card-img"  src="nishatgallery1.jpg"  ></img>
                     <h3 className="collectionheading" >NISHAAT COLLECTION</h3>
                     </div>

                   </div>
                   <div className="col-md-3"  >
                   <div className="card" className="gallerycard"  >
                     <img className="card-img"  src="satrangigallery1.jpg"  ></img>
                     <h3 className="collectionheading" >BONANZA COLLECTION</h3>
                     </div>

                   </div>

                </div>
            


              

        


          































          </div>

   
      
        )
    }

}
export default Gallery;


// import React, { Component } from 'react';
// import './main.css';

// class Gallery extends Component{
//   render(){
// return(

      
//     <div id="gallerydiv">
//       {/* heading */}
//     <h3 id="headinggd">GALLERY</h3>
//      {/* images */}

//     <div className="ui card" id="card1gd" >
//         <div className="ui slide masked reveal image" id="cardgd1" >
//           <img src="khaadigallery1.jpg" className="visible content" />
//           <img src="khaadigallery2.jpg" className="hidden content" />
//         </div>
//         <div className="content" id="contentgd1">
//         <a className="header"id="headergd1" >KHAADI COLLECTION 2019</a>
//         <hr ></hr>
//         <div className="meta">
//           <p className="date" >Bring Colors to summer with the latest colorful designs, Hit the summer with colors.</p>
//         </div>
//       </div>
//       </div>

//       <div className="ui card" id="card2gd" >
//         <div className="ui slide masked reveal image" id="cardgd2">
//           <img src="sapphiregallery1.jpg" className="visible content"  />
//           <img src="sapphiregallery2.jpg" className="hidden content" />
//         </div>
//         <div className="content" id="contentgd2">
//         <a className="header"id="headergd2" >SAPPHIRE COLLECTION 2019</a>
//         <hr ></hr>
//         <div className="meta">
//           <span className="date"  >Wear the elegant designs of your favourite outlet in this summer.</span>
//         </div>
//       </div>
//       </div>
//   <div className="ui card" id="card3gd" >
//         <div className="ui slide masked reveal image" id="cardgd3">
//           <img src="a1.jpg" className="visible content" />
//           <img src="a2.jpg" className="hidden content" />
//         </div>
        
//         <div className="content" id="contentgd3">
//         <a className="header" id="headergd3">ALKARAM COLLECTION 2019</a>
//         <hr ></hr>
//         <div className="meta">
//           <span className="date">Wear the most beautiful and comfy stuff on your occassions.</span>
//         </div>
//       </div>
//       </div>
//       <div className="ui card" id="card4gd" >
//         <div className="ui slide masked reveal image" id="cardgd4">
//           <img src="nishatgallery1.jpg" className="visible content" />
//           <img src="nishatgallery2.jpg" className="hidden content" />
//         </div>
//         <div className="content" id="contentgd4">
//         <a className="header" id="headergd4"  >NISHAAT LUXURY 2019</a>
//         <hr ></hr>
//         <div className="meta">
//           <span className="date" >Festive Collection has embrace engaging designs to enlighten your heartist events.</span>
//         </div>
//       </div>
//       </div>
//       </div>
 
// );
//   }
// }
// export default Gallery;
// {/* 
// <div className = "row" style ={{display: 'flex'}}>
// <div className="column" style={{  flex: '33.33%'}}>
//     <div className="ui card" style={{margin:'50px 0 0 100px',width:'20%'}}>
//       <div className="ui slide masked reveal image"  >
//         <img src="khaadigallery1.jpg" className="visible content" />
//         <img src="khaadigallery2.jpg" className="hidden content" />
//       </div>
//       <div className="content" style={{width:"40vh", textAlign:"center"}}>
//         <a className="header"  style={{color:"#D79922"}}>KHAADI SUMMER 2019</a>
//         <hr ></hr>
//         <div className="meta">
//           <span className="date" >Bring Colors to summer with the latest colorful designs, Hit the summer with colors.</span>
//         </div>
//       </div>
//     </div>
//       </div>

// </div>

//         <div className="ui card" style={{margin:'10px 0 0 150px',width:'20%'}}>
     
//       <div className="content" style={{width:"40vh", textAlign:"center"}}>
//         <a className="header"  style={{color:"#F13C20"}}>BONANZA SATRANGI 2019</a>
//         <hr ></hr>
//         <div className="meta">
//           <span className="date" style={{color:"grey"}}>Wear the elegant designs of your favourite outlet in this summer.</span>
//         </div>
//       </div>
//       <div className="ui slide masked reveal image"  >
//         <img src="satrangigallery1.jpg" className="visible content" />
//         <img src="satrangigallery2.jpg" className="hidden content" />
//       </div>
//     </div>
// </div>
//       );
//   }
// }

// export default Gallery;


  
//  */}


// {/* 
// <div className="column" style={{  flex: '33.33%',
//   padding: '5px'}}>
    

//     <div className="ui card" style={{margin:'50px 0 0 100px'}}>
//       <div className="ui slide masked reveal image"  >
//         <img src="alkaramgallery1.jpg" className="visible content" />
//         <img src="alkaramgallery2.jpg" className="hidden content" />
//       </div>
//       <div className="content" style={{width:"40vh", textAlign:"center"}}>
//         <a className="header" style={{color:"#C3073F"}} >ALKARAM COLLECTION 2018</a>
//         <hr ></hr>
//         <div className="meta" >
//           <span className="date" style={{color:"grey"}}>Festive Collection has embrace engaging designs to enlighten your heartist events. </span>
//         </div>
//       </div>
// </div> 
// </div> */}
// {/* 
// // </div>
// // </div> */}
