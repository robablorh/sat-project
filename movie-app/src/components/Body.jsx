import React, { useEffect, useState } from 'react'
import { Container, Row , Col} from 'react-bootstrap';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const Body = () => {
    const[movies , setMovies]=useState([]);

    const fetchMovies = async () => {
        try {

            const response = await axios.get("http://localhost:2000/Movie");
            const data = await response.data;
             setMovies(data);
           
            
        } catch (error) {
            console.log(error);
            
        }
        console.log(data)
    };

        useEffect(() => {
            fetchMovies();

        },[])
    
  return (
    <div>
        <Container>
            <Row>
            <h1>MOVIES</h1>
                { movies.map((movie)=>(
                    <Col key={movie.id} xs={12} md={4}>
                      
                         <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={movie.url} alt="movieImage" />
                <Card.Body>
              
                  <Card.Text>
                    <p>Location: {movie.title}</p>
                    <p>Type: {movie.size}</p>
                    
                  </Card.Text>
                </Card.Body>
                
              </Card>
                    
                    </Col>
                ))

                }
            </Row>
        </Container>
       
    </div>
  )
}

export default Body
