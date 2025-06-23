import React from 'react';
import Slider from 'react-slick';
import './Brand.scss';
import fireBg from '../../assets/brand_img/fire.png';
import img1 from '../../assets/brand_img/brand-img-1-1.png';
import img2 from '../../assets/brand_img/brand-img-1-2.png';
import img3 from '../../assets/brand_img/brand-img-1-3.png';
import img4 from '../../assets/brand_img/brand-img-1-4.png';
import img5 from '../../assets/brand_img/brand-img-1-5.png';

const brands = [img1, img2, img3, img4, img5];

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

const Brand = () => {
    return (
        <section className="brand">
            <div className="brand__fire-bg" style={{ backgroundImage: `url(${fireBg})` }} />
            <div className="brand__carousel-wrap">
                <Slider {...sliderSettings} className="brand__carousel">
                    {brands.map((img, i) => (
                        <div className="brand__slide" key={i}>
                            <img src={img} alt={`brand-${i + 1}`} className="brand__img" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Brand;
