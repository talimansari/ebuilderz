import React from "react";
import Footer_logo from "../images/images/footer_logo_03.png";
import paypal_img from '../images/images/pay_pal_img_07.png'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaPinterestP} from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";


const Footer = () =>{
    return<>

    <footer className="footer_section">
        <div className="container">
            <div className="start_project text-center text-white">
                <h3>Ready to Start a Project?</h3>
                <p>IT DOESN’T TAKE A GENIUS TO START AND BUILD A SUCCESSFUL ONLINE BUSINESS. LET ME SHOW YOU HOW </p>
               <a href="#">get a free quote</a>
            </div>
            <div className="row pb-5">
                <div className="col-md-6">
                    <div className="footer_logo_content">
                        <div className="footer_logo">
                           <img src={Footer_logo} alt="footer-logo"/>
                        </div>
                        <div className="social_icons_wrapper">
                           <ul>
                               <li><a href="#"><FaFacebookF/></a></li>
                               <li><a href="3"><FaTwitter/></a></li>
                               <li><a href="#"><TiSocialGooglePlus/></a></li>
                               <li><a href="#"><FaLinkedinIn/></a></li>
                               <li><a href="#"><FaInstagram/></a></li>
                               <li><a href="#"><FaPinterestP /></a></li>
                               
                           </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer_right_content">
                        <h5>Subscribe to blog via Email</h5>
                        <p>join award-wining platform to learn digital marketing & receive 
                        all our future post instantly  in your inbox.
                        </p>
                        <p>join 2,145 other subscribers</p>
                        <form>
                           <div className="input_subscribe">
                           <input type="text" placeholder="Your Email Address"/>
                            <a href="#">subscribe</a>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-8">
                   <div className="footer_menu">
                   <ul>
                        <li><a href="#">Home |</a></li>
                        <li><a href="#">Advtise |</a></li>
                        <li><a href="#">Submit guest post |</a></li>
                        <li><a href="#">Blog |</a></li>
                        <li><a href="#">Sitemap |</a></li>
                        <li><a href="#">Contact |</a></li>
                    </ul>
                    <ul>
                        <li>©2018 NamanModi.com. All rights reserved.</li>
                        <li><a href="#">Terms and Conditions |</a></li>
                        <li><a href="#">Privacy policy |</a></li>
                        <li><a href="#">Affilate DisClosure |</a></li>
                        <li><a href="#">Disclaimer |</a></li>
                    </ul>
                   </div>
                </div>
                <div className="col-md-4">
                    <div className="paypal_image">
                        <img src={paypal_img} alt="paypal"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   </>
}
export default Footer;