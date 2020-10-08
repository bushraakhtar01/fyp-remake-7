import React from 'react';
import Footer from './Footer';
import MainNavBar from './MainNavBar';
import './about.css';

const Privacy=()=>{
  return(
    <div>
  <MainNavBar/>
    <div className="container-fluid pt-5">

  <h2 className="allheadings"> PRIVACY POLICY </h2>
             <hr></hr>
             <br></br>

                        <div className="row contactuspara">
                        <p>                
Information is collected on this site by Pehnaway with its registered office at Karachi, Pakistan. We take your privacy seriously and will take all measures to protect your personal information. Any personal information received will only be used to fill your order. We will not sell or redistribute your information to anyone. Any information you provide will be governed by this privacy policy and our terms and conditions. <br></br><br></br>

We may collect two types of information via this website: information you specifically provide to us, and automatic information associated with your use of this site. Information you specifically provide to us includes any information you enter into a form or send to us via e-mail. Examples of this information include information you enter when placing an order or setting up an account. Automatic information associated with your use of this site includes any information arising from your use of this site which you do not specifically provide. Examples of this information include your IP address, the type of web browser you are using, and the speed of your web connection. <br></br>

<h3 className="subheadings">Personal Data </h3>
We take responsibility for all the personal data (such as your name, address, email address, phone number, and date of birth) that you provide us with, obtained when you subscribe to our newsletter or when you create a personal profile. <br></br>

<h3 className="subheadings">How do we use your Personal Data?</h3>

We use the information that we collect to fulfill our commitments to you and to provide you with the service that you expect. This includes sending you information and offers for marketing purposes. In order to provide you with relevant offers and information, we may analyze your personal data. We will only keep your data for as long as necessary to carry out our services to you or for as long as we are required by law. After this your personal data will be deleted. <br></br> 

<h3 className="subheadings">What information does Pehnaway share with third parties?</h3>

Pehnaway may share your personal information with third parties or affiliates of Pehnaway who perform services on our behalf or process authorized transactions. The personal information we share with these companies to perform services on our behalf is protected via contractual agreements and cannot be shared. We do not sell your information to any third party nor do we disclose your personal information to unaffiliated third parties. <br></br>


<h3 className="subheadings">What are your rights? </h3>
You have the right to request information about the personal data we hold on you. If your data is incorrect, incomplete or irrelevant, you can ask to have the information corrected or removed. <br></br>

We will protect your data and not sell it any cost please feel free to contact care@pehnaway.com.
<br></br> <br></br> <br></br>

</p>  
</div>
</div> 
<Footer/> 
</div>
  );
};

export default Privacy;