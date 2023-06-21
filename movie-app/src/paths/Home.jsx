import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:2000/Movie");
      const data = await response.data;
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100 " src={s1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={s4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container  className="cardss">
        <Row className="row-gap-3">
          <h1>MOVIES</h1>
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} md={2} className="overflow-hidden">
              <Link to={`/movie/${movie.id}`} className="overflow-hidden">
                <Card style={{ width: "11rem" }}>
                  <Card.Img
                    variant="top"
                    src={movie.url}
                    alt="movieImage"
                    className="camage overflow-hidden"
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
