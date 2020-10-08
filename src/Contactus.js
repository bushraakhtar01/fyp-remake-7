import React from 'react';
import axios from 'axios';
import MainNavBar from './MainNavBar';
import Footer from './Footer';
import './about.css';


class C extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            uname: '',
            email: '',
            phone: '',
            date_query: '',
            commments: ''


        }
    }
    componentDidMount() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        // if(!sessionStorage.getItem("userData")){

        //     this.props.history.push('/login')
        // }
    }
    changeHandler= e => {
      
        this.setState({[e.target.name]: e.target.value})
        
     
    }


    submitHandler= e => {
      
        e.preventDefault()
   
       
       if(this.state.uname!==""&&this.state.email!==""&&this.state.phone!==""&&this.state.comments!==""){
           
        var count=localStorage.getItem("count",count)
        count=++count;
        localStorage.setItem("count",count)
      
        var formData = new FormData();
        var date_query=new Date();
        var date=date_query.toString().slice(0,24);
        localStorage.setItem("date",date)
        
        formData.append("uname", this.state.uname);
        formData.append("email", this.state.email);
        formData.append("phone", this.state.phone);
        formData.append("date_query",date);
        formData.append("comments",this.state.comments);
        
        const config = {
            headers: { 
                'content-type': 'multipart/form-data'
            }
        }
     

        axios.post('https://pehnaway67.000webhostapp.com/api2/post/create.php',formData,config)
        .then(response=>{console.log(response)})
    
                const res= document.getElementsByClassName("responseofsubmit")[0];
                res.style.display="block";
                const dec= document.getElementsByClassName("declineofsubmit")[0];
                dec.style.display="none";

                myFunction()
                function myFunction() {
                setTimeout(function(){ 
                   var a= document.getElementsByClassName("responseofsubmit")[0];
                   a.style.display="none" ; 
                }, 3000);
                }
          
          

    }
       else{
        const dec= document.getElementsByClassName("declineofsubmit")[0];
        dec.style.display="block";
        const res= document.getElementsByClassName("responseofsubmit")[0];
        res.style.display="none";
        myFunction()
        function myFunction() {
        setTimeout(function(){ 
           var a= document.getElementsByClassName("declineofsubmit")[0];
           a.style.display="none" ; 
        }, 3000);
        }
    }
    
        this.setState({
            uname:'',
            email:'',
            phone:'',
            comments:''
        })
    
   

    }

    render() {
        const { uname,email,phone,date_query,comments}=this.state
        return (
            <div>
            <MainNavBar/>
            <div class="container-fluid pt-5">
          
                <div className="row  pt-3 px-lg-5 px-md-5 px-sm-3 px-3">
                    <div className='col'>
                        <h2 className="allheadings pb-1"><i class="map marker alternate icon"></i>Find Us</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14471.467139215798!2d67.08220439719
                    628!3d24.93660770333618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24a156aa778135bf!2sMa
                    ke-up%20City!5e0!3m2!1sen!2s!4v1591255379289!5m2en!2s" style={{ width: '100%', height: '60vh' }} frameborder="0"
                            allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
                    </div>
                </div>
                <div className="row  pt-3 px-lg-5 px-md-5 px-sm-3 px-3">
                    <div className="col-lg-6 col-12 pb-lg-1 pb-md-5 pb-sm-5 pb-5">
                        <h2 className="allheadings">CONTACT US</h2>
                        <hr></hr>
                        <form id="query_form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name <span >*</span></label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required name="uname" 
                                value={uname} onChange={this.changeHandler}  />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email <span >*</span></label>
                                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" name="email" value={email}  onChange={this.changeHandler} required  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Phone No. <span >*</span></label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone No" name="phone" value={phone}  onChange={this.changeHandler} required   />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Write your comment/query <span >*</span></label>
                                <textarea type="text" class="form-control" id="exampleInputPassword1" rows='6' placeholder="Write your comment/query here."  name="comments" value={comments}  onChange={this.changeHandler} required ></textarea>
                            </div>
                            <div className="responseofsubmit pb-2 pt-2 px-2 mb-2"><i class="fa fa-check fa-lg" aria-hidden="true"></i> &nbsp;Thanks for the reponse, we will get back to you soon</div>
                            <div className="declineofsubmit pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Please fill all fields</div>

                            <button type="submit" className="btn btn-primary queriessubmitbutton" onClick={this.submitHandler}>Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h5 className="contactussubheadings pb-1"><i class="map marker alternate icon"></i>ADDRESS</h5>
                       <p className="contactuspara pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolorum maiores illum except uri provident animi error nisi voluptatibus, sapiente consequuntur libero in repellendus assumenda consequatur? Deleniti dolore odio iure fuga.</p> 
                 
                        <h5 className="contactussubheadings pb-1"><i class="whatsapp icon"></i>WHATSAPP</h5>
                        <p className="contactuspara pb-3">03160022324</p>

                        <h5 className="contactussubheadings pb-1"><i class="phone icon"></i>PHONE NUMBER</h5>
                        <p className="contactuspara pb-3">031600224524</p>
                        

                        <h5 className="contactussubheadings pb-1"><i class="envelope icon"></i>EMAIL</h5>
                        <p className="contactuspara pb-3">care@pehnaway.com</p>
                             </div>

                </div>
             
            </div>
            <Footer/>
</div>
        )
    }
}
export default C;