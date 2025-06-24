 main
import Header from "../Components/Header/Header.jsx";
import MyCarousel from "../Components/MyCarousel/MyCarousel.jsx";
import StrengthCarousel from "../Components/StrengthCarousel/StrengthCarousel.jsx"
import Subscribe from "../Components/Subscribe/Subscribe.jsx";
import Footer from "../Components/Footer/Footer.jsx"
import AboutUsArea from "../Components/AboutUsArea/AboutUsArea.jsx";
import Reservation from "../Components/Reservation/Reservation.jsx";
import Menu from "../Components/Menu/Menu.jsx";
import Testimonial from "../Components/Testimonial/Testimonial.jsx";
import MeetOur from "../Components/MeetOur/MeetOur.jsx";
import Brand from "../Components/Brand/Brand.jsx";
import Blog from "../Components/Blog/Blog.jsx";

const Home = () => {
    return (
        <div>
            <Header />
            <MyCarousel />
            <StrengthCarousel />
            <AboutUsArea />
            <Reservation />
            <Menu />
            <Testimonial />
            <MeetOur />
            <Brand />
            <Blog />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;

 main
