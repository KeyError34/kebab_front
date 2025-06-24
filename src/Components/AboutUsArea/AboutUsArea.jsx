import "./AboutUsArea.scss";
import aboutImg from "../../assets/about_img/about-img-2-1.jpg";
import aboutImg2 from "../../assets/about_img/about-img-2-2.jpg";
import rightShape from "../../assets/about_img/about-bg-shape-2-1.jpg";

const AboutUsArea = () => {
    return (
        <section className="about-us-area">
            <h1 className="about-us-area__main-heading">
                Authoritatively supply standards compliant value<br />
                via high-payoff e-business. Holisticly productize<br />
                economically sound paradigm.
            </h1>
            <div className="about-us-area__row">
                <div className="about-us-area__col about-us-area__col--left">
                    <img src={aboutImg} alt="About us" className="about-us-area__main-img" />
                    <div className="about-us-area__video-preview">
                        <img src={aboutImg2} alt="Video preview" />
                        <div className="about-us-area__play-btn">
                            <svg className="about-us-area__play-svg" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <circle className="about-us-area__play-circle" cx="24" cy="24" r="24" />
                                <polygon className="about-us-area__play-triangle" points="20,16 34,24 20,32" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="about-us-area__col about-us-area__col--right">
                    <h2 className="about-us-area__title">
                        Phosfluorescently enhance extensible results without back-end collaboration and idea-sharing.
                    </h2>
                    <div className="about-us-area__desc">
                        Objectively build intermandated expertise vis-a-vis distributed materials. Continually extend innovative mindshare after market-driven paradigms. Monotonectally scale enterprise resources through technically sound methods of empowerment.
                    </div>
                    <button className="about-us-area__btn">Our Story</button>
                    <div className="about-us-area__progress-col">
                        <div className="about-us-area__progress-item">
                            <div className="about-us-area__progress-label">Our Mission</div>
                            <div className="about-us-area__progress-bar">
                                <div className="about-us-area__progress-fill" style={{ width: '85%' }}></div>
                            </div>
                            <span className="about-us-area__progress-value">85%</span>
                        </div>
                        <div className="about-us-area__progress-item">
                            <div className="about-us-area__progress-label">Our Vision</div>
                            <div className="about-us-area__progress-bar">
                                <div className="about-us-area__progress-fill" style={{ width: '65%' }}></div>
                            </div>
                            <span className="about-us-area__progress-value">65%</span>
                        </div>
                        <div className="about-us-area__progress-item">
                            <div className="about-us-area__progress-label">Our Goal</div>
                            <div className="about-us-area__progress-bar">
                                <div className="about-us-area__progress-fill" style={{ width: '45%' }}></div>
                            </div>
                            <span className="about-us-area__progress-value">45%</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={rightShape} alt="Decorative shape" className="about-us-area__bg-shape-right" />
        </section>
    );
};

export default AboutUsArea;