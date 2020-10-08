
//import react libraries
import React, { Component } from 'react';


class NavBar extends Component{

componentDidMount(){

}
render(){
return(
  <div className="ui visible  left demo vertical inverted sidebar labeled icon menu"
   style={{backgroundColor: '#5D001E'}}> 
    <a className="item">
      <i className="home icon"></i>
      Home
    </a>
    <a className="item">
      <i className="search icon"></i>
      Search
    </a>
 
    <a className="item">
          <i className="block layout icon" />
        Gallery
        </a>
        <a className="item">
          <i className="book icon" />
    About
        </a>
        <a className="item">
          <i className="hire a helper icon"
           />
          Help
        </a>
       
</div>);

}
}

export default NavBar;