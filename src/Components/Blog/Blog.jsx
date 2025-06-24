import React from 'react';
import Slider from 'react-slick';
import './Blog.scss';
import img1 from '../../assets/blog_img/blog-img-2-1.jpg';
import img2 from '../../assets/blog_img/blog-img-2-2.jpg';
import img3 from '../../assets/blog_img/blog-img-2-3.jpg';
import img4 from '../../assets/blog_img/blog-img-2-4.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const blogs = [
    {
        img: img1,
        title: 'Rapidiously redefine error-free total',
        date: '22 June, 2022',
    },
    {
        img: img2,
        title: 'Rapidiously redefine error-free total',
        date: '22 June, 2022',
    },
    {
        img: img3,
        title: 'Rapidiously redefine error-free total',
        date: '22 June, 2022',
    },
    {
        img: img4,
        title: 'Rapidiously redefine error-free total',
        date: '22 June, 2022',
    },
];

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const BlogHeader = () => (
    <div className="blog__header">
        <h2 className="blog__title">Latest News</h2>
        <div className="blog__subtitle">Our Blog</div>
    </div>
);

const BlogCard = ({ blog }) => (
    <div className="blog__card">
        <div className="blog__img-wrap">
            <img src={blog.img} alt={blog.title} className="blog__img" />
            <button className="blog__arrow-btn"><ArrowForwardIosIcon /></button>
        </div>
        <div className="blog__info">
            <div className="blog__card-title">{blog.title}</div>
            <div className="blog__date"><CalendarMonthIcon className="blog__date-icon" />{blog.date}</div>
        </div>
    </div>
);

const Blog = () => {
    return (
        <section className="blog">
            <BlogHeader />
            <div className="blog__carousel-wrap">
                <Slider {...sliderSettings} className="blog__carousel">
                    {blogs.map((blog, i) => (
                        <div className="blog__slide" key={i}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Blog;
