import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import UI from './UI';
import {Link} from "react-router-dom";
import MainNavBar from './MainNavBar';
import Footer from './Footer';
import axios from 'axios';
import './UI.css';

class ImgView extends Component{
    constructor(props){
        super(props);
        this.state={
            urlImg:'',
            imgUrl:props.location.imgUrl,
            brands:props.location.brands,
            offset:0,
            perPage:4,
            img:'',
            name:'',
            code:'',
            brand:'',
            color:'',
            material:'',
            price:'',
            type:'',
            size:'',
            category:'',
            quantity:'',
            sale:'',
            propsimg:props.location.img,
            propsname:props.location.name,
            propscode:props.location.code,
            propsbrand:props.location.brand,
            propscolor:props.location.color,
            propsmaterial:props.location.material,
            propsprice:props.location.price,
            propstype:props.location.type,
            propssize:props.location.size_type,
            propscategory:props.location.category_name,
            propsquantity:props.location.quantity,
            propssale:props.location.sale,
            quantityset:1,
            user:'',
            usercart:[{}],
            grandtotal:'',
            itemscount:''
        };
        this.increment = this.increment.bind(this);
         this.decrement = this.decrement.bind(this);
         this.addtocart = this.addtocart.bind(this);

      console.log(this.state.propsquantity)
      console.log(this.state.brands)
     

    }
async componentDidMount(){


       
    //     const url="http://localhost/php_rest_myblog/api/post/read.php";
    //     const response=await fetch(url
    //       ,
    //       {
    //         method: 'GET',
    //       // mode: "no-cors",
    //       //  headers: {
    //       //     'Accept': 'application/json',
    //       //     'Content-Type': 'application/json',
    //       // }
    //     }
       //   );
    //     const data= await response.json();
    //    this.setState({brands:data.data});
    //    console.log(this.state.brands)
  
    //   this.setState({
    //       urlImg:(this.props.urlImg),
    //     brands:(this.props.brands),
    //     propsname:(this.props.name),
    //     propscode:(this.props.code),
    //     propsbrand:(this.props.brand),
    //     propsprice:(this.props.price),
    //     propsmaterial:(this.props.material),
    //     propstype:(this.props.type),
    //     propscolor:(this.props.color),
    //     propscategory:(this.props.category),
    //     propssize:(this.props.size),
    //     propsimg:(this.props.src)
        
    // })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
    

    var quan=document.getElementsByClassName('quantitydisplay')[0]
    quan.value=1
    
    var user=JSON.parse(sessionStorage.getItem('user'))
    this.setState({
        pageCount: Math.ceil(this.state.brands.length / this.state.perPage),
        user:user
      },()=>console.log(this.state.user))

 
    }
   

    handlePageClick=(e)=>{
        const selectedPage = e.selected;

        const offset = selectedPage * this.state.perPage;
      
        console.log(e.selected);
        this.setState({
            currentPage: e.selectedPage,
            offset: offset
        });
    }
    img =(img,name,code,brand,color,material,price,type,category_name,size_type,quantity,sale) =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        var quan=document.getElementsByClassName('quantitydisplay')[0]
        quan.value=1
        
        this.setState({
            propsimg: img,
            propsname: name,
           propscode: code,
            propsbrand: brand,
            propscolor: color,
            propsprice: price,
            propstype: type,
            propsmaterial: material,
            propscategory: category_name,
       propssize: size_type,
       propsquantity:quantity,
       propssale:sale,
       quantityset:0
  
  
        })
        
    }
    increment(){
        
       
       var quanin=document.getElementsByClassName('quantitydisplay')[0]
    
    //    if(this.state.propsquantity>quanin.value){
    //    quanin.value=Number(quanin.value)+1;
    //    }
    //    else{

    //    }
    if(this.state.propsquantity>0){
        if(this.state.propsquantity>this.state.quantityset){
    this.setState({
        quantityset:Number(this.state.quantityset)+1
    },()=>{
        quanin.value=this.state.quantityset
    })
}
else{
   var quanout=document.getElementsByClassName('outquantity')[0];
   quanout.innerHTML="Not more than this quantity in stock";
  
   setTimeout(()=>{quanout.innerHTML=""},2000)

}
}
      

    }
    decrement(){
        
       
        var quan=document.getElementsByClassName('quantitydisplay')[0]
        if(this.state.quantityset>1){
        this.setState({
            quantityset:Number(this.state.quantityset)-1
        },()=>{
            quan.value=this.state.quantityset
        })
    }
 
     }
  addtocart(){
      if(this.state.user){
       
        var a=  localStorage.getItem('items')
        a=Number(a)+this.state.quantityset;
        localStorage.setItem('items',a)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        var a=document.querySelector('.modcart')
        a.style.display="block"
        document.body.style.overflow="hidden";
        

      
        var formData = new FormData();
        
        formData.append("id", this.state.user.id);
        formData.append("prod_name", this.state.propsname);
        formData.append("prod_code", this.state.propscode);
        formData.append("prod_brand",this.state.propsbrand);
        formData.append("prod_price", this.state.propsprice);
        formData.append("prod_saleprice", this.state.propssale);
       formData.append("prod_image", this.state.propsimg);
        formData.append("prod_type", this.state.propstype);
        formData.append("prod_size", this.state.propssize);
        formData.append("prod_color", this.state.propscolor);
        formData.append("prod_category", this.state.propscategory);
        formData.append("quantity", this.state.quantityset);
   



        const config = {
            headers: { 
                'content-type': 'multipart/form-data'
            }
        }
    
     
        axios.post('http://localhost/order/orderapi/post/create.php ',formData,config)
        .then(response=>{console.log(response)})

        console.log(this.state)
      
      }
      else{
  
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        var a=document.querySelector('.ui.basic.modal')
        a.style.display="block"
        document.body.style.overflow="hidden"
      }
  }
  closemodal(){
      var x=document.getElementById('modalrow')
      x.style.display="none"
      document.body.style.overflow="visible"

  }
    render(){
       
      const  slice=this.state.brands.slice(this.state.offset,this.state.offset+this.state.perPage)

    
        // console.log(this.props.brands)
        return(
            <div>
                <MainNavBar/>
            <div className="container-fluid">
                 {/* breadcrumb */}
             
       

      <div className="ui basic modal pt-5">
        <div className="ui icon header">
        <i class="fa fa-shopping-bag  fa-3x py-4" aria-hidden="true"></i><br></br>
          Want to add item in cart?
        </div>
        <div className="content">
          <p>Please login to your account first.</p> 
        </div>
        <div className="actions">
          <div className="ui red basic cancel inverted button">
           <Link to='/mainpage' style={{color:'inherit'}}> <i className="remove icon" onClick={this} />
            No</Link>
          </div>
        <div className="ui green ok inverted button">
        <Link to='/userregister' style={{color:'inherit'}}><i class="fa fa-sign-in"></i>
           &nbsp; Proceed
            </Link>
          </div>
        </div>
      </div>
         <nav aria-label="breadcrumb" >
             <ol className="breadcrumb" >
              <li className="breadcrumb-item">Home</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item">Brands</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item">{this.state.propsbrand}</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item active" aria-current="page">{this.state.propsbrand} {this.state.propsmaterial} {this.state.propstype} {this.state.propscategory} {this.state.propssize}</li>
               </ol>   
               <hr style={{marginTop:'-20px'}}></hr>
               </nav>

               <div className="row" id="modalrow">
                   <div className=" col-lg-6 col-10 abs">    
                   <div className="modal-body modcart">
                   <span className="closemodal" 
                   onClick={this.closemodal}>
X
                   </span>
                   <p className="youadded">You have added {this.state.propscategory} in the cart</p>
                 
                   <hr></hr>
                       <div className="row">
                           <div className="col-lg-4 col-4">
<img src={this.state.propsimg} className="modalimg"></img>
                           </div>
                           <div className="col-lg-8 col-8">
        <p className="modalinfo">Quantity: {this.state.quantityset}</p>
      {this.state.propssale==="no sale"?(  <p className="modalinfo">Price: PKR {(this.state.quantityset)*(this.state.propsprice)}</p>):(<p className="modalinfo">Price: PKR {(this.state.quantityset)*(this.state.propssale)}</p>)}
   
       <Link to='/checkout'><button className="btn modalcheckoutbutton  px-lg-5 px-md-5 px-sm-5 px-2  mt-4 pt-2 pb-2" 
        >Proceed to checkout</button></Link> 
                               </div>
      </div>
         </div>
               
                   </div>
               </div>
         

            <div className="row pt-3 pb-3 bg-light">
                <div className="col-lg-5 col-md-6 px-lg-5 px-md-5 ">
                    <img className="propImg" src={this.state.propsimg}></img>

                </div>
                <div className="col-lg-7 col-md-6 pt-lg-2 pt-md-2 pt-sm-4 pt-4 px-lg-5 px-md-5 px-sm-4 px-4">
                  <p className="propfirstheading ">{this.state.propscategory}</p>  
                  <p className="propname ">{this.state.propsname}</p>
                  {this.state.propssale!=="no sale"?
                  (<div><p className="propprice" style={{textDecorationLine:"line-through"}}>PKR {this.state.propsprice}</p><p className="propssale" >PKR {this.state.propssale}</p></div>)
                  :(<p className="propprice">PKR {this.state.propsprice}</p>)}
                  <p className="propcolor"><span className="propsubhead">COLOR:</span>&nbsp; {this.state.propscolor}</p>
                 <span class="dot mb-3" style={{backgroundColor:`${this.state.propscolor}`,height:'30px',width:"30px"}}></span>
                 {this.state.propsquantity==0?(<p className="availability">Availability: <span className="outstock">Out of stock</span></p>):(<p className="availability">Availability: <span className="instock">In stock</span> </p>)}
                 <p className="propsubhead1">QTR: &nbsp; &nbsp; <span className="quantitycalculator px-2 p-1">
                     <i class="minus icon small" onClick={this.decrement}></i>
                 <input type="number" className="quantitydisplay"></input><i class="plus icon small" 
                 onClick={this.increment}></i></span></p>
                 <p className='outquantity'></p>
                 <button className="btn addcartbtn px-5 mt-4 pt-2 pb-2" onClick={this.addtocart}>Add to Cart</button>

                 <h4>ADDITIONAL INFORMATION</h4>
                 <hr></hr>
                 <table className="additionaltable">
                     <tr>
                         <th  className="px-4 pt-2 pb-2" >SKU</th>
                         <td className="td px-4 pt-2 pb-2">{this.state.propsname}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Brand</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propsbrand}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Material</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propsmaterial}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Color</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propscolor}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Size</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propssize}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Type</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propstype}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Code</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propscode}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Category</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propscategory}</td>
                     </tr>
                 </table>


                </div>
            </div>

            <div className='row'>
         
              
                <div className="likecol col-lg-4 col-md-7 pt-lg-5 pt-md-5 pt-4">
                <h2 className="youmaylikeheading pt-5"><span>YOU MAY ALSO LIKE</span></h2>
                </div>
                </div>
                <div className="row pt-5">
             
                {slice.map(brand=>

                   <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-lg-5 px-md-5 " >
                      
                      <img src={this.state.imgUrl + brand.image} className="youmaypics" 
                      

                      
                    onClick={() =>this.img(this.state.imgUrl
                                                  + brand.image ,(brand.name),(brand.code),(brand.brand),
                                                      (brand.color) ,(brand.material ),(brand.price),  (brand.type),
                                                        (brand.category_name) ,(brand.size_type),(brand.quantity),(brand.sale)
                                                      )} />
                                                      
                      <div className="row">
                                                     <div className="col-lg-6 col-md-6 col-12" >
                                                      <p className="brandsdatacategory mt-2" > {brand.category_name}  </p>
                                                      </div>
                                                      <div className="col-lg-6 col-md-6 col-12 " style={{fontSize:"13px"}} >
                                                     {brand.sale=="no sale"?(<p className="brandsdataprice">PKR {brand.price}</p>):
                                                     (<div><p className="brandsdatapricecut">PKR {brand.price}</p>
                                                     <p className="brandsdatasale pb-2">PKR {brand.sale}</p></div>)} 
                                                      </div>
                                                   </div>
                                                  
                                                   
                                                   
                                          
                      
                    
                   </div>
                   
)}
       
                   </div>
              <div className="mt-5 ">
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
                      activeClassName={"active"}/>
                      </div>
            </div>
            <Footer/>
            </div>

        )
    }
}
export default ImgView;