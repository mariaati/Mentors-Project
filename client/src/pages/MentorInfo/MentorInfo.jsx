import React from "react";
import {
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';


export default function MentorInfo({id}){

 


  document.body.style.backgroundColor = 'pink';

  return (
    <section className="d-flex justify-content-center align-items-center">
      <MDBRow>
        <MDBCol lg="6">
          <MDBCard className="mb-4"style={{ marginTop: '40px' }}>
            <MDBCardBody className="text-center">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle"
                style={{ width: '900px', height: '450px', objectFit: 'cover', }}
                fluid
              />
              <p  className="text-muted mb-2 fs-5">Full Stack Developer</p> 
             <p className="text-muted mb-2 fs-5">{}</p>
              <p className="text-muted mb-4 fs-6">Bay Area, San Francisco, CA</p>
              <div className="d-flex justify-content-center mb-2">
                <MDBBtn size="lg">Follow</MDBBtn>
                <MDBBtn size="lg" outline className="ms-2">
                  Message
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div className="d-flex justify-content-start">
        <a href="#!">
          <MDBIcon fab icon="facebook me-3" size="lg" />
        </a>
        <a href="#!">
          <MDBIcon fab icon="twitter me-3" size="lg" />
        </a>
        <a href="#!">
          <MDBIcon fab icon="instagram me-3" size="lg" />
        </a>
      </div>
    </section>



  );
}
