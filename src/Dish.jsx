import React from 'react'

const Dish = ({ dishes}) => {
    // console.log(dishes)
    
    const dishList = dishes.map(dish => {
        return (    
        <div className="col" key={dish.id}>
            <div className="card h-100 bg-dark">
                <img src={dish.image} className="card-img-top" alt=" " />
                <div className="card-body">
                    <span className="badge bg-primary d-flex flex-wrap justify-content-between"><span className="text-light fw-bold">Ratings : {dish.ratings}</span><span>{dish.reviews} delivery reviews</span></span>
                    <h1 className="card-title text-danger">{dish.name}</h1>
                    <p className="card-text mb-0 text-secondary">{dish.category}</p>
                    <div className="d-flex flex-wrap justify-content-between">
                    <p className="card-text mb-0 text-light fw-bold">{dish.cost}</p>
                    <p className="card-text mb-0  badge bg-success">{dish.time}</p> 
                    </div>
                </div>
            </div>
        </div>           
        )
        
    })
    return (
        <>
            {dishList}
        </>
    )
}
export default Dish;

