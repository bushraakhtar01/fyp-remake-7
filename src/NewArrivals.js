import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
// import Footer from './footer';
import { Link } from "react-router-dom";
import MainNavBar from './MainNavBar';
import Footer from './Footer';

import './UI.css';


class NewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,

      currentPage: 0,
      brands: [{}],
      info: '',
      catg: '',
      max: '',
      min: '',
      price: '',
      img: '',
      name: '',
      code: '',
      brand: '',
      color: '',
      material: '',
      price: '',
      type: '',
      size: '',
      category: '',
      arrivals:'',
      brandName: '',
     specificCat:[{}],
     s:[{}],
  
      //   imgUrl:props.location.props1
    };

    // this.openFilter = this.openFilter.bind(this);
    // this.func = this.func.bind(this);
    // this.img = this.img.bind(this);
  }
  async componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
    const imgUrl = localStorage.getItem("url")
    var a = imgUrl.lastIndexOf("/")
    var b = imgUrl.slice(0, a + 1)
    this.setState({ imgUrl: b })
    const url = localStorage.getItem("url");
    const response = await fetch(url
      ,
      {
        method: 'GET',
        // mode: "no-cors",
        //  headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // }
      }

    );
    const data = await response.json();
    // console.log(response);
    this.setState({ brands: data.data });
    

  
    
 
    // inserting specific header category data

      (this.state.brands.map(brand=>(brand.arrival==="new") ? (this.state.specificCat.push(brand)):('hi')
    ))
    var a=this.state.specificCat.length;
    // var s=this.state.specificCat.slice(1,a);k
     this.setState({s:this.state.specificCat.slice(1,a)})

     
    
      

    this.setState({
      pageCount: Math.ceil(this.state.s.length / this.state.perPage),
    })
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;

    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    })
  };


  func = (level, name, minimum, maximum) => {
    this.setState({
      info: name,
      catg: level,
      min: parseInt(minimum),
      max: parseInt(maximum),
      offset: 0
    })


    const y = document.getElementById('imgcolumnsid');
    y.style.display = "block";

    const u = document.getElementById('filterbycolumnid');
    u.style.display = 'none';




  }

  img = (img, name, code, brand, color, material, price, type, category_name, size_type) => {
    this.setState({
      img: img,
      name: name,
      code: code,
      brand: brand,
      color: color,
      price: price,
      type: type,
      material: material,
      category: category_name,
      size: size_type


    })
    


  }

  openFilter = (e) => {

    // const a=document.getElementById('filterbuttonid');

    // a.addEventListener('click',function myFunc(){
    //     console.log('ssss');
    const u = document.getElementById('filterbycolumnid');
    u.style.display = 'block';
    //   u.style.zIndex+='9999';
    //   u.style.position="absolute";
    // u.style.background="white";





    const o = document.getElementById('imgcolumnsid');
    o.style.display = 'none'


    // })
  }

  closeFilter = () => {
    const y = document.getElementById('imgcolumnsid');
    y.style.display = "block";

    const u = document.getElementById('filterbycolumnid');
    u.style.display = 'none';

  }



  render() {
    const slice = this.state.s.slice(this.state.offset, this.state.offset + this.state.perPage);
    const type = this.state.s.filter(brand => (brand.type == this.state.info) || (brand.color == this.state.info) ||
      (brand.material == this.state.info) || (brand.category_name == this.state.info) || (brand.size_type == this.state.info) ||
      ((brand.price <= this.state.max) && (brand.price >= this.state.min)))

    const rows1 = type.length

    const filterSlice = type.slice(this.state.offset, this.state.offset + this.state.perPage);
    //  if(this.state.img!==""){
    //   return(
    //       <div>
    //           <ImgView  urlImg={urlImg} brands={this.state.brands} src={this.state.img}  name={this.state.name} brand= {this.state.brand} color={this.state.color}
    //           code={this.state.code} material={this.state.material} price={this.state.price} type={this.state.type}
    //           category={this.state.category} size={this.state.size}
    //           />
    //       </div>
    //   )        }

    return (

      <div>
        <MainNavBar/>
        {/* //  container
         */}
        <div className="container-fluid">
          {/* cover image */}
          <div className='row'>
            <div className='col topImage' >

            </div>
          </div>

          {/* breadcrumb */}

          <nav aria-label="breadcrumb" >
            <ol className="breadcrumb" >
              <li className="breadcrumb-item">Home</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item">Brands</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item active" aria-current="page">{this.state.s[0].brand}</li>
            </ol>
            <hr style={{ marginTop: '-20px' }}></hr>
          </nav>




          <div className='row'>
          
            {/* Filter By column */}
            <div className="col-lg-3 col-md-12 filterbycolumn" id="filterbycolumnid"  >
            <p id='filtercloseid' onClick={() => this.closeFilter()}>X</p>
                     {/* filter by brands */}
              <h4> Filter by Brands</h4>
                   <hr></hr>
              <ul className="filterbylist" id="filterbylistid">
             
<Link to="/stitched" className="navlinks"><li  onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","http://localhost/sapphire/api/post/read.php")
             window.location.reload(true)
          }} >Alkaram</li></Link>  
                <hr></hr>
              <Link to="/stitched" className="navlinks"><li  onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","https://pehnawaywomenclothing.000webhostapp.com/api1/post/read.php")
             window.location.reload(true)
          }} >Gul Ahmed</li></Link>  
                <hr></hr>
                <Link to="/stitched" className="navlinks"><li  onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","https://pehnaway78.000webhostapp.com/api/post/read.php")
             window.location.reload(true)
          }} >Khaadi</li></Link>  
                <hr></hr>
                <Link to="/stitched" className="navlinks"><li  onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","http://localhost/sapphire/api/post/read.php")
             window.location.reload(true)
          }} >Nishat</li></Link>  
                <hr></hr>
                <Link to="/stitched" className="navlinks"><li  onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","http://localhost/sapphire/api/post/read.php")
             window.location.reload(true)
          }} >Sana Safinaz</li></Link>  
                <hr></hr>
                <Link to="/stitched" className="navlinks"><li  onClick={function(){
             localStorage.removeItem("url")
             localStorage.setItem("url","http://localhost/sapphire/api/post/read.php")
             window.location.reload(true)
          }} >Sapphire</li></Link>  

                <hr></hr>

              </ul>
              {/* filter by category */}
          
              <h4> Filter by Category</h4>
              <hr></hr>
              <ul className="filterbylist" id="filterbylistid">
                <li onClick={() => this.func('category', 'shirt shalwar dupatta')}>Shirt Shalwar Dupatta</li>
                <hr></hr>
                <li onClick={() => this.func('category', 'shirtshalwar')}>Shirt Shalwar</li>
                <hr></hr>
                <li onClick={() => this.func('category', 'kurti')}>kurti</li>
                <hr></hr>
                <li onClick={() => this.func('category', 'longshirt')}>Long Shirt</li>
                <hr></hr>
                <li onClick={() => this.func('category', 'fancy')}>Fancy</li>
                <hr></hr>

              </ul>


              {/* filter by color */}
              <h4> Filter by Color</h4>
              <hr></hr>
              <ul className="filterbylist">
                <span class="dot" onClick={() => this.func('color', 'red')} style={{ backgroundColor: 'red' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'pink')} style={{ backgroundColor: 'pink' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'yellow')} style={{ backgroundColor: 'yellow' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'purple')} style={{ backgroundColor: 'purple' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'green')} style={{ backgroundColor: 'green' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'black')} style={{ backgroundColor: 'black' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'white')} style={{ backgroundColor: 'white' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'blue')} style={{ backgroundColor: 'blue' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'grey')} style={{ backgroundColor: 'grey' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'maroon')} style={{ backgroundColor: 'maroon' }}></span>&nbsp;&nbsp;&nbsp;
                 <span class="dot" onClick={() => this.func('color', 'beige')} style={{ backgroundColor: '#ffe0b2' }}></span>&nbsp;&nbsp;&nbsp;

                 </ul>

              {/* filter by fabric */}
              <h4> Filter by Fabric</h4>
              <hr></hr>
              <ul className="filterbylist">
                <li onClick={() => this.func('material', 'khaddar')}>Khaddar</li>
                <hr></hr>
                <li onClick={() => this.func('material', 'poly viscose')}>Poly Viscose</li>
                <hr></hr>
                <li onClick={() => this.func('material', 'medium silk')}>Medium Silk</li>
                <hr></hr>
                <li onClick={() => this.func('material', 'cross hatch')}>Cross Hatch</li>
                <hr></hr>
                <li onClick={() => this.func('material', 'velvet')}>Velvet</li>
                <hr></hr>

              </ul>
              {/* filter by Price */}
              <h4> Filter by Price</h4>
              <hr></hr>
              <ul className="filterbylist">
                <li onClick={() => this.func('price', '', '1000', '3000')}>1,000-3,000</li>
                <hr></hr>
                <li onClick={() => this.func('price', '', '3000', '5000')}>3,000-5,000</li>
                <hr></hr>
                <li onClick={() => this.func('price', '', '5000', '7000')}>5,000-7,000</li>
                <hr></hr>
                <li onClick={() => this.func('price', '', '7000', '9000')}>7,000-9,000</li>
                <hr></hr>
                <li onClick={() => this.func('price', '', '9000', '50000')}>Above 13,000</li>
                <hr></hr>

              </ul>

              {/* filter by Size */}
              <h4> Filter by Size</h4>
              <hr></hr>
              <ul className="filterbylist">

                <span className="filterbysizespan" onClick={() => this.func('size', 'extrasmall')}  >XS</span>&nbsp;&nbsp;&nbsp;
                   <span className="filterbysizespan" onClick={() => this.func('size', 'small')} >SM</span>&nbsp;&nbsp;&nbsp;
                   <span className="filterbysizespan" onClick={() => this.func('size', 'medium')} >M</span>&nbsp;&nbsp;&nbsp;
                   <span className="filterbysizespan" onClick={() => this.func('size', 'large')} >L</span>&nbsp;&nbsp;&nbsp;
                   <span className="filterbysizespan" onClick={() => this.func('size', 'extralarge')} >XL</span>&nbsp;&nbsp;&nbsp;



                 </ul>

            </div>

            {/* Image column */}

            {/* brand heading */}

            <div className="col-lg-9 imgcolumns  px-md-5 pr-4 " id="imgcolumnsid">
            <img src="newarrivalcover1.jpg" className="topImage"></img>

              <h2 className="brandheadingimgcol mb-0"  >{this.state.brands[0].brand}</h2>
              <h3 className="stitched_unstitched">New Arrivals</h3>

              <div className='row  pr-4 mt-0 '  >
                {/* sort by */}
                <div className='col-lg-6 col-md-12 '  >
                  <h3 className="sortbyheading">Sort by: <span className="sortbyspan">{this.state.catg}</span></h3>
                </div>

                {/* total items */}
                <div className='col-lg-6 col-md-10 col-9 mt-4'>
                  <div className="itemscalculator p-2">
                    {rows1 ? (
                      <p>Item(s) {rows1} of {this.state.s.length}</p>
                    ) : (
                        <p>Item(s) {this.state.s.length}</p>
                      )}

                  </div>
                </div>

                {/* filter button */}
                <div className=' col-md-2 col-3  mt-4 filterbuttoncol' id='filterbuttoncolid'    >
                  <button type="button" className="filterbutton btn btn-light" id='filterbuttonid' onClick={this.openFilter}>Filter</button>
                </div>
              </div>

              {/* brands Data */}

              <div className="container-fluid mt-3" >

                <div className="row mr-lg-1"  >
                  {
                    /* No result condition */

                    /* this is if condition */

                    this.state.catg && rows1 === 0 ? (
                      <div class="alert alert-primary noresultalert p-3" role="alert" >
                        <i class="bell icon large"></i> No results found of this selection

                      </div>

                    ) : (

                        /* if user has not clicked one of filtering options all api data will be shown otherwise filtered data will be shown */

                        /* this is if condition */

                        (this.state.catg ? (

                          filterSlice.map(brand => (
                            <div className='col-lg-4 col-md-4 col-6 pl-0 pb-5 pr-0'>

                              {/* Image */}
                              <Link to={{
                                pathname: '/imgView',
                                name: brand.name,
                                brand: (brand.brand),
                                img: (this.state.imgUrl + brand.image),
                                code: brand.code,
                                color: brand.color,
                                material: brand.material,
                                price: brand.price,
                                type: brand.type,
                                category_name: brand.category_name,
                                size_type: brand.size_type,
                                brands: this.state.brands,
                                imgUrl: this.state.imgUrl



                              }}> 
                               <img className="brandsdataimg" src={this.state.imgUrl + brand.image}
                              //    onClick={() =>this.img(this.state.imgUrl
                              //    + brand.image ,(brand.name),(brand.code),(brand.brand),
                              //    (brand.color) ,(brand.material ),(brand.price),  (brand.type),
                              //    (brand.category_name) ,(brand.size_type)
                              //   )}
                              ></img><p className="newArrTag">New </p></Link>
                              <div className="row">
                                <div className="col-lg-7 col-md-7 col-12">
                                  <p className="brandsdatacategory mt-2"> {brand.category_name} </p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-12 " >
                                  <p className="brandsdataprice">PKR {brand.price}</p>
                                </div>
                              </div>
                              <div className="brandsdatacolor mt-3" style={{ backgroundColor: `${brand.color}` }}></div>

                            </div>



                          )


                          )


                        ) : (
                            //   this is else condition
                            slice.map(brand =>
                              <div className='col-lg-4 col-md-4 col-6 pl-0 pb-5 pr-0'>

                                {/* Image */}
                                <Link to={{
                                  pathname: '/imgView',
                                  name: brand.name,
                                  brand: (brand.brand),
                                  img: (this.state.imgUrl + brand.image),
                                  code: brand.code,
                                  color: brand.color,
                                  material: brand.material,
                                  price: brand.price,
                                  type: brand.type,
                                  category_name: brand.category_name,
                                  size_type: brand.size_type,
                                  brands: this.state.brands,
                                  imgUrl: this.state.imgUrl,
                                  quantity:brand.quantity,
                                  sale:brand.sale


                                }}>
                                  <img className="brandsdataimg" src={this.state.imgUrl + brand.image}
                                  //  onClick={() =>this.img(this.state.imgUrl
                                  //  + brand.image ,(brand.name),(brand.code),(brand.brand),
                                  //  (brand.color) ,(brand.material ),(brand.price),  (brand.type),
                                  //  (brand.category_name) ,(brand.size_type)
                                  // )}
                                  ></img><p className="newArrTag">New </p></Link>
                                <div className="row">
                                  <div className="col-lg-7 col-md-7 col-12">
                                    <p className="brandsdatacategory mt-2"> {brand.category_name} </p>
                                  </div>
                                  <div className="col-lg-5 col-md-5 col-12 " >
                                    <p className="brandsdataprice">PKR {brand.price}</p>
                                  </div>
                                </div>
                                <div className="brandsdatacolor mt-3" style={{ backgroundColor: `${brand.color}` }}></div>
                              </div>
                            )
                          )


                        )

                      )
                  }



                </div>
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                 />





              </div>


              <hr className="brandsdatahr "></hr>
              {/* 
                      {
                          this.state.info ? (
                              <p>ho</p>
                          ):( <p>ko</p>)
                      } */}
            </div>



          </div>

        </div>


<Footer/>
      </div>


    );
  }
}


export default NewArrivals;






// import React, { Component } from 'react';
// import MainNavBar from './MainNavBar';
// import Footer from './Footer';
//  import {Link} from "react-router-dom";
// import ImgView from "./ImgView";
// class KhaadiUI extends Component{

//     constructor(props){
//         super(props)
//         this.state={

//             brands:[],
//            info:''  ,
//            catg:''  ,
//            max:'',
//            min:'' ,
//            price:'',
//            img:'',
//            name:'',
//            code:'',
//            brand:'',
//            color:'',
//            material:'',
//            price:'',
//            type:'',
//            size:'',
//            category:'', 
//            url:props.location.props,
//            imgUrl:props.location.props1

//         }
//         var c=props.location.props1;
//               console.log(c)
//     } 
//     async componentDidMount(){

//         //    this.setState({url:c})
//         //    console.log(this.state.url)
//           const url=this.state.url;

//            console.log(this.state.url)

//           const response=await fetch(url);
//           const data= await response.json();
//          this.setState({brands:data.data});
//          console.log(this.state.brands)



//     }

//     func = (level,name,minimum,maximum) => {
//         this.setState({
//             info: name,
//             catg: level,
//             min: parseInt(minimum),
//             max: parseInt(maximum)     
//         })  

//          }

//     img =(img,name,code,brand,color,material,price,type,category_name,size_type) =>{
//         this.setState({
//             img: img,
//             name: name,
//             code: code,
//             brand: brand,
//             color: color,
//             price: price,
//             type: type,
//             material: material,
//             category: category_name,
//             size: size_type


//         })
//         console.log(this.state.type);

//     }





//     render(){

//         const type=this.state.brands.filter(brand => (brand.type == this.state.info) || (brand.color == this.state.info)||
//          ( brand.material == this.state.info) ||(brand.category_name == this.state.info )||( brand.size_type == this.state.info)||
//         ((brand.price <= this.state.max)&&(brand.price >= this.state.min)))
//         const rows1=type.length


//         if(this.state.img!==""){
//             return(
//                 <div>
//                     <ImgView src={this.state.img}  name={this.state.name} brand= {this.state.brand} color={this.state.color}
//                     code={this.state.code} material={this.state.material} price={this.state.price} type={this.state.type}
//                     category={this.state.category} size={this.state.size}
//                     />
//                 </div>
//             )        }




//         return(
//             <div>
//                 <MainNavBar/>
//             <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'white',height:'5400px',width:'101%',borderStyle:'solid',borderColor:'#bdbdbd'}}>
//             <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'white',marginLeft:'270px',marginTop:'-50px',position:'absolute'}}>

//             <div class="ui breadcrumb" style={{marginLeft:'-5px',marginTop:'-90px',backgroundColor:'white'}}>
//             <Link to="/mainpage">Home</Link>
//             <i class="right angle icon divider"></i>
//             <Link className="section" to="/BrandFullPage">Brands</Link> 
//             <i class="right angle icon divider"></i>
//             <div class="active section">Khaadi</div>
//           </div>
//           <hr style={{borderWidth:'2px',width:'91%',marginLeft:'10px',marginTop:'-30px'}}></hr>
//           <h1 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'15px'}}>Khaadi</h1>
//         <p style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'10px',fontSize:'15px'}}>Items {rows1} of {this.state.brands.length} total</p>
//         <hr style={{borderWidth:'2px',width:'91%',marginLeft:'10px',marginTop:'10px'}}></hr>


//              <div className="ui four column doubling stackable grid container ">
//            {this.state.brands.filter(brand =>(brand.type == this.state.info )||( brand.color == this.state.info)||
//            ( brand.material == this.state.info) ||(brand.category_name == this.state.info )||( brand.size_type == this.state.info)||
//            ((brand.price <= this.state.max)&&(brand.price >= this.state.min)  )
//            ).map(filteredBrand => (
//             <div className="column">
//                 <div className="ui card" >
//                 <div className="image" >
//                 { <img src={this.state.imgUrl + filteredBrand.image}  onClick={() =>this.img(this.state.imgUrl 
//                 + filteredBrand.image ,(filteredBrand.name),(filteredBrand.code),(filteredBrand.brand),
//                 (filteredBrand.color) ,(filteredBrand.material ),(filteredBrand.price),  (filteredBrand.type),
//                 (filteredBrand.category_name) ,(filteredBrand.size_type)
//                )} />
//                         }
//                     </div>
//                     </div>
//                     <div >
//                    <center> <p style={{textTransform:'capitalize',fontSize:'18px',fontFamily:'helvatica'}}> {filteredBrand.brand }
//                     &nbsp; {filteredBrand.material}  &nbsp; {filteredBrand.category_name} &nbsp; {filteredBrand.type} 
//                     &nbsp; {filteredBrand.color}</p></center>

//                    <center><h3 style={{fontFamily:'helvatica',marginTop:'8px'}}><strong>PKR {filteredBrand.price}</strong></h3></center> 
//                    <hr></hr>
//                         </div>
//                  </div>
//               ))}
//                 </div>


//                 </div>

//                 <div style={{marginTop:'-58px',borderStyle:'solid',borderColor:'#bdbdbd',marginLeft:'-10px',width:'20%',height:'5380px'}}>
//                 <h1 style={{marginLeft:'10px',fontFamily:'helvatica'}}>Khaadi</h1>
//               <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>
//               <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PIECE</h3>

//               <div style={{width:'80%',marginLeft:'10px'}}>
//               <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//           <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575' }} onClick={() => this.func('type','1piece')} >1 Piece</h3>    

//           <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//           <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','2piece')}>2 Piece</h3>    

//               <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//           <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','3piece')}>3 Piece</h3>    
//           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>

//                   </div>

//               <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>COLOR</h3>
//               <div style={{ width:'90%',marginLeft:'10px'}}>
//                   <div style={{backgroundColor:'black',display:'inline-block',marginLeft:'10px',width:'20%',height:'5vh'}} onClick={() => this.func('color','black')}>b</div>
//                   <div style={{backgroundColor:'pink',color:'pink',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','pink')}>p</div>
//                   <div style={{backgroundColor:'blue',color:'blue',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','blue')}>b</div>
//                   <div style={{backgroundColor:'yellow',color:'yellow',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','yellow')}>y</div>
//                   <div style={{backgroundColor:'red',color:'red',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','red')}>r</div>
//                   <div style={{backgroundColor:'green',color:'green',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','green')}>g</div>
//                   <div style={{backgroundColor:'maroon',color:'maroon',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','maroon')}>m</div>
//                   <div style={{backgroundColor:'purple',color:'purple',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','purple')}>p</div>
//                   <div style={{backgroundColor:'grey',marginLeft:'10px',color:'grey',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','grey')}>g</div>
//                   <div style={{backgroundColor:'#ffe0b2',color:'#ffe0b2',borderColor:'black',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color',
//                   'beige')}>	
//                   b</div>

//               </div>

//               <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//               <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PRICE</h3>

//               <div style={{width:'80%',marginLeft:'10px'}}> 
//           <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  
//                   onClick={() => this.func('price','','1000','3000')}>1,000-3,000</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}
//                    onClick={() => this.func('price','','3000','5000')}>3,000-5,000</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}
//                    onClick={() => this.func('price','','5000','7000')}>5,000-7,000</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} 
//                    onClick={() => this.func('price','','7000','9000')}>7,000-9,000</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} 
//                    onClick={() => this.func('price','','10000','15000')}>Above 13,000</h3>
//                   <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//            </div>

//            <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>FABRIC</h3>
//            <div style={{width:'80%',marginLeft:'10px'}}>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//           <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}  onClick={() => this.func('material','cambric')}>Cambric</h3>    
//           <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('material','khaddar')}>Khaddar</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','cross hatch')}>Cross Hatch</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','poly viscose')}>Poly Viscose</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','medium silk')}>Medium Silk</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','velvet')}>Velvet</h3>
//                   <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//            </div>

//            <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>SIZE</h3>
//            <div style={{width:'80%',marginLeft:'10px'}}>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//           <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('size_type','extrasmall')}>Extra Small</h3>    
//           <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','small')}>Small</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','medium')}>Medium</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','large')}>Large</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','extralarge')}>Extra Large</h3>
//                   <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//            </div>

//            <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>Category</h3>
//            <div style={{width:'80%',marginLeft:'10px'}}>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//           <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('category_name','kurti')}>Kurti</h3>    
//           <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','shirtshalwar')}>Shirt Shalwar</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','fancy')}>Fancy</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','longshirt')}>Long Shirt</h3>
//                   <img src="arrow.png"
//                    style={{width:"10px"}}></img>
//                   <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','shirt shalwar dupatta')}>Shirt Shalwar Dupatta</h3>
//                   <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>

//           </div>
//           </div>

//              <Footer/>
//          </div>
//          </div>
//         )
//     }
// }
// export default KhaadiUI;
























//      //     <div >

//         //     <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'red', width:'90%',marginTop:'80px',marginLeft:'300px',position:'absolute'}}>

//         //   <div class="ui breadcrumb" >
//         //     <a class="section">Home</a>
//         //     <i class="right angle icon divider"></i>
//         //     <a class="section">Store</a>
//         //     <i class="right angle icon divider"></i>
//         //     <div class="active section">T-Shirt</div>
//         //   </div>

//         //       {this.state.brands.filter(brand => brand.type == this.state.info).map(filteredBrand => (
//         //         <div className="ui link cards " style={{display: 'inline-block' ,  marginLeft: '50px'}} >
//         //         <div className="card " >
//         //                <div className="image" style={{flex:'33.33%'}}>
//         //                  <img src={this.state.imgUrl+ filteredBrand.image}/>
//         //                </div>
//         //          <div className="content" >
//         //               <div className="header">{filteredBrand.code}
//         //               </div>
//         //                    <div className="meta">
//         //                        <a>{filteredBrand.name}</a>
//         //                     </div>
//         //                    <div className="description">
//         //                       {filteredBrand.color}
//         //                    </div>
//         //           </div>
//         //           <ul className="list-group list-group-flush">
//         //             <li className="list-group-item">{filteredBrand.material}</li>
//         //             <li className="list-group-item">{filteredBrand.type}</li>
//         //             <li className="list-group-item">{filteredBrand.size_type}</li>
//         //             <li className="list-group-item">{filteredBrand.category_name}</li>
//         //             <li className="list-group-item" style={{textAlign: 'right', color: 'grey'}}><i className="money bill alternate icon large"></i>{filteredBrand.price}</li>
//         //           </ul>


//         //         </div>

//         //   </div>
//         //       ))}
//         //   {this.state.brands.filter(brand => brand.color == this.state.info).map(filteredBrand => (
//         //       <li>
//         //           {filteredBrand.color}
//         //       </li>
//         //   ))}
//         //   </div>
//         //    <div className="jumbotron jumbotron-fluid" style={{ width:'20%',marginLeft:'10px',borderStyle:'solid',borderWidth:'1px',
//         //    borderColor:'#bdbdbd',height:'auto',minHeight:'250vh'}}>
//         //       <h1 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>Khaadi</h1>
//         //       <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>





//         //       <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PIECE</h3>

//         //       <div style={{width:'80%',marginLeft:'10px'}}>
//         //       <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575' }} onClick={() => this.func('type','1piece')} >1 Piece</h3>    

//         //   <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','2piece')}>2 Piece</h3>    

//         //       <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','3piece')}>3 Piece</h3>    
//         //   <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>

//         //           </div>

//         //       <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>COLOR</h3>
//         //       <div style={{ width:'90%',marginLeft:'10px'}}>
//         //           <div style={{backgroundColor:'black',display:'inline-block',marginLeft:'10px',width:'20%',height:'5vh'}} onClick={() => this.func('color','black')}>black</div>
//         //           <div style={{backgroundColor:'pink',color:'pink',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','pink')}>pink</div>
//         //           <div style={{backgroundColor:'blue',color:'blue',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','blue')}>blue</div>
//         //           <div style={{backgroundColor:'yellow',color:'yellow',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','yellow')}>yellow</div>
//         //           <div style={{backgroundColor:'red',color:'red',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','red')}>red</div>
//         //           <div style={{backgroundColor:'green',color:'green',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','green')}>green</div>
//         //           <div style={{backgroundColor:'maroon',color:'maroon',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','maroon')}>maroon</div>
//         //           <div style={{backgroundColor:'purple',color:'purple',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','purple')}>purple</div>
//         //           <div style={{backgroundColor:'grey',marginLeft:'10px',color:'grey',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','grey')}>grey</div>
//         //           <div style={{backgroundColor:'#ffe0b2',color:'#ffe0b2',borderColor:'black',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color',
//         //           'beige')}>	
//         //           beige</div>

//         //       </div>

//         //       <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//         //       <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PRICE</h3>

//         //       <div style={{width:'80%',marginLeft:'10px'}}>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Below 1,000</h3>    
//         //   <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>1,000-3,000</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>4,000-6,000</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>7,000-9,000</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>10,000-12,000</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Above 13,000</h3>
//         //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//         //    </div>

//         //    <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>FABRIC</h3>
//         //    <div style={{width:'80%',marginLeft:'10px'}}>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Cambric</h3>    
//         //   <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Khaddar</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Cross Hatch</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Poly Viscose</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Medium Silk</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Velvet</h3>
//         //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//         //    </div>

//         //    <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>SIZE</h3>
//         //    <div style={{width:'80%',marginLeft:'10px'}}>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Extra Small</h3>    
//         //   <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Small</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Medium</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Large</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Extra Large</h3>
//         //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
//         //    </div>

//         //    <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>Category</h3>
//         //    <div style={{width:'80%',marginLeft:'10px'}}>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Kurti</h3>    
//         //   <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Shirt Shalwar</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Fancy</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Long Shirt</h3>
//         //           <img src="arrow.png"
//         //            style={{width:"10px"}}></img>
//         //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Shirt Shalwar Dupatta</h3>
//         //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>



//         //   </div>




//         //    </div>



//         //   </div>