import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import PageTwo from "../components/Car/PageTwo";
import PageOne from "../components/Car/PageOne";
import PageThree from "../components/Car/PageThree";
import { CarContext } from "../context/CarContext";

const Cars = () => {

    const [index, setIndex] = useState(1);
    const [car, setCar] = useState([]);
    const { filter, setFilter } = useContext(CarContext);

    const handleFilter = (e) => {
        e.preventDefault();
        
        const { carName, carType } = e.target;
        const cheked = Array.from(carType).filter(el => el.checked).map(el => el.value);

        setFilter(car.filter(el => cheked.includes(el.type)));
    
    }

    useEffect(() => {

        const fetchApi = async () => {

            try {

                const carApi = await fetch("http://localhost:3000/api/cars");
                const carJson = await carApi.json();

                setCar(carJson);

            } catch (error) {
                console.log(error);
            }


        }

        fetchApi();

    }, [])

    return (
        <>
            <div className="cars_div">
                <div className="about_top">
                    <h1>Cars</h1>
                    <div className="about_nav">
                        <Link to={"/"}><p className="about_home">Home</p></Link>
                        <p>/</p>
                        <p className="place">Cars</p>
                    </div>
                </div>

                <div className="collection">
                    <div className="col_left">
                        <form onSubmit={handleFilter}>
                            <input type="text" name="carName" id="search" placeholder="Search..."/>

                            <div className="types_div">
                                <h1 style={{marginTop: "50px"}}>Car Types</h1>

                                <div className="cheks">
                                    <label htmlFor="chek1">
                                        <div className="chek">
                                            <input type="checkbox" value="Sedan" name="carType" id="chek1" />
                                            <p>Sedan Car</p>
                                        </div>
                                    </label>

                                    
                                    <label htmlFor="chek2">
                                        <div className="chek">
                                            <input value="Hatchback" type="checkbox" name="carType" id="chek2" />
                                            <p>Hatchback Car</p>
                                        </div>
                                    </label>

                                    <label htmlFor="chek3">
                                        <div className="chek">
                                            <input value="SUV" type="checkbox" name="carType" id="chek3" />
                                            <p>SUV Car</p>
                                        </div>
                                    </label>

                                </div>
                            </div> 
                            <button>Search</button>
                        </form>
                    </div>

                    <div className="col_right">
                        <PageOne filter={filter} car={car} index={index} />
                        <PageTwo filter={filter} car={car} index={index} />
                        <PageThree filter={filter} car={car} index={index} />

                       <div style={{display: [1, 2, 3, 4, 5, 6].includes(filter.length) ? "none": "flex"}} className="col_button">
                            <button style={{display: index === 1 ? "none": "block", padding: "2px", backgroundColor: "rgb(255, 45, 45)"}} onClick={() => setIndex(index - 1)}><img src="./src/assets/left-arrow-removebg-preview.png" alt="" /></button>
                            <button style={{backgroundColor: index === 1 ? "black" : "rgb(255, 45, 45)"}} onClick={() => setIndex(1)}>1</button>
                            <button style={{backgroundColor: index === 2 ? "black" : "rgb(255, 45, 45)"}} onClick={() => setIndex(2)}>2</button>
                            <button style={{display: filter.length === 0 || filter.length > 12 ? "block" : "none", backgroundColor: index === 3 ? "black" : "rgb(255, 45, 45)"}} onClick={() => setIndex(3)}>3</button>
                            <button style={{display: index === 3 ? "none": "block", padding: "2px", backgroundColor: "rgb(255, 45, 45)"}} onClick={() => setIndex(index + 1)}><img src="./src/assets/arrow-removebg-preview (1).png" alt="" /></button>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );



}

export default Cars