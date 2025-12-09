import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../components/Service";

const Services = () => {

    const [service, setService] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {

            try {

                const serviceApi = await fetch("http://localhost:3000/api/services");
                const serviceJson = await serviceApi.json();

                setService(serviceJson);

            } catch (error) {
                console.log(error);
            }


        }

        fetchApi();


    }, [])

    return (
        <>
            <div className="services1">
                <div className="about_top">
                    <h1>Service</h1>
                    <div className="about_nav">
                        <Link to={"/"}><p className="about_home">Home</p></Link>
                        <p>/</p>
                        <p className="place">Service</p>
                    </div>
                </div>


                <div className="all_service">
                    {service.map(el => {
                        return <Service service={el} />
                    })}
                </div>
                
            </div>
        </>
    );



}

export default Services