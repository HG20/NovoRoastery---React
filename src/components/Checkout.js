import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import { MDBInput, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';


class Checkout extends Component {
    render() {
        return (
            <Container>
                <section class="checkout py-5" Style=" width: 60%" id="checkout">
                <div>
                    Ai deja cont? 
                    Creează-ți unul de la prima comandă. Folosindu-l comanzi mai simplu, mai rapid și ai acces la istoricul comenzilor tale. 
                    În plus, ne ajuți să-ți oferim o experiență personalizată.
                </div>
                <br></br>
                <Link to ="/authentificare">
                    <button className="FormField__Button mr-20" 
                            type="button"
                            >
                                Authentifica-te aici
                    </button>
                </Link>
                

                <MDBInput label="Nume" />
                <MDBInput label="Prenume" />
                <MDBInput label="Companie (optional)" />
                <MDBInput label="CUI (optional)" />
                <MDBInput label="email" />
                <MDBInput label="Telefon" />
                <MDBInput label="Adresa facturare" /> 
                <MDBInput label="Adresa livrare" />
                <MDBInput label="Localitate" />
                <MDBInput label="Cod postal" />
                </section>
            </Container>
        );
    }
}


export default Checkout;


