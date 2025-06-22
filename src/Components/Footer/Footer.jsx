import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Room, Phone, Mail } from '@mui/icons-material';
import './Footer.scss';
import footerBg from '../../assets/footer_img/footer-bg-2-1.jpg';
import logo from '../../assets/footer_img/logo-white.svg';

const Footer = () => {
    return (
        <Box className="footer-container" sx={{ backgroundImage: `url(${footerBg})` }}>
            <Box className="footer-overlay">
                <Box className="footer-content">
                    {/* About Section */}
                    <Box className="footer-widget footer-widget--about">
                        <img src={logo} alt="Grillino Logo" className="footer-logo" />
                        <Typography variant="body2" className="footer-about-text">
                            Energetically repurpose client-based odels rather than magnetic sources. Intrinsickly bcks-and-mortar ideas before.
                        </Typography>
                        <Box className="social-icons">
                            <IconButton className="social-icon" href="#"><FaFacebookF /></IconButton>
                            <IconButton className="social-icon" href="#"><FaTwitter /></IconButton>
                            <IconButton className="social-icon" href="#"><FaInstagram /></IconButton>
                            <IconButton className="social-icon" href="#"><FaLinkedinIn /></IconButton>
                            <IconButton className="social-icon" href="#"><FaYoutube /></IconButton>
                        </Box>
                    </Box>

                    {/* Food Menu Section */}
                    <Box className="footer-widget footer-widget--menu">
                        <Typography variant="h6" className="footer-title">Food Menu</Typography>
                        <ul className="footer-menu-list">
                            <li>White Castle</li>
                            <li>Beef Sandwich</li>
                            <li>Cherry Limeade</li>
                            <li>Wendy's Frosty</li>
                            <li>Pumpkin Spice</li>
                            <li>Burrito Supreme</li>
                            <li>Sandwich</li>
                            <li>Donuts Coffee</li>
                            <li>Krispy Kreme</li>
                            <li>Nacho Fries</li>
                        </ul>
                    </Box>

                    {/* Contact Us Section */}
                    <Box className="footer-widget footer-widget--contact">
                        <Typography variant="h6" className="footer-title">Contact Us</Typography>
                        <Box className="contact-info">
                            <Room className="contact-icon" />
                            <Typography>70 Pleasant Valley Street, Methuen MA 1844</Typography>
                        </Box>
                        <Box className="contact-info">
                            <Phone className="contact-icon" />
                            <Typography>+659 6525 2561</Typography>
                        </Box>
                        <Box className="contact-info">
                            <Mail className="contact-icon" />
                            <Typography>info@example.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
