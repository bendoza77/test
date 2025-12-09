import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    const [side, setSide] = useState(false);

    return (
        <>
            <div style={{display: side ? "block" : "none"}} className="sidebar">
                <div className="cancle">
                    <div onClick={() => setSide(false)}>
                        <p>X</p>
                    </div>
                </div>

                <div className="side_nav">
                    <Link to={"/"}><p style={{color: "red"}}>Home</p></Link>
                    <Link to={"/about"}><p>About Us</p></Link>
                    <Link to={"/services"}><p>Service</p></Link>
                    <Link to={"/cars"}><p>Cars</p></Link>
                    <Link to={"/contact"}><p>Contact Us</p></Link>
                    <Link to={"/contact"}><p>Book A Rental</p></Link>
                </div>
            </div>
            <header>
                <div className="logo">
                    <Link to={"/"}><img src="./src/assets/logo.png" alt="" /></Link>
                </div>

                <div className="navigations">
                    <Link to={"/"}><button style={{color: "red"}}>Home</button></Link>
                    <Link to={"/about"}><button>About Us</button></Link>
                    <Link to={"/services"}><button>Service</button></Link>
                    <Link to={"/cars"}><button>Cars</button></Link>
                    <Link to={"/contact"}><button>Contact Us</button></Link>
                </div>

                <div className="book">
                    <Link className="btn" to={"/contact"}><button className="btn">Book A Rental</button></Link>
                    <Link to={"/contact"}><button className="rental"><img src="./src/assets/arrow-removebg-preview (1).png" alt="" /></button></Link>
                    <div onClick={() => setSide(true)} className="menu">
                        <img src="./src/assets/menu.png" alt="" />
                    </div>
                </div>
            </header>
        </>
    );



}

export default Nav