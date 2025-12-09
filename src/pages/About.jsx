import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Driver from "../components/Driver";

const About = () => {

    const [carImage, setCarImage] = useState("./src/assets/pexels-albinberlin-905554.jpg");
    const [vission, setVission] = useState(true);
    const [approach, setApproach] = useState(false);
    const [mission, setMission] = useState(false);
    const [title, setTitle] = useState("Vision");


    const handleVission = () => {
        setCarImage("./src/assets/pexels-albinberlin-905554.jpg");
        setVission(true);
        setApproach(false);
        setMission(false);
        setTitle("Vision");
    }

    const handleApproach = () => {
        setCarImage("./src/assets/pexels-mikebirdy-3729464.jpg");
        setVission(false);
        setApproach(true);
        setMission(false);
        setTitle("Approach");   
    }

    const handleMission = () => {
        setCarImage("./src/assets/pexels-toms-svilans-375611-1005617.jpg");
        setVission(false);
        setApproach(false);
        setMission(true);
        setTitle("Mission")
    }

    return (
        <>
            <div className="about">
                <div className="about_top">
                    <h1>About Us</h1>
                    <div className="about_nav">
                        <Link to={"/"}><p className="about_home">Home</p></Link>
                        <p>/</p>
                        <p className="place">About Us</p>
                    </div>
                </div>

                <div style={{marginTop: "100px"}} className="about-us">
                    <div className="left_us">
                        <img src="./src/assets/Screenshot 2025-11-08 120025.png" alt="" />
                    </div>

                    <div className="right_us">
                        <div className="title">
                            <img src="./src/assets/site-logo.png" alt="" />
                            <p>About Us</p>
                        </div>

                        <h1>Your trusted partner in <br /> reliable car rental</h1>
                        <p className="la">Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed <br /> Earum A Magni Soluta Quam Minus Dolor Dolor</p>

                        <div className="booking_info">
                            <img src="./src/assets/booking.png" alt="" />
                            <div className="booking_title">
                                <p className="process">Easy Booking Process</p>
                                <p className="booking_text">We Have Optimized The Booking Process So That Our Clients Can <br /> Experience The Easiest And The Safest Service</p>
                            </div>
                        </div>

                        <div className="pick_up">
                            <img src="./src/assets/pick-up.png" alt="" />
                            <div className="pickup_title">
                                <p style={{fontSize: 20, fontWeight: 500}}>Convenient Pick-Up & Return Process</p>
                                <p style={{color: "rgba(128, 128, 128, 0.752", marginTop: 20, lineHeight: "25px"}}>We Have Optimized The Booking Process So That Our Clients Can <br /> Experience The Easiest And The Safest Service</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="brands">
                    <div className="brands_title">
                        <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                        <p>Executive Partners</p>
                    </div>

                    <h1>Trusted by leading brands</h1>

                    <img className="brand_image" src="./src/assets/brands.png" alt="" />
                </div>

                
                <div className="mission">
                    <div className="mission_title">
                        <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                        <p>Vision Mission</p>
                    </div>

                    <h1>Driving excellence and innovation <br /> in car rental services</h1>

                    <div className="mis">
                        <div style={{backgroundColor: vission ? "rgb(255, 45, 45)" : "white", color: vission ? "white" : "black"}} onClick={handleVission} className="vision">
                            <p>Our Vision</p>
                        </div>

                        <div style={{backgroundColor: mission ? "rgb(255, 45, 45)" : "white", color: mission ? "white" : "black"}} onClick={handleMission} className="miss">
                            <p>Our Mission</p>
                        </div>
                        
                        <div style={{backgroundColor: approach ? "rgb(255, 45, 45)" : "white", color: approach ? "white" : "black"}} onClick={handleApproach} className="approach">
                            <p>Our Approach</p>
                        </div>
                    </div>


                    <div className="mission_bottom">
                        <div className="mission_left">
                            <div className="mis_left">
                                <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                                <p>Our {title}</p>
                            </div>

                            <h1>Pioneering excellence in <br /> car rental services</h1>

                            <p className="mission_info">We aim to continually innovate and integrate the latest technology into our <br /> services. From easy online bookings to advanced vehicle tracking systems, our goal <br /> is to make the car rental process seamless and efficient for our customers. Quality <br /> is at the heart of everything we do. We maintain a diverse fleet of well-maintained <br /> vehicles that meet the highest standards of safety and comfort.</p>

                            <div style={{marginTop: "40px"}} className="like">
                                <img src="./src/assets/like.png" alt="" />
                                <p>Our customers are our top priority</p>
                            </div>

                            <div className="like">
                                <img src="./src/assets/like.png" alt="" />
                                <p>Quality is at the heart of everything we do</p>
                            </div>

                            <div className="like">
                                <img src="./src/assets/like.png" alt="" />
                                <p>every vehicle leaves care looking its absolute best</p>
                            </div>
                        </div>

                        <div className="mission_right">
                            <img src={carImage} alt="" />
                        </div>
                    </div>
                </div>


                <div className="choose">
                    <div className="choose_title">
                        <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                        <p>Why Choose Us</p>
                    </div>

                    <h1>Unmatched quality and service <br /> for your needs</h1>

                    <div className="choose_bottom">
                        <div className="choose_left">
                            <div className="fleet_op">
                                <img src="./src/assets/Screenshot 2025-11-24 191635.png" alt="" />
                                <div className="op_right">
                                    <h1>Extensive Fleet Options</h1>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere <br /> Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>

                            <div className="ser">
                                <img src="./src/assets/Screenshot 2025-11-24 191649.png" alt="" />
                                <div className="ser_right">
                                    <h1>Exceptional Customer Service</h1>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere <br /> Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>

                        </div>

                        <div className="choose_middle">
                            <img src="./src/assets/Screenshot 2025-11-24 191712.png" alt="" />
                        </div>

                        <div className="choose_right">
                            <div className="fleet_op">
                                <img src="./src/assets/Screenshot 2025-11-24 191724.png" alt="" />
                                <div className="op_right">
                                    <h1 style={{marginLeft: "-120px"}}>Convenient Locations</h1>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere <br /> Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>

                            <div className="ser">
                                <img src="./src/assets/Screenshot 2025-11-24 191735.png" alt="" />
                                <div className="ser_right">
                                    <h1 style={{marginLeft: "-120px"}}>Reliability And Safety</h1>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere <br /> Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );


}

export default About