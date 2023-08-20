import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import '../App.css'


function AllCategories() {
    return(
        <>
          <Container className="categories">
            <h1 className="title">Browse All Categories</h1>
            <Row>
              <Col sm>
              <h2 className="subtitle">Vehicles</h2>
                <ListGroup>
                  <ListGroup.Item className="item">Cars</ListGroup.Item>
                  <ListGroup.Item className="item">Motorcycles</ListGroup.Item>
                  <ListGroup.Item className="item">Commercial Vehicles & Boats</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm>
              <h2 className="subtitle">Leisure/Sports/Hobbies</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className="item">Hobby & Collectibles</ListGroup.Item>
                  <ListGroup.Item className="item">Music/Movies/Books</ListGroup.Item>
                  <ListGroup.Item className="item">Pets</ListGroup.Item>
                </ListGroup> 
              </Col>
              <Col sm>
              <h2 className="subtitle">Properties</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className="item">Properties for Sale</ListGroup.Item>
                  <ListGroup.Item className="item">Properties for Rent</ListGroup.Item>
                  <ListGroup.Item className="item">New Projects</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm>
              <h2 className="subtitle">Everything Else</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className="item">Women's Collection</ListGroup.Item>
                  <ListGroup.Item className="item">Men's Collection</ListGroup.Item>
                  <ListGroup.Item className="item">Kids & Babies</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </>
   
    )
}

export default AllCategories;