import React, { Component } from "react";
import Slider from "react-slick";
import { Anime } from "../../redux/slices/cardSlice";
import { Link } from "react-router-dom";
import { BiMinus } from "react-icons/bi";

type PropsSlider = {
  animeHot: Anime[];
};

export default class SimpleSlider extends Component<PropsSlider> {
  render() {
    const settings = {
      customPaging: function () {
        return (
          <a>
            <BiMinus color="#868686" />
          </a>
        );
      },
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 4000,
      arrows: false,
      dotsClass: "slick-dots slick-thumb",
    };

    const anime = this.props.animeHot;

    return (
      <div>
        <Slider {...settings}>
          {anime.map((value: Anime) => (
            <div key={value._id}>
              <Link
                to={`/anime/${value._id}`}
                className="  flex flex-col md:h-[300px]   relative h-[400px] max-w-[1174px]"
              >
                <img
                  className=" w-full  h-full object-cover object-top "
                  src={value.imageHuge}
                />
                <div className=" bg-gradient-to-t from-black w-full h-full flex flex-col justify-end  absolute p-10  text-[#FFFF] ">
                  <h1 className="lg:text-3xl text-xl mb-3">{value.name}</h1>
                  <p  className="text-[#868686] lg:hidden  text-base">
                    {value.discriptionBriefly}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
