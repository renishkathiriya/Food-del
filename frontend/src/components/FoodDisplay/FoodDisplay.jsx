import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-dispalay'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((itme, index) => {

                    if (category === "All" || category === itme.category) {
                        return <FoodItem key={index} id={itme._id} name={itme.name} description={itme.description} price={itme.price} image={itme.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
