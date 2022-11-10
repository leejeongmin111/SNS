import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "../../styles/Account_Setting/Slider.scss";

import person1 from "../../images/login/p1.JPG";
import person2 from "../../images/login/p2.JPG";
import person3 from "../../images/login/p3.JPG";

// 이미지 슬라이드

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      slide: "div",
      //   dots: true,
      // infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // 자동 재생
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="image1" src={person1} alt="image1" />
          </div>
          <div>
            <img className="image2" src={person2} alt="image2" />
          </div>
          <div>
            <img className="image3" src={person3} alt="image3" />
          </div>
        </Slider>
      </div>
    );
  }
}
