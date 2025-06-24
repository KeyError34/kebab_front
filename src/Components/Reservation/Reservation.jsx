import React, { useState } from 'react';
import './Reservation.scss';
import clockIcon from '../../assets/reservation_img/clock-icon.png';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Reservation = () => {
    const [dateInputType, setDateInputType] = useState('text');
    const [timeInputType, setTimeInputType] = useState('text');

    return (
        <section className="reservation">
            <div className="reservation__container">
                <div className="reservation__info-wrapper">
                    <div className="reservation__info-content">
                        <h3 className="reservation__info-title">Opening Hours Of Grillino</h3>
                        <div className="reservation__clock-icon">
                            <img src={clockIcon} alt="Clock" />
                        </div>
                        <div className="reservation__hours">
                            <div className="reservation__hours-item">
                                <h4>Monday - Thursday</h4>
                                <p>08am - 10pm</p>
                            </div>
                            <div className="reservation__hours-item">
                                <h4>Friday - Sunday</h4>
                                <p>10am - 05pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reservation__form-wrapper">
                    <div className="reservation__header">
                        <h2 className="reservation__title">Reservation</h2>
                        <h3 className="reservation__pre-title">Book a Table</h3>
                    </div>
                    <form className="reservation__form">
                        <div className="reservation__input-group">
                            <input type="text" placeholder="Person" className="reservation__input" />
                            <span className="reservation__input-icon">
                                <PersonOutlineOutlinedIcon />
                            </span>
                        </div>
                        <div className="reservation__input-group">
                            <input
                                type={timeInputType}
                                placeholder="HH:MM"
                                className="reservation__input"
                                onFocus={() => setTimeInputType('time')}
                                onBlur={(e) => { if (!e.target.value) setTimeInputType('text') }}
                            />
                            <span className="reservation__input-icon">
                                <AccessTimeOutlinedIcon />
                            </span>
                        </div>
                        <div className="reservation__input-group">
                            <input
                                type={dateInputType}
                                placeholder="DD.MM.YYYY"
                                className="reservation__input"
                                onFocus={() => setDateInputType('date')}
                                onBlur={(e) => { if (!e.target.value) setDateInputType('text') }}
                            />
                            <span className="reservation__input-icon">
                                <CalendarTodayOutlinedIcon />
                            </span>
                        </div>
                        <div className="reservation__input-group">
                            <input type="text" placeholder="Booking Purpose" className="reservation__input" />
                            <span className="reservation__input-icon">
                                <EditOutlinedIcon />
                            </span>
                        </div>
                        <button type="submit" className="reservation__button">
                            <span className="reservation__button-icon">
                                <CalendarTodayOutlinedIcon />
                            </span>
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
