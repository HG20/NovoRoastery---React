import React, { Component } from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class PrajitoriaNoastra extends Component {
    render() {
        return (
            <Container>
					<div className="bg1"></div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-10 mx-auto col-sm-6 text-center">
                        <h1 className="text-capitalize"><strong className="banner-title ">procesul </strong>de prajire</h1>
                        <br></br>
                    </div>
                    </div>
                    
      <br></br>
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="956" height="538" src="https://www.youtube.com/embed/viLcd7xfZ00" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
              </Container>
            
        )
    }
}

export default PrajitoriaNoastra;