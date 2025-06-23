import React from 'react';
import './Testimonial.scss';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import author1 from '../../assets/testimonial_img/testimonial-author-2-1.jpg';
import author2 from '../../assets/testimonial_img/testimonial-author-2-2.jpg';
import author3 from '../../assets/testimonial_img/testimonial-author-2-3.jpg';
import author4 from '../../assets/testimonial_img/testimonial-author-2-4.jpg';
import author5 from '../../assets/testimonial_img/testimonial-author-2-5.jpg';
import author6 from '../../assets/testimonial_img/testimonial-author-2-6.jpg';
import bg from '../../assets/testimonial_img/testimonial-bg-2-1.jpg';

const leftAvatars = [author1, author2, author3];
const rightAvatars = [author4, author5, author6];

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="testimonial__parallax" style={{ backgroundImage: `url(${bg})` }} />
            <div className="testimonial__overlay" />
            <div className="testimonial__avatars testimonial__avatars--left">
                {leftAvatars.map((img, i) => (
                    <div className={`testimonial__avatar testimonial__avatar--${i}`} key={i}>
                        <img src={img} alt="author" />
                    </div>
                ))}
            </div>
            <div className="testimonial__content">
                <div className="testimonial__icon-wrap">
                    <FormatQuoteIcon className="testimonial__icon" />
                </div>
                <div className="testimonial__text">
                    “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et asperiores, rem saepe exercitationem itaque autem deleniti ad sint quia ut tenetur quo distinctio rerum, temporibus a, atque molestiae in fuga quam voluptate ”
                </div>
                <div className="testimonial__author">
                    Jamaica Roise
                    <span className="testimonial__role">Managing Director</span>
                </div>
            </div>
            <div className="testimonial__avatars testimonial__avatars--right">
                {rightAvatars.map((img, i) => (
                    <div className={`testimonial__avatar testimonial__avatar--${i}`} key={i}>
                        <img src={img} alt="author" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
