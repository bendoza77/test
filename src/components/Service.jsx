import { Link } from "react-router-dom";

const Service = ({image, title, text}) => {

    return (
        <>
            <div className="service_div">
                <img src={image} alt="" />

                <h1>{title}</h1>
                <p>{text}</p>

                <Link to={"/service"}><button><img src="/src/assets/arrow-removebg-preview (1).png" alt="" /></button></Link>
            </div>
        </>
    );


}

export default Service