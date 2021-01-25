import React from 'react';
import rectangle from "../images/images/banner-rectangle_02_02.png";
import ServicesData, { Facts, List } from "./ServicesData";
import ownerPic from '../images/images/owner-photo02_03.png';
import Trust_invester from "../images/images/trust-02_06.png";
import Testimonial from './Testimonial';

const Home = () =>{
    return<>
     <section className="banner_section">
         <div className="container">
             <div className="banner_content text-center">
                 <h2>HELPING SMALL BUSINESSES SUCCEED</h2>
                 <p>I’m Naman Modi, an Award-Winning Freelancer & Web Entrepreneur helping new customers launch their first successful online business. I love minimalism and I create stunning websites & mobile apps.
                     Feel free to contact me for any projects you might have in mind.</p>
                     <div className="banner_btns">
                         <a href="#">get a free quote</a>
                         <a href="#">my portfolio</a>
                     </div>
             </div>
         </div>
     </section>
     <section className="services_section">
         <div className="services_rectangle">
             <img src={rectangle} alt=""/>
         </div>
         <div className="container">
             <h4 className="services_title">MY services</h4>
             <div className="row">
               {
                 ServicesData.map((item) => {
                    
                     return (
                    <div className="col-md-4">
                    <div className="seriveces_items text-center">
                        <div>
                            <img src={item.icon} alt=""/>
                        </div>
                        <h5>{item.title}</h5>
                        <p>
                          {item.caption}
                       </p>
                    </div>
                    </div>)
                 })
                }
             </div>
         </div>
     </section>
     <section className="services_list_section">
         <div className="container">
             <div className="services_list_content text-center">
                <div className="row">
                        {
                            List.map((item)=>{
                                 return(
                                     <div className="col-md-4">
                                       <p className="services_item">{item.listItem}{item.icon}</p>
                                     </div>
                                 )    
                            })
                        }
                    <div className="col-md-4"><a href="#">Learn More</a></div>
                    <div className="col-md-4"><a href="#">Learn More</a></div>
                    <div className="col-md-4"><a href="#">Learn More</a></div>
                    </div>
                </div>
             </div>
     </section>
     {/* -----Awesome-Fact-section----- */}
     <section className="awesome_facts text-center">
         <div className="container">
             <h4 className="services_title">THIS YEAR'S AWESOME FACTS</h4>
            <div className="row">
           {
               Facts.map((item)=>{
                   return(
                    <div className="col-md-3">
                    <div className="facts_warapper">
                       <h5>{item.counting}</h5>
                    </div>
                    <p>{item.countCaption}</p>
                </div>
                   )
               })
           }
            </div> 
         </div>
     </section>
 <section className="about_me_section">
     <div className="container">
         <div className="row align-items-center pb-5">
             <div className="col-md-6">
                 <div className="owner-image">
                     <img src={ownerPic} alt="Boss-image"/>
                 </div>
             </div>
             <div className="col-md-6">
                 <div className="about-me-content">
                     <span className="services_title">About me</span>
                     <h2>HELLO!</h2>
                     <span className="naman_modi">I'm Naman Modi</span>
                     <h5>I’ve been building websites<br/> & mobile apps for 8+ Years</h5>
                     <p>I’m an Award Winning Freelancer & Web Entrepreneur helping new entrepreneurs launch their first successful online business. Ranked as Top 1% Successful Freelancers & Creative Head of NamanModi.com; eBuilderz.com; PunchPixels.com;
                          an initiative to help small business success and also publish articles in close connection with the online business.</p>
                <div className="resume_btn">
                <a href="#">download my resume</a>
                </div>
                 </div>
             </div>
         </div>
         <div className="row text-center pb-5">
         <div className="col-md-4">
             <div className="progress_range">
                 <p>WEB DESIGN & DEVELOPMENT</p>
             <div className="progress">
                   <div className="progress-bar" style={{width:"90%"}}></div>
                </div>
             </div>
         </div>
         <div className="col-md-4">
         <div className="progress_range">
                 <p>MOBILE APP DESIGN & DEVELOPMENT</p>
             <div className="progress">
                   <div className="progress-bar" style={{width:"90%"}}></div>
                </div>
             </div>
         </div>
         <div className="col-md-4">
         <div className="progress_range">
                 <p>SEO & SOCIAL MEDIA MARKETING</p>
             <div className="progress">
                   <div className="progress-bar" style={{width:"90%"}}></div>
                </div>
             </div>
         </div>
         </div>
         <div className="row">
             <div className="col-md-4">
                 <h4 className="trust_me_title">SOME OF THE MOST RESPECTED COMPANIES TRUST ME</h4>
             </div>
             <div className="col-md-8">
                 <ul className="true_investor_wrapper">
                     <li><img src={Trust_invester} alt="trust-invester"/></li>
                     <li><img src={Trust_invester} alt="trust-invester"/></li>
                     <li><img src={Trust_invester} alt="trust-invester"/></li>
                 </ul>
             </div>
         </div>
           </div>
     </section> 
     <section className="testimonial_section">
         <div className="container">
             <div className="testimonial_slider">
                 <Testimonial/>
             </div>
         </div>
     </section>
   </>
}
export default Home;