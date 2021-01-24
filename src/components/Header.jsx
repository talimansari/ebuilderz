import React from "react";
import logo from "../images/images/logo_02.png";

const Header = () => {
return<>
   <header id="header_section">
  <div className="container">
    <div className="header_wrapper">
      <a href="#" className="logo">
        <img src={logo} alt="logo-icon"/>
      </a>
      <div className="navigation_bar">
            <nav className="navbar navbar-expand-lg">
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <a className="menu-bar" href="#">
                    <span className="bars bar1"></span>
                    <span className="bars bar2"></span>
                    <span className="bars bar3"></span>
                  </a>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">free seo</a></li>
                <li><a href="#">guide</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
                <li className="lets_btn"><a href="#">lets talks!</a></li>
                <span>0</span>
              </ul>
          </div>
          </nav>
          </div>
        
    </div>
  </div>
</header>
   </>   
}
export default Header;