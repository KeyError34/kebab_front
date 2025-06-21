import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img1 from '../../assets/carousel_img/hero-img-2-1.jpg';
import img2 from '../../assets/carousel_img/hero-img-2-2.jpg';
import img3 from '../../assets/carousel_img/hero-img-2-3.jpg';
import './MyCarousel.scss';

const slides = [
    {
        img: img1,
        subtitle: 'Enjoy Food Enjoy Life',
        title: 'Enjoy delicious food\nwith family',
        button: 'Book Now',
    },
    {
        img: img2,
        subtitle: 'Fresh & Tasty',
        title: 'Discover new\nflavors every day',
        button: 'See Menu',
    },
    {
        img: img3,
        subtitle: 'Best Grill in Town',
        title: 'Grill, taste,\nrepeat!',
        button: 'Order Delivery',
    },
];

const navButtonBase = {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: '50%',
    width: 64,
    height: 64,
    top: '50%',
    transform: 'translateY(-50%)',
    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    opacity: 1,
    transition: 'background 0.2s',
    color: '#fff',
};

const navButtonHover = {
    backgroundColor: '#fff',
    color: '#222',
};

const indicatorBase = {
    position: 'absolute',
    left: '50%',
    bottom: 32,
    transform: 'translateX(-50%)',
    background: 'transparent',
    borderRadius: 32,
    minHeight: 48,
    width: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    padding: '0 24px',
    margin: 0,
    zIndex: 3,
};

const MyCarousel = () => {
    return (
        <Box className="my-carousel" sx={{ width: '1440px', maxWidth: '100vw', mx: 'auto', position: 'relative' }}>
            <Carousel
                navButtonsAlwaysVisible
                indicators={true}
                indicatorIconButtonProps={{
                    style: {
                        padding: 8,
                        color: '#fff',
                        opacity: 1,
                    },
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#fff',
                        border: '2px solid #fff',
                        background: 'transparent',
                    },
                }}
                indicatorContainerProps={{
                    style: indicatorBase,
                }}
                NextIcon={<ArrowForwardIosIcon sx={{ fontSize: 32 }} />}
                PrevIcon={<ArrowBackIosIcon sx={{ fontSize: 32 }} />}
                navButtonsProps={{
                    style: navButtonBase,
                    className: 'mui-carousel-arrow',
                }}
                navButtonsWrapperProps={{
                    style: {
                        top: 0,
                        height: '100%',
                    },
                }}
                sx={{
                    position: 'relative',
                    width: '1440px',
                    height: '900px',
                }}
            >
                {slides.map((slide, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: '1440px',
                            height: '900px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <img
                            src={slide.img}
                            alt={`slide-${idx + 1}`}
                            style={{
                                width: '1440px',
                                height: '900px',
                                objectFit: 'cover',
                                borderRadius: 16,
                                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
                                display: 'block',
                            }}
                        />
                        <Box className="my-carousel__caption">
                            <div className="my-carousel__subtitle">{slide.subtitle}</div>
                            <h2 className="my-carousel__title">{slide.title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>{line}<br /></React.Fragment>
                            ))}</h2>
                            <Button className="my-carousel__btn" variant="contained" sx={{
                                background: '#FFA726',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: 22,
                                borderRadius: 32,
                                px: 5,
                                py: 1.5,
                                mt: 3,
                                boxShadow: '0 2px 8px rgba(255,167,38,0.15)',
                                textTransform: 'none',
                                '&:hover': { background: '#fb8c00' },
                            }}>
                                {slide.button}
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Carousel>
            <style>{`
        .mui-carousel-arrow:hover {
          background: #fff !important;
          color: #222 !important;
        }
        .mui-carousel-arrow:hover svg {
          color: #222 !important;
        }
      `}</style>
        </Box>
    );
};

export default MyCarousel;
