import React, { Component } from 'react';
import {Button, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import Results from './results'


class search extends Component {

  constructor(props){
    super(props)
    this.state = {no_show: false}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({tv: e.target.value})
  }

  handleOnSubmit(){
    if (this.state.tv){
      fetch('/api/tv/search', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "query": this.state.tv}),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.tv_search_results === undefined || responseJson.tv_search_results.length === 0) {
          this.setState({results: [], no_show: true})
        } else {
          this.setState({results: responseJson})
        }
      })
      .catch((error) => {
        this.setState({no_show: true})
      });
    }
  }

  
  renderSearchBar(){
    return (  <InputGroup size="lg" className="mb-5">
                <FormControl
                    type="text"
                    value={this.state.tv}
                    placeholder="Search a TV Show..."
                    onChange={this.handleChange}
                />
                <InputGroup.Append>
                    <Button onClick={() => this.handleOnSubmit()}>Search</Button>
                </InputGroup.Append>
              </InputGroup>
          )
  }

  render(){
    return (<Container>
              {this.state.modal && this.renderModal()}
              <Row>
                <Col sm={10} md={10} xsOffset={2}>
                  {this.renderSearchBar()}
                  <Results results={this.state.results} no_show={this.state.no_show}/>
                </Col>
              </Row>
            </Container>
    )
  }
}

export default (search)
