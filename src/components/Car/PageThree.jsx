import Car from "../Car";

const PageThree = ({car, index, filter}) => {
    
    return (
        <>
            <div style={{display: index === 3 ? "grid" : "none"}} className="page_one">
                {filter.length > 12 ? filter.slice(12, 20).map(el => {
                    return <Car car={el} />
                }) : car.slice(0, 6).map(el => {
                    return <Car car={el}/>
                })}
            </div>
        </>
    );


    
}

export default PageThree