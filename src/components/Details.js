import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            content,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

      return (
        <div className="container py-5">
              {/*title*/}
          <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
            </div>
            {/*end title*/}
            {/*product info*/}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt ="product"/>
              </div>
            {/*product text*/}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2>Blend : {title}</h2>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                Continut: <span className="text-uppercase">
                  {content}
                </span>
              </h4>
              <h4 className="text-blue">
                <strong>
                
                  Pret: {price} <span> RON</span>
                  
                  </strong>
              </h4>
              <h4 className="text-capitalize font-weight-bold mt-3 mb-0">
                Detalii:
              </h4>
              <p className="text-muted lead">{info}
              </p>
              {/*buttons*/}
              <div className="detail-buttons">
                <Link to ="/">
                  <ButtonContainer>Inapoi la produse</ButtonContainer>
                </Link>
                  <ButtonContainer 
                  cart 
                  disabled={inCart?true:false}
                  onClick={()=>{
                    value.addtoCart(id);
                    value.openModal(id);
                  }}
                  >
                    {inCart ? "inCart" : "Adauga in cos"}
                  </ButtonContainer>
              </div>
            </div>
          </div>
        </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
