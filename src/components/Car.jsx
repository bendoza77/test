import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarContext";
import { SetLocalStorage } from "../utils/LocalStorage";

const Car = ({car}) => {

    const { setCarInfo } = useContext(CarContext);

    const handleCar = () => {
        setCarInfo(prev => {
            SetLocalStorage("car", car);
            return car
        })
    }

    return (
        <>
            <Link onClick={handleCar} className="car_link" to={"/car"}>
                <div key={car._id} className="car_div">
                    <div className="car_image">
                        <img src={car.image} alt="" />
                    </div>

                    <div className="car_bottom">
                        <div className="car_type">
                            <p>{car.type}</p>
                        </div>
                        <h1 className="car_title">{car.title}</h1>

                        <div className="door">
                            <div>
                                <img src="./src/assets/door.png" alt="" />
                                <p>Doors</p>
                            </div>

                            <p>{car.doors}</p>
                        </div>

                        <div className="passenger">
                            <div>
                                <img src="./src/assets/passenger.png" alt="" />
                                <p>Passengers</p>
                            </div>

                            <p>{car.passengers}</p>
                        </div>

                        <div className="price">
                            <p><span>${car.pricePerDay}</span>/Per Day</p>
                            <button className="car_button"><img src="./src/assets/arrow-removebg-preview (1).png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );



}

export default Car