import Car from "../Car";

const PageOne = ({car, index, filter}) => {

    
    return (
        <>
            <div style={{display: index === 1 ? "grid" : "none"}} className="page_one">
                {filter.length !== 0 ? filter.slice(0, 6).map(el => {
                    return <Car car={el} />
                }) : car.slice(0, 6).map(el => {
                    return <Car car={el}/>
                })}
            </div>
        </>
    );


    
}

export default PageOne