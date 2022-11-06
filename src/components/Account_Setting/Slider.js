import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "../../styles/Account_Setting/Slider.scss";

import dog1 from "../../images/dog1.jpg";
import dog2 from "../../images/dog2.jpg";
import dog3 from "../../images/dog3.jpg";

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
      autoplaySpeed: 4000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="image1" src={dog1} alt="image1" />
          </div>
          <div>
            <img className="image2" src={dog2} alt="image2" />
          </div>
          <div>
            <img className="image3" src={dog3} alt="image3" />
          </div>
        </Slider>
      </div>
    );
  }
}
