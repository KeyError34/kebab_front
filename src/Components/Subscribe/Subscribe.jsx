import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { MailOutline } from '@mui/icons-material';
import './Subscribe.scss';
import footerBg from '../../assets/footer_img/footer-bg-2-1.jpg';

const Subscribe = () => {
    return (
        <Box className="subscribe-container" sx={{ backgroundImage: `url(${footerBg})` }}>
            <Box className="subscribe-overlay">
                <Box className="subscribe-content">
                    <Box className="subscribe-text">
                        <Typography variant="h4" component="h2" className="subscribe-title">
                            Subscribe to our newsletter
                        </Typography>
                        <Typography variant="body1" className="subscribe-subtitle">
                            Get updates for new products
                        </Typography>
                    </Box>
                    <Box
                        component="form"
                        className="subscribe-form"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            placeholder="Your Email Address"
                            variant="outlined"
                            className="subscribe-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutline />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" className="subscribe-button">
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Subscribe;
