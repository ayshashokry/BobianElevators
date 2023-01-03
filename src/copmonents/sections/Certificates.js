import React, { Component } from 'react';
import Slider from 'react-slick';
import {Container } from 'react-bootstrap';
//language
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json');
class Certificates extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.state = {
      text: text.en
    };
  }
  checklang = () => {
    if (this.props.language === 'en') {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === 'ar') {
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }

  changeLanguage = e => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      autoplay: false,

      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
      arrows: true,
      rows: 1,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 3,
            speed: 500,
            rows: 1,
            slidesPerRow: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 2,
            speed: 500,
            rows: 1,
            slidesPerRow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '10px',
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 1
          }
        }
      ]
    };
    return (
      <Container fluid className="mb-5 certificate" >
        <h2
          className="py-4 text-center"
          style={{ fontWeight: 'bold', fontSize: '45px' }}
        >
          {this.state.text.certificate}
        </h2>
        <Slider {...settings} >
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/one.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/one.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/three.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/three.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/four.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/four.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/five.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/five.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/six.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/six.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/seven.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/seven.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/two.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/two.png"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
          <div className="px-3">
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/eight.webp"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/eight.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className="img-fluid certficateimg"
                alt="bobian certificate"
              />
            </picture>
          </div>
        </Slider>
      </Container>
    );
  }
}

Certificates.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(
  withRouter(Certificates)
);
