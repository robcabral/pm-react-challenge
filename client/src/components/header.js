import React from 'react';
import {Jumbotron, Container, Row, Image, Col} from 'react-bootstrap';
import bg from '../assets/tv-shows-screens.gif'
import icon from '../assets/tv.svg'

const header = () => {
  var bgstyles = {
    "backgroundImage": `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url(${bg})`,
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "paddingBottom": "20%",
    "padding": "5em inherit"
  }
    return (
      <div>
        <Jumbotron style={bgstyles}>
          <Container bsPrefix='text-white' fluid="md">
            <Row >
            <Col xs={3} md={1}><Image bsPrefix="rounded float-left" src={icon}/></Col>
            <Col xs={5} md={5}>
              <Row bsPrefix='text-white'><h1>TV Maze App</h1></Row>
              <Row bsPrefix='text-white'><p> Search for your favorite TV shows via Maze API!</p></Row>
            </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
}

export default header;