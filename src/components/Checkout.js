import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import { MDBInput, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import CartTotals from './Cart/CartTotals';


class Checkout extends Component {
    render() {
        return (
            <Container>
                <section class="checkout py-5" Style=" width: 60%" id="checkout">
                <div>
                    Ai deja cont? 
                    Folosindu-l comanzi mai simplu, mai rapid si ai acces la istoricul comenzilor tale. 
                    In plus, ne ajuti sa-ti oferim o experienta personalizata.
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

            <React.Fragment>
            <div className="container-checkout" Style="float:right">
                <span>total: {CartTotals} RON</span>
            </div>
            </React.Fragment>
            </Container>
            
        );
    }
}


export default Checkout;


