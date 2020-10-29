import React, { Component } from 'react';
import {Container, Row, Col, Image, ListGroup} from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser';


class results extends Component {

  renderSearchResult(result){
    return( <ListGroup.Item action variant="dark" as="li">
              <Container> 
                <Col xs={6} md={6}>
                  <Image bsPrefix="float-left" src={result.show.image ? result.show.image.medium : 'https://img.icons8.com/cute-clipart/2x/nothing-found.png'} rounded/>
                </Col>
                <Col xs={6} md={6}>
                  <Container>
                    <Row> <h1> {result.show.name} </h1></Row>
                    <Row> <h5> {ReactHtmlParser(result.show.summary)} </h5></Row>
                    <Row> <h5><a target="_blank" rel="noreferrer" href={result.show.url}> {result.show.url}  </a> </h5></Row>
                  </Container>
                </Col>
              </Container>
            </ListGroup.Item> )
  }

  renderSearchResults(){
    if (this.props.results && this.props.results.tv_search_results){
      let results = this.props.results.tv_search_results
      return (<ListGroup as="ul">
                {results.map((result) => { return this.renderSearchResult(result)})}
              </ListGroup>)
    } else if (this.props.no_show){
      return (<Container> 
                 <Col xs={6} md={6}>
                  <Row> <h1> Sorry No Results... </h1> </Row>
                  <Row> <Image src='https://cdn.dribbble.com/users/1208688/screenshots/4563859/no-found.gif' rounded/> </Row>
                  </Col> 
              </Container>)
    }
  }

  render(){
    return (<> {this.renderSearchResults()} </>)
  }

}

export default (results)
