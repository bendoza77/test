import Car from "../Car";

const PageTwo = ({car, index, filter}) => {
    
    return (
        <>
            <div style={{display: index === 2 ? "grid" : "none"}} className="page_one">
                {filter.length > 6 ? filter.slice(6, 12).map(el => {
                    return <Car car={el} />
                }) : car.slice(6, 12).map(el => {
                    return <Car car={el}/>
                })}
            </div>
        </>
    );


    
}

export default PageTwo