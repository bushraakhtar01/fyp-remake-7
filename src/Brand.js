import React, { Component } from 'react';

import  './brand.css';

import {Link} from "react-router-dom";





class Brand extends Component{

componentDidMount(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0
}
    render(){
      

        return(
          
         <div className="container-fluid" >

        
            {/* breadcrumb */}
          
         <nav aria-label="breadcrumb" >
             <ol className="breadcrumb" style={{backgroundColor:'white'}}>
              <li className="breadcrumb-item"><Link to="/mainpage" className="breadlink">Home</Link></li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item active" aria-current="page">Brands</li>
               </ol>   
               <hr style={{marginTop:'-20px'}}></hr>
          
               </nav>
            {/* //   pink div */}
           <div className="container-fluid" >
              <div className="row " >
                 <div className="col" id="pinkcolumn"   >
                 <h1 className="headingbrands" > Shop By Brands  <hr className="linebrands" ></hr> </h1> 
                  </div>
             </div>
                 
             {/* paragraph */}
             <p className="parabrands">Pehnaway provides you a variety of clothing brands to shop according to your needs.</p>

                                 {/* brands div */}


               {/* Row A */}


            {/* 1st brand */}
      {/* <div className="container-fluid" > */}
         <div className="row brandsRow">
            <h1 className="alphabetheadingbrands">A </h1> 
            <hr className="alphabetlinebrands" ></hr>
         <div className="col-md-3 col-6"  >
         <div className="card brandspiccard"  >
          <img className="card-img-top" src="an.png" ></img>
         </div>
         <h3 className="brandspicheading">Agha Noor</h3>
         </div>

         {/* 2nd brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard">
         <img className="card-img-top" src="ak.png" ></img>
         </div>
         <Link to={{
           pathname:'/UI',
           props:   'http://localhost/sapphire/api/post/read.php',
           props1:   'http://localhost/sapphire/api/post/',
           props2:'alkaramUI.jpg'

        }}>
         <h3 className="brandspicheading" onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","https://pehnawaywomenclothing.000webhostapp.com/api/post/read.php ")
             localStorage.removeItem("coverImg")
             localStorage.setItem("coverImg","alkaramUI.jpg")
          }}>Alkaram</h3></Link>
         </div>

         {/* 3rd brand      */}
        <div className="col-md-3 col-6">
        <div className="card brandspiccard">
        <img className="card-img-top" src="aen.png" ></img>
       </div>
       <h3 className="brandspicheading">Asifa &amp; Nabeel</h3>
       </div>

       {/* 4th brand */}
      
      <div className="col-md-3 col-6">
      <div className="card brandspiccard">
      <img className="card-img-top" src="as.png" ></img>
      </div>
      <h3 className="brandspicheading">Asim Jofa</h3>
      </div>
            

         

      </div>
       
       {/* ROw B */}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">B </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="br.png" ></img>
         </div>
         <h3 className="brandspicheading">Bareeze</h3>
         </div>

         {/* 2nd brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard">
         <img className="card-img-top" src="bz.png" ></img>
         </div>
         <h3 className="brandspicheading">Bonanza</h3>
         </div>
         </div>

         {/* ROw C */}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">C </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard"  >
          <img className="card-img-top" src="ch.png" ></img>
         </div>
         <h3 className="brandspicheading">Charizma</h3>
         </div>

         {/* 2nd brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard">
         <img className="card-img-top" src="CO.png" ></img>
         </div>
         <h3 className="brandspicheading">Chen One</h3>
         </div>
         </div>

         {/* ROw D */}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">D </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="dn.png" ></img>
         </div>
         <h3 className="brandspicheading">Dhanak</h3>
         </div>
         </div>

           {/* ROw E */}
    
           <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">E </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="ed.png" ></img>
         </div>
         <h3 className="brandspicheading">Edenrobe</h3>
         </div>

               {/* 1s brand */}
               <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="eg.png" ></img>
         </div>
         <h3 className="brandspicheading">Ego</h3>
         </div>

               {/* 1s brand */}
               <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="et.png" ></img>
         </div>
         <h3 className="brandspicheading">Ethnic</h3>
         </div>
         </div>

          {/* ROw F */}
    
          <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">F </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="fs.png" ></img>
         </div>
         <h3 className="brandspicheading" >Edenrobe</h3>
         </div>
         </div>

           {/* ROw G */}
    
           <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">G </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="gn.png" ></img>
         </div>
         <h3 className="brandspicheading" >Generation</h3>
         </div>
               {/* 2nd brand */}
               <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="gul.png" ></img>
         </div>
         <Link to={{
           pathname:'/UI',
           props:   'http://localhost/sapphire/api/post/read.php',
           props1:   'http://localhost/sapphire/api/post/',
           props2:'gaUI.jpg'

        }}>
         <h3 className="brandspicheading" onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","https://pehnawaywomenclothing.000webhostapp.com/api/post/read.php ")
             localStorage.removeItem("coverImg")
             localStorage.setItem("coverImg","gaUI.jpg")
             }}>Gul Ahmed</h3></Link>
         </div>
         </div>

         {/* ROw J */}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">J </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="j.png" ></img>
         </div>
         <h3 className="brandspicheading" >Junaid Jamshed</h3>
         </div>
         </div>

         {/* ROw K */}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">K </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="kd.png" ></img>
         </div>
        <Link to={{
           pathname:'/UI',
           props:   'http://localhost/php_rest_myblog/api/post/read.php',
           props1:   'http://localhost/php_rest_myblog/api/post/',
           props2:'khaadiUI.jpg'

        }}> <h3 className="brandspicheading"  onClick={function(){
         localStorage.removeItem("url")
         localStorage.setItem("url","https://pehnaway78.000webhostapp.com/api/post/read.php ")
         localStorage.removeItem("coverImg")
             localStorage.setItem("coverImg","khaadiUI.jpg")
      }}>Khaadi</h3></Link>
         </div>
         </div>

         {/* ROw L*/}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">L</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="lm.png" ></img>
         </div>
         <h3 className="brandspicheading" >Lime Light</h3>
         </div>
         </div>

         
         {/* ROw M*/}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">M</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="mb.png" ></img>
         </div>
         <h3 className="brandspicheading" >Maria B</h3>
         </div>
               {/* 2nd brand */}
               <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="mf.png" ></img>
         </div>
         <h3 className="brandspicheading" className="brandspicheading">Motifz</h3>
         </div>
               {/* 3rd brand */}
               <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="ms.png" ></img>
         </div>
         <h3 className="brandspicheading" className="brandspicheading">Mausummery</h3>
         </div>
         </div>

           {/* ROw N*/}
    
           <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">N</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="nl.png" ></img>
         </div>  <Link to={{
           pathname:'/UI',
           props:   'http://localhost/sapphire/api/post/read.php',
           props1:   'http://localhost/sapphire/api/post/',
           props2:'niUI.jpg'

        }}>
         <h3 className="brandspicheading" onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","https://pehnaway1234.000webhostapp.com/api1/post/read.php")
             localStorage.removeItem("coverImg")
             localStorage.setItem("coverImg","niUI.jpg")
          }}>NishatLinen</h3></Link>
         </div>
         </div>

          {/* ROw O*/}
    
          <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">O</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="OT.png" ></img>
         </div>
         <h3 className="brandspicheading">Outfitters</h3>
         </div>
         </div>

         {/* ROw S*/}
    
         <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">S</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="sn.png"  ></img>
         </div>  <Link to={{
           pathname:'/UI',
           props:   'http://localhost/sapphire/api/post/read.php',
           props1:   'http://localhost/sapphire/api/post/',
           props2:  'sapphireUI.jpg'

        }}>
       
         <h3 className="brandspicheading" onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","https://pehnaway1234.000webhostapp.com/api/post/read.php")
             localStorage.removeItem("coverImg")
             localStorage.setItem("coverImg","sapphireUI.jpg")
          }}>Sana Safinaz</h3></Link>
         </div>
              {/* 2nd brand */}
              <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="SP.png" ></img>
         </div>
         <Link to={{
           pathname:'/UI',
           props:   'http://localhost/sapphire/api/post/read.php',
           props1:   'http://localhost/sapphire/api/post/',
           props2: 'sanaUI.jpg'

        }}>
         <h3 className="brandspicheading" onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","http://localhost/sapphire/api/post/read.php")
             localStorage.removeItem("coverImg")
             localStorage.setItem("coverImg","sanaUI.jpg")
          }}>Sapphire</h3></Link>
         </div>
            
         </div>

          {/* ROw W*/}
    
          <div className="row brandsRow">      
            <h1 className="alphabetheadingbrands">W</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card brandspiccard" >
          <img className="card-img-top" src="wd.png" ></img>
         </div>
         <h3  className="brandspicheading">Warda</h3>
         </div>
         </div>









                 
</div>


                 
                 
                

              {/* </div> */}

           </div>
   
      
        )
    }

}
export default Brand;