import React, { useEffect, useState, } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Params = () => {
   const { id } = useParams();
  const [movies, setMovies] = useState([])

  const fetchMovies= async () => {
    try {
        const response = await axios.get("http://localhost:2000/movie")
        const data = await response.data
        console.log(data)
        setMovies(data);
        
    } catch (error) {
        console.error(error);
        
    }
  };

  useEffect(()=>{
        fetchMovies() 
    } , [])




  return (
    <div>
        <Container>
            <Row>
           
              {
                movies.map((movie) => {
                    if(id === movie.id){
                        return(
                            <div key={movie.id}>
                <Col md='6' >
                      <img src={movie.url}/>
                </Col>
                <Col md='6'>
                    <p>Title:{movie.title}</p>
                    <p>Size:{movie.size}</p>
                   
                
                </Col>
                </div>
                        )
                    }
                })
             } 
            </Row>
        </Container>
      
    </div>
  );
}

export default Params
