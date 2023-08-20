import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Handyman from './images/handyman.png';
import Houserent from './images/houserent.png';
import Housesale from './images/housesale.png';
import Motorcycle from './images/motorcycle.png';
import Restaurant from './images/restaurant.png';
import Car from './images/car.png';
import CategoriesIcon from './images/categoriesicon.png';
import Hotel from './images/hotel.png';
import '../App.css'

function Categories() {
    return(
        <>
        <Container className='categories-container'>
            <h6>Explore categories</h6>
        <Row className='category-row'>
            <Col align="center">
                <div className='img-container'>
                <img src={Restaurant} alt='Restaurant icon'/>
                </div>
                <p>Order a Meal</p>

            </Col>
            <Col align="center">
                <div className='img-container'>
                <img src={Hotel} alt='Hotel icon'/>
                </div>
                <p>Book a Hotel</p>
            </Col>
            <Col align="center">
                <div className='img-container'>
                <img src={Housesale} alt='House icon'/>
                </div>
                <p>Properties for Sale</p>
            </Col>
            <Col align="center">
                <div className='img-container'>
                <img src={Handyman} alt='Handyman icon'/>
                </div>
                <p>Services</p>
            </Col>
            <Col align="center">
                <div className='img-container'>
                <img src={Motorcycle} alt='Motorcycle icon'/>
                </div>
                <p>Motorcycles</p>
            </Col>
            <Col align="center">
                <div className='img-container'>
                <img src={Houserent} alt='house icon'/>
                </div>
                <p>Property for Rent</p>
            </Col>
            <Col align="center">
                <div className='img-container'>
                <img src={Car} alt='car icon'/>
                </div>
                <p>Cars for Sale</p>
            </Col>
            </Row>
            <Row className='category-icon-container'>
                <Col className='text-end'>
                <img className='categories-icon' src={CategoriesIcon} alt='categories icon' />
                See all Categories
                </Col>             
            </Row>
            <Row>
            <h6>Recomended For you</h6>
            </Row>
        </Container>     
        </>
    )
}

export default Categories;