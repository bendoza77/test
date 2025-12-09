import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarContext";

const Car = () => {

    const { carInfo } = useContext(CarContext);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [book, setBook] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, dateStart, dateEnd } = e.target;

        if (name.value && email.value && phone.value && dateStart.value && dateEnd.value) {
            setBook(false)
            e.target.reset();
        }
    }

    const handleQuestionOne = () => {
        setOne(!one);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
    }

    const handleQuestionTwo = () => {
        setOne(false);
        setThree(false);
        setTwo(!two);
        setFour(false);
        setFive(false);
        setSix(false);
    }

    const handleQuestionThree = () => {
        setOne(false);
        setTwo(false);
        setThree(!three);
        setFour(false);
        setFive(false);
        setSix(false);
    }

    const handleQuestionFour = () => {
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(!four);
        setFive(false);
        setSix(false);
    }

    const handleQuestionFive = () => {
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(!five);
        setSix(false);
    }

    const handleQuestionSix = () => {
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(!six);
    }

    return (
        <>
            <div className={book ? "layer" : ""}></div>
            <div style={{display: book ? "block" : "none"}} className="book_car">
                <div className="bo">
                    <div className="book_title">
                        <h1>Reserve your vehicle today!</h1>
                        <p>Fill out the form below to reserve your vehicle. Complete the necessary details to ensure a smooth rental experience.</p>
                    </div>

                    <p onClick={() => setBook(false)} style={{fontSize: "17px", cursor: "pointer"}}>x</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" name="name" placeholder="Enter Full Name" required/>
                        <input type="email" name="email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="phone">
                        <input type="text" name="phone" placeholder="Enter Phone Number" required/>
                    </div>

                    <div className="date1">
                        <input type="date" name="dateStart" required/>
                        <input type="date" name="dateEnd" required/>
                    </div>

                    <div className="mes">
                        <input type="text" name="message" placeholder="Enter Your Message" />
                    </div>

                    <button>Send</button>
                </form>
            </div>
            <div className="car">
                <div className="about_top">
                    <h1>{carInfo.title}</h1>
                    <div className="about_nav">
                        <Link to={"/"}><p className="about_home">Home</p></Link>
                        <p>/</p>
                        <Link to={"/cars"}><p className="place1">Cars</p></Link>
                        <p>/</p>
                        <p style={{color: "rgb(255, 45, 45)"}}>{carInfo.title}</p>
                    </div>
                </div>

                <div className="car_info">
                    <div className="car_left">
                        <div className="car_price">
                            <p><span>${carInfo.pricePerDay}</span>/PerDay</p>
                        </div>

                        <div className="car_bottom">
                            <div className="cs">
                                <div className="cf">
                                    <img src="./src/assets/door_info.png" alt="" />
                                    <p>Doors</p>
                                </div>

                                <p className="num">{carInfo.doors}</p>
                            </div>

                            <div className="cs">
                                <div className="cf">
                                    <img src="./src/assets/Screenshot 2025-12-03 162945.png" alt="" />
                                    <p>Passengers</p>
                                </div>

                                <p className="num">{carInfo.passengers}</p>
                            </div>

                            <div className="cs">
                                <div className="cf">
                                    <img src="./src/assets/Screenshot 2025-12-03 162955.png" alt="" />
                                    <p>Transmission</p>
                                </div>

                                <p className="num">{carInfo.transmission}</p>
                            </div>

                            <div className="cs">
                                <div className="cf">
                                    <img src="./src/assets/Screenshot 2025-12-03 163014.png" alt="" />
                                    <p>Age</p>
                                </div>

                                <p className="num">{carInfo.age}</p>
                            </div>

                            <div className="cs">
                                <div className="cf">
                                    <img src="./src/assets/Screenshot 2025-12-03 163026.png" alt="" />
                                    <p>Luggage</p>
                                </div>

                                <p className="num">{carInfo.luggage}</p>
                            </div>

                            <div className="cs">
                                <div className="cf">
                                    <img src="./src/assets/Screenshot 2025-12-03 163040.png" alt="" />
                                    <p>Air Condition</p>
                                </div>

                                <p className="num">{carInfo.airCondition}</p>
                            </div>
                        </div>

                        <div className="car_buttons">
                            <button onClick={() => setBook(true)} className="cr1">Book Now</button>
                            <button onClick={() => setBook(true)} className="cr2"><img src="./src/assets/arrow-removebg-preview (1).png" alt="" /></button>
                        </div>
                    </div>

                    <div className="car_right">
                        <div className="car_image">
                            <img src={carInfo.image} alt="" />
                        </div>

                        <img className="screen1" src="./src/assets/screen.png" alt="" />

                        <div className="general">
                            <div className="general_title">
                                <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                                <p>General Information</p>
                            </div>

                            <h1>Know about our car service</h1>
                            <p className="general_info">Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion 
                            consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.</p>

                            <img className="general_image" src="./src/assets/general.png" alt="" />
                        </div>

                        <div style={{marginTop: "100px"}} className="general">
                            <div className="general_title">
                                <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                                <p>Amenities</p>
                            </div>

                            <h1>Premium amenities and features</h1>

                            <img className="ametides_image" src="./src/assets/ametides.png" alt="" />
                        </div>


                        <div className="rental_condition">
                            <div className="general_title">
                                <img src="./src/assets/site-logo-removebg-preview.png" alt="" />
                                <p>Rental Conditions</p>
                            </div>

                            <h1>Policies and agreement</h1>

                            <div className="agreement">
                                <div onClick={handleQuestionOne} className={`que ${one ? "que1" : "que11"}`}>
                                    <div className="as">
                                        <p>Driver's License Requirements</p>
                                        <img src={!one ? "./src/assets/plus.png" : "./src/assets/minus.png"} alt="" />
                                    </div>

                                    <div className="ans" style={{display: one ? "block" : "none"}}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> 
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    </div>
                                </div>

                                <div onClick={handleQuestionTwo} className={`que ${two ? "que1" : "que11"}`}>
                                    <div className="as">
                                        <p>Insurance and Coverage policy</p>
                                        <img src={!two ? "./src/assets/plus.png" : "./src/assets/minus.png"} alt="" />
                                    </div>

                                    <div className="ans" style={{display: two ? "block" : "none"}}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> 
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    </div>
                                </div>

                                <div onClick={handleQuestionThree} className={`que ${three ? "que1" : "que11"}`}>
                                    <div className="as">
                                        <p>Available payment Methods</p>
                                        <img src={!three ? "./src/assets/plus.png" : "./src/assets/minus.png"} alt="" />
                                    </div>

                                    <div className="ans" style={{display: three ? "block" : "none"}}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> 
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    </div>
                                </div>

                                <div onClick={handleQuestionFour} className={`que ${four ? "que1" : "que11"}`}>
                                    <div className="as">
                                        <p>Cancellation and Modification policy</p>
                                        <img src={!four ? "./src/assets/plus.png" : "./src/assets/minus.png"} alt="" />
                                    </div>

                                    <div className="ans" style={{display: four ? "block" : "none"}}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> 
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    </div>
                                </div>

                                <div onClick={handleQuestionFive} className={`que ${five ? "que1" : "que11"}`}>
                                    <div className="as">
                                        <p>Smoking and Pet Policies</p>
                                        <img src={!five ? "./src/assets/plus.png" : "./src/assets/minus.png"} alt="" />
                                    </div>

                                    <div className="ans" style={{display: five ? "block" : "none"}}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> 
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    </div>
                                </div>

                                <div onClick={handleQuestionSix} className={`que ${six ? "que1" : "que11"}`}>
                                    <div className="as">
                                        <p>The minimum age Requirements</p>
                                        <img src={!six ? "./src/assets/plus.png" : "./src/assets/minus.png"} alt="" />
                                    </div>

                                    <div className="ans" style={{display: six ? "block" : "none"}}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> 
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );



}

export default Car