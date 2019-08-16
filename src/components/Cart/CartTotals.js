import React from 'react'
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import Checkout from '../Checkout';

export default function CartTotals({value}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to ="/">
                            <MDBBtn rounded color="danger"
                            className= "text-uppercase mb-3 px-5" 
                            type="button"
                            onClick={() => clearCart()}
                            >
                                Inapoi la produse
                            </MDBBtn>
                        </Link>
                        <Link to ="/checkout">
                            <MDBBtn rounded color ="success"
                            className="text-uppercase mb-3 px-5" 
                            type="button"
                            onClick={() => Checkout}
                            >
                                Proceseaza comanda
                            </MDBBtn>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                                <strong>{cartSubtotal} RON</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                TVA :
                            </span>
                                <strong>{cartTax} RON</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                                <strong>{cartTotal} RON</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
