import React, { Component } from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class DespreNoi extends Component {
    render() {
        return (
            <Container>
				<div className="bg">
                    <p className="hometext">There will be <strong className="coffee1">Coffee!</strong></p>
                </div>
                <section class="about py-5" id="about">
                    <div className="container">

                    <div className="row">
                        <div className="col-4 mx-auto col-md-12 my-5">
                        <h1 className="text-capitalize">despre <strong className="banner-title ">noi</strong></h1>
                        <br></br>
                        <p className="my-4 text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
                            beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                            porro at dolorum! Ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
                            beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                            porro at dolorum! Ad!</p>
                        </div>
                    </div>
                </div>
            </section>
                            
              </Container>

        )
    }
}

export default DespreNoi;

