import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import ModalImage from "react-modal-image";

const george = () => {
  const photos = [
    {
      key: 1,
      url: "/images/geo1.jfif",
    },
    {
      key: 2,
      url: "/images/geo2.jfif",
    },
    {
      key: 3,
      url: "/images/geo3.jpg",
    },
    {
      key: 4,
      url: "/images/geo4.jpg",
    },
    {
      key: 5,
      url: "/images/geo5.jpg",
    },
    {
      key: 6,
      url: "/images/geo6.jpg",
    },
    {
      key: 7,
      url: "/images/geo7.jpg",
    },
    {
      key: 8,
      url: "/images/geo8.jpg",
    },
    {
      key: 9,
      url: "/images/geo9.jpg",
    },
    {
      key: 10,
      url: "/images/geo10.jpg",
    },
    {
      key: 11,
      url: "/images/geo11.jpg",
    },
    {
      key: 12,
      url: "/images/geo12.jpg",
    },
    {
      key: 1,
      url: "/images/geo13.jpg",
    },
    {
      key: 13,
      url: "/images/geo14.jpg",
    },
    {
      key: 14,
      url: "/images/geo15.jpg",
    },
    {
      key: 15,
      url: "/images/geo16.jpg",
    },

    {
      key: 16,
      url: "/images/geo17.jpg",
    },
    {
      key: 17,
      url: "/images/geo18.jpg",
    },
  ];

  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3">George</h3>

      <Row className="justify-content-md-center">
        {photos &&
          photos.map((photo) => (
            <Col sm={3} key={photo.key} className="text-center">
              <ModalImage
                key={photo}
                small={photo.url}
                large={photo.url}
                alt={photo.name}
                hideDownload={true}
                hideZoom={true}
                className="gallery-image shadow-sm rounded bg-white m-1 p-3"
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default george;
