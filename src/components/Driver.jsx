const Driver = ({driver}) => {

    return (
        <>
            <div key={`driver ${driver._id}`} className="driver_div">
                <div className="driver_top">

                </div>

                <div className="driver_bottom">
                    <p>{driver.fullName}</p>
                    <p>{driver.driverRank}</p>
                </div>
            </div>
        </>
    );

    


}

export default  Driver