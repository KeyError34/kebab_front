import React from 'react';
import Slider from 'react-slick';
import './MeetOur.scss';
import img1 from '../../assets/meet_img/team-img-1-1.jpg';
import img2 from '../../assets/meet_img/team-img-1-2.jpg';
import img3 from '../../assets/meet_img/team-img-1-3.jpg';
import img4 from '../../assets/meet_img/team-img-1-4.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const team = [
    {
        name: 'Vivi Marian',
        role: 'Founder',
        img: img2,
        socials: [
            { icon: <FacebookIcon />, url: '#' },
            { icon: <TwitterIcon />, url: '#' },
            { icon: <LinkedInIcon />, url: '#' },
        ],
    },
    {
        name: 'Alex Green',
        role: 'Chef',
        img: img1,
        socials: [
            { icon: <FacebookIcon />, url: '#' },
            { icon: <TwitterIcon />, url: '#' },
            { icon: <LinkedInIcon />, url: '#' },
        ],
    },
    {
        name: 'Marta Blue',
        role: 'Manager',
        img: img3,
        socials: [
            { icon: <FacebookIcon />, url: '#' },
            { icon: <TwitterIcon />, url: '#' },
            { icon: <LinkedInIcon />, url: '#' },
        ],
    },
    {
        name: 'John Brown',
        role: 'Barista',
        img: img4,
        socials: [
            { icon: <FacebookIcon />, url: '#' },
            { icon: <TwitterIcon />, url: '#' },
            { icon: <LinkedInIcon />, url: '#' },
        ],
    },
];

const MeetOurHeader = () => (
    <div className="meetour__header">
        <h2 className="meetour__title">Meet Our</h2>
        <div className="meetour__subtitle">Expert Team</div>
    </div>
);

const MeetOurCard = ({ member }) => (
    <div className="meetour__card">
        <img src={member.img} alt={member.name} className="meetour__img" />
        <div className="meetour__info">
            <div className="meetour__name">{member.name}</div>
            <div className="meetour__role">{member.role}</div>
            <div className="meetour__socials">
                {member.socials.map((s, i) => (
                    <a href={s.url} key={i} className="meetour__social" target="_blank" rel="noopener noreferrer">{s.icon}</a>
                ))}
            </div>
        </div>
    </div>
);

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
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const MeetOur = () => {
    return (
        <section className="meetour">
            <MeetOurHeader />
            <div className="meetour__carousel meetour__carousel--slick">
                <Slider {...sliderSettings}>
                    {team.map((member) => (
                        <div key={member.name} className="meetour__slide">
                            <MeetOurCard member={member} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default MeetOur;
