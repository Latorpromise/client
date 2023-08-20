import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from './images/img1.jpg';
import slider2 from './images/img2.jpg';
import slider3 from './images/img3.jpg';


class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0 // The index of the current active slide
    };
  }

  handleSelect = (selectedIndex, e) => {
    // Update the index state when a new slide is selected
    this.setState({
      index: selectedIndex
    });
  };

  render() {
    return (
      <div className="container">
        <Carousel  activeIndex={this.state.index} onSelect={this.handleSelect}>
          <Carousel.Item key="1" className='carousel-item'>
            <img className='carousel-img' src={slider1} alt="First slide" />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Some description for the first slide.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item key="2">
            <img src={slider2} alt="Second slide" />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Some description for the second slide.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item key="3">
            <img src={slider3} alt="Third slide" />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Some description for the third slide.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;