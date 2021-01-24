import React from 'react';
import rectangle from "../images/images/banner-rectangle_02_02.png";
import ServicesData, { List } from "./ServicesData";
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
             <div className="services_list_content">
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
                    </div>
                </div>
             </div>
     </section>
    
    </>
}
export default Home;