import React from 'react'
import { useState, useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {useDispatch,useSelector} from 'react-redux'
import { listRestaurants} from '../Action/restaurantAction'

function Home() {
    // const [hotels, setHotels] = useState([])                     //without redux
    const dispatch= useDispatch()
    const hotels= useSelector(state=>state.restaurantList)
    const {restaurant} = hotels

    useEffect(() => {
    dispatch(listRestaurants())
    
    
    }, [])
    


//     useEffect(() => {                                                          //without Redux

//         const fetchData = async () => {
//             await fetch('/restaurants.json')
//                 .then((res) => res.json())
//                 .then((data) => setHotels(data.restaurants))

//         }

// fetchData()

//     },[])




    return (
<Row>
  {
      restaurant.map(item=>(
      <Col sm={12} md={8} lg={6} xl={3}>

<RestaurantCard data={item}/>

      </Col>
      ))
      }
      </Row>
    );

}

export default Home



