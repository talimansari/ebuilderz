import React from "react";
import Slider from "react-slick";
import testi_img from '../images/images/testi-img_03.png';
import five_start from '../images/images/five_star_10.png';
import map_icon from '../images/images/map_icon_06.png';

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="testimonial_wrap">
            <div className="testi_content">
                <div className="testi_img">
                   <img src={testi_img} alt="client_pic"/>
                </div>
             <div className="testi_name">
                 <p>Anand Ankita</p>
                 <img src={five_start} alt="start"/>
             </div>
             <img src={map_icon} alt="map"/>
            </div>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
        </div>
      </div>
      <div>
      <div className="testimonial_wrap">
            <ul>
                <li><img src={testi_img} alt="client_pic"/></li>
                <li>Anand Ankita</li>
                <li><img src={five_start} alt="starts"/></li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
        </div>
      </div>
      <div>
      <div className="testimonial_wrap">
            <ul>
                <li><img src={testi_img} alt="client_pic"/></li>
                <li>Anand Ankita</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
        </div>
      </div>
      <div>
      <div className="testimonial_wrap">
            <ul>
                <li><img src={testi_img} alt="client_pic"/></li>
                <li>Anand Ankita</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
        </div>
      </div>
      <div>
      <div className="testimonial_wrap">
            <ul>
                <li><img src={testi_img} alt="client_pic"/></li>
                <li>Anand Ankita</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
        </div>
      </div>
      <div>
      <div className="testimonial_wrap">
            <ul>
                <li><img src={testi_img} alt="client_pic"/></li>
                <li>Anand Ankita</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
        </div>
      </div>
    </Slider>
  );
}