import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Contact extends Component {
    
    render() {
        
        return (

            <Container>
                <div className="bg2"></div>

                <section class="about py-5" id="about">
                    <div className="container">

                    <div className="row">
                        <div className="col-6 mx-auto col-md-12 my-5">
                        <h1 className="text-capitalize"><strong className="banner-title ">Contact</strong></h1>
                        <br></br>
                        <h5 className="my-4 text">Adresa: Calea Floresti nr.2</h5>
                        <h5 className="my-4 text">Telefon: 0724 350 341</h5>
                        <h5 className="my-4 text">e-mail: novoroastery@gmail.com</h5>
                        </div>
                    </div>
                </div>

            </section>

            
            {/*
                <Map
                    google={this.props.google}
                    zoom={16}
                    initialCenter={{ lat: 46.780896, lng: 23.604602}}
                    >
                    <Marker position={{ lat: 46.780896, lng: 23.604602}} />
                </Map>
            */}
            </Container>
        );
    }
}


export default GoogleApiWrapper({
  })(Contact);