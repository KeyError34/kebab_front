import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import './Menu.scss';
import img1 from '../../assets/menu_img/food-menu-img-2-1.jpg';
import img2 from '../../assets/menu_img/food-menu-img-2-2.jpg';
import img3 from '../../assets/menu_img/food-menu-img-2-3.jpg';
import img4 from '../../assets/menu_img/food-menu-img-2-4.jpg';
import img5 from '../../assets/menu_img/food-menu-img-2-5.jpg';
import img6 from '../../assets/menu_img/food-menu-img-2-6.jpg';

const menuData = [
    {
        title: 'Breakfast',
        items: [
            { name: 'Gina Pinot Noir', price: '$89.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Caffè macchiato', price: '$56.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Philadelphia salmon', price: '$36.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Antioxidant Fruits Mix', price: '$22.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Stuffed Strawberry', price: '$13.99', desc: 'Sauce, Hot Burger, Soft Drink' },
        ],
    },
    {
        title: 'Healthy Food',
        items: [
            { name: 'Boiled Organic Egg', price: '$19.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Philadelphia salmon', price: '$99.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Western Sunrise', price: '$26.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Italian Tasting Platter', price: '$23.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Crab Congee', price: '$15.99', desc: 'Sauce, Hot Burger, Soft Drink' },
        ],
    },
    {
        title: 'Fresh Food',
        items: [
            { name: 'Party Platter Wings', price: '$19.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Grilled Smoked Chicken', price: '$55.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Cream Chicken chiladas', price: '$25.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Chipotle Chicken Bowl', price: '$52.99', desc: 'Sauce, Hot Burger, Soft Drink' },
            { name: 'Philadelphia salmon', price: '$78.99', desc: 'Sauce, Hot Burger, Soft Drink' },
        ],
    },
];

const carousels = [
    [img1, img2],
    [img3, img4],
    [img5, img6],
];

const MenuHeader = () => (
    <div className="menu__header">
        <h2 className="menu__header-title">Our Food Menu</h2>
        <div className="menu__header-subtitle">Enjoy with us</div>
    </div>
);

const MenuContent = ({ section }) => (
    <div className="menu__content-block">
        <div className="menu__list">
            {section.items.map((item) => (
                <div className="menu__item" key={item.name}>
                    <div className="menu__item-info">
                        <div className="menu__item-name">{item.name}</div>
                        <div className="menu__item-desc">{item.desc}</div>
                    </div>
                    <div className="menu__item-price">{item.price}</div>
                </div>
            ))}
        </div>
    </div>
);

const MenuCarousel = ({ images, title }) => (
    <div className="menu__carousel">
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Carousel navButtonsAlwaysVisible indicators={false}>
                {images.map((img, idx) => (
                    <div key={idx} style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img src={img} alt="menu carousel" className="menu__carousel-img" />
                        {idx === 0 && title && (
                            <div className="menu__section-title">{title}</div>
                        )}
                    </div>
                ))}
            </Carousel>
        </Box>
    </div>
);

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__bg" />
            <MenuHeader />
            <div className="menu__rows">
                {/* 1 ряд: Карусель слева, контент справа */}
                <div className="menu__row">
                    <MenuCarousel images={carousels[0]} title={menuData[0].title} />
                    <MenuContent section={menuData[0]} />
                </div>
                {/* 2 ряд: Карусель слева, контент справа */}
                <div className="menu__row">
                    <MenuCarousel images={carousels[1]} title={menuData[1].title} />
                    <MenuContent section={menuData[1]} />
                </div>
                {/* 3 ряд: Карусель слева, контент справа */}
                <div className="menu__row">
                    <MenuCarousel images={carousels[2]} title={menuData[2].title} />
                    <MenuContent section={menuData[2]} />
                </div>
            </div>
        </div>
    );
};

export default Menu;
