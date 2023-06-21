import{Container, Col, Row} from 'react-bootstrap'
import NavSide from './components/NavSide'
import Body from './components/Body'
import  Router  from './Router'
import Screen from './components/Screen'
import Params from './components/Params'


function App() {
  
  return (
    <Container-fluid >
    <Row>
      <Col md='1' className='nav-left'>
        <NavSide/>
      </Col>
      <Col md='11' >
        <Row>
          <Col className='bot'>
            <Router/>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container-fluid>    
    
    
  )
}

export default App
