import React, { useState } from 'react';
import { Box, Typography, IconButton, Card, CardContent } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { GiChefToque, GiHamburgerMenu, GiTable } from 'react-icons/gi';
import { FaUtensils } from 'react-icons/fa';
import './StrengthCarousel.scss';


const cardsData = [
    {
        icon: <GiChefToque size={60} color="#ff9800" />,
        title: 'Experienced Chef',
        description: "Collaboratively leverage other's leading innovation business methodologies. Competently revolutionary.",
        bgImage: '',
    },
    {
        icon: <FaUtensils size={60} color="#ff9800" />,
        title: 'Hygienic Food',
        description: "Collaboratively leverage other's leading innovation business methodologies. Competently revolutionary.",
        bgImage: '',
    },
    {
        icon: <GiTable size={60} color="#ff9800" />,
        title: 'Fresh Environment',
        description: "Collaboratively leverage other's leading innovation business methodologies. Competently revolutionary.",
        bgImage: '',
    },
    {
        icon: <GiHamburgerMenu size={60} color="#ff9800" />,
        title: 'Tasty Burger',
        description: "Collaboratively leverage other's leading innovation business methodologies. Competently revolutionary.",
        bgImage: '',
    },
];

const StrengthCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (cardsData.length - cardsToShow + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (cardsData.length - cardsToShow + 1)) % (cardsData.length - cardsToShow + 1));
    };

    const visibleCards = cardsData.slice(currentIndex, currentIndex + cardsToShow);

    return (
        <Box className="strength-carousel-container">
            <Box className="title-section">
                <Typography variant="h2" component="h2" className="main-title">
                    Our Strength
                </Typography>
                <Typography variant="subtitle1" component="p" className="subtitle">
                    Corporate Applications
                </Typography>
            </Box>

            <Box className="carousel-section">
                <IconButton className="arrow-button left-arrow" onClick={handlePrev}>
                    <ArrowBackIos />
                </IconButton>
                <Box className="cards-container" sx={{ display: 'flex', gap: '30px' }}>
                    {visibleCards.map((card, index) => (
                        <Card key={index} className={`strength-card ${card.bgImage ? 'with-bg' : ''}`} style={{ backgroundImage: `url(${card.bgImage})` }}>
                            <CardContent className="card-content">
                                <div className="card-icon">{card.icon}</div>
                                <Typography variant="h5" component="h3" className="card-title">
                                    {card.title}
                                </Typography>
                                {!card.bgImage && (
                                    <Typography variant="body2" className="card-description">
                                        {card.description}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <IconButton className="arrow-button right-arrow" onClick={handleNext}>
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Box>
    );
};

export default StrengthCarousel; 