import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="brown" className="font-small pt-4 mt-4">
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
          <button type="button" class="btn btn-info btn-rounded">ANPC</button>
          <button type="button" class="btn btn-info btn-rounded">S.O.L.</button>
          <button type="button" class="btn btn-info btn-rounded">GDPR</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Mano Libre Coffee Roasters
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;