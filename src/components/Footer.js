import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, Button } from "mdbreact";
import GDPR from './GDPR'

const Footer = () => {
  return (
    <MDBFooter color="brown" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
            <h5 className="title">Mano Libre</h5>
            <p>
              There will be Coffee!
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Social Links</h5>
              <a class="fb-ic mr-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
              <a class="ins-ic mr-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
          </MDBCol>
          <MDBCol md="3">
            <Button type="button" className="btn btn-info btn-rounded">ANPC</Button>
            <Button type="button" className="btn btn-info btn-rounded">S.O.L.</Button>
            <Button href="/gdpr" type="button" className="btn btn-info btn-rounded">GDPR</Button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}  Mano Libre Coffee Roasters
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;