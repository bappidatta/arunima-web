import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
const Primark = () => {
  const photos = [
    {
      id: 1,
      image: "/images/pri1.jfif",
    },
    {
      id: 2,
      image: "/images/pri2.jpg",
    },
    {
      id: 3,
      image: "/images/pri3.jpg",
    },
    {
      id: 4,
      image: "/images/tar40.png",
    },
  ];

  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3">Primark</h3>

      <Row className="justify-content-md-center">
        {photos &&
          photos.map((photo) => (
            <Col sm={3} key={photo.id} className="text-center">
              <ModalImage
                key={photo}
                small={photo.image}
                large={photo.image}
                alt={photo.name}
                hkeyeDownload={true}
                hkeyeZoom={true}
                className="gallery-image shadow-sm rounded bg-white m-1 p-3"
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Primark;
