import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Post() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='md:pt-28 pt-24 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='items-center mx-auto overflow-hidden text-[#000]'>
        <h1 className="second md:text-5xl font-light text-2xl text-[#444444] py-3 text-center mx-auto md:pt-28">
          Who are we working with?
        </h1>
        <h1 className='third justify-center text-center mx-auto md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
          We are proud to foster relationships and are actively securing investment allocations with some of the world’s most prominent and innovative companies.
        </h1>
        <Slider {...settings} className='fourth flex mx-auto items-center gap-10 pt-12 pb-10 text-[#000]'>
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/rtgs.jpg" alt="" />
            <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/trustin.jpg" alt="" />
        </Slider>
      </div>
      <div className="border-b md:pb-10 pb-5"/>
    </div>
    </>
  )
}

export default Post;
