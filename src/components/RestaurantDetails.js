import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'
import { Row, Col, Image,ListGroup } from 'react-bootstrap'

function RestaurantDetails() {
  const [restaurants,setRestaurants]=useState([])
  const {id}= useParams()
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
          .then((res) => res.json())
          .then((data) => setRestaurants(data.restaurants))
    }
    fetchData();
    
  }, [])
  const details=restaurants.find((i)=>i.id==id)
  return (
    <>
    <Link className="btn btn-dark my-2 rounded" to="/">Back</Link>
    { details ? ( 
      
      <Row className="my-3">
        <Col md={4}>
          <Image className="img" src={details.photograph} alt={details.name} fluid/>
        </Col>
      <Col md={4}>
        <ListGroup.Item>
          <h4>{details.name}</h4>
          <hr></hr>
          <p className=" fw-bold text-danger">{details.neighborhood}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p><b className="text-warning">Cuisine:</b>{details.cuisine_type}</p>
       
        </ListGroup.Item>
        <ListGroup.Item>
          <p ><b className="text-warning">Address:</b>{details.address}</p>
       
        </ListGroup.Item>
      </Col>


      <Col md={4}>
        <ListGroup.Item>
          <h4>Operating Hours</h4>
          <hr></hr>
          <p ><b className="text-success">Monday:</b> {details.operating_hours.Monday}</p>
          <p><b className="text-success">Tuesday:</b> {details.operating_hours.Monday}</p>
          <p><b className="text-success">Wednesday:</b> {details.operating_hours.Monday}</p>
          <p><b className="text-success">Thursday:</b> {details.operating_hours.Monday}</p>
          <p><b className="text-success">Friday:</b> {details.operating_hours.Monday}</p>
          <p><b className="text-success">Saturday:</b> {details.operating_hours.Monday}</p>
          <p><b className="text-success">Sunday:</b>: {details.operating_hours.Monday}</p>
          
        </ListGroup.Item>
        
      </Col>
 <Col md={12} className="mt-4">
 <ListGroup.Item>
   <h3 className="text-primary">Reviews</h3>
   <hr></hr>
   {details.reviews.map(i=>
   <>
   <p><b className="text-warning">Name:</b>{i.name}</p>
   <p><b className="text-warning">Date:</b>{i.date}</p>
   <p><b className="text-danger">Rating:</b>  {i.rating}/5</p>
   <p><b className="text-success">Comments:</b>{i.comments}</p>
   <hr></hr>
   </>


  ) }
   
  
  
  
  

 </ListGroup.Item>

 
 </Col>
      </Row>
    
    


    ):"null"}
    </>
    
  )
}

export default RestaurantDetails