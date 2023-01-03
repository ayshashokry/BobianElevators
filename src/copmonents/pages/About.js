import React, { Component } from 'react';
import '../../style sheets/aboutCss.css';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//imgs
//react spring
import { Spring, config } from 'react-spring/renderprops';
import Certificates from '../sections/Certificates';
import Header from '../layout/Header';

//language
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json');
class About extends Component {
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
    window.scrollTo(0, 0);
    this.checklang();
  }
  handleScroll = e => {
    e.preventDefault();
    const content = this.content.current;
    window.scrollTo({
      top: content.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };
  render() {
    return (
      <div className="aboutPage">
        <div className="aboutHeader">
          {' '}
          <Header />
          <Container className="aboutcaption pt-5">
            <div className="line"></div>
            <h3 className="pt-2">
              {this.state.text.abouttitle1}
              <br />
              {this.state.text.abouttitle2}
            </h3>

            <p>
              {this.state.text.trusted1}
              <br />
              {this.state.text.trusted2}
              <br /> {this.state.text.trusted3}
            </p>
          </Container>
          {/* <div className="inquiries">
            <p>Inquiries?</p>
            <p>Call us on: +965 22258060</p>
          </div>{' '} */}
          <div className="homeBtn" onClick={this.handleScroll}>
            {' '}
            <picture>
              <source
                srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/headerarrow.webp"
                className=" fas fa-chevron-circle-down"
                alt="arrow"
                type="image/webp"
              />
              <source
                srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/headerarrow.png"
                className=" fas fa-chevron-circle-down"
                alt="arrow"
                type="image/png"
              />
              <img
                src="img/creakyOldJPEG.jpg"
                className=" fas fa-chevron-circle-down"
                alt="arrow"
              />
            </picture>
          </div>
        </div>
        <div style={{ marginTop: '130px' }} className="leaders-section">
          <div className="leaders-section-title my-5">
            <div className="row red" ref={this.content}>
              <div className="Col-lg-6 mx-auto">
                <h2>{this.state.text.how}</h2>
              </div>
            </div>
            <Container>
              <h6 className="my-5 redtxt">
                {this.state.text.latest1}
                <br /> {this.state.text.latest2}
              </h6>
            </Container>
          </div>
        </div>
        <Container className="py-5">
          <Row>
            <Col sm={12} md={7}>
              <p className="txt3 px-3">{this.state.text.aboutpara1}</p>
            </Col>
            <Col className="pl-4" sm={12} md={5}>
              <Row>
                <Col className="py-5" sm={12}>
                  <picture>
                    <source
                      className="aboutLogo "
                      alt="logo2"
                      srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/logo2.webp"
                      type="image/webp"
                    />
                    <source
                      className="aboutLogo "
                      alt="logo2"
                      srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/logo.png"
                      type="image/png"
                    />{' '}
                    <img
                      src="img/creakyOldJPEG.jpg"
                      className="aboutLogo "
                      alt="logo2"
                    />
                  </picture>
                </Col>
                <Col sm={12}>
                  <picture>
                    <source
                      className="aboutLogo2 "
                      alt="logo2"
                      srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/blt-black.webp"
                      type="image/webp"
                    />
                    <source
                      className="aboutLogo2"
                      alt="logo2"
                      srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/blt-black.png"
                      type="image/png"
                    />{' '}
                    <img
                      src="img/creakyOldJPEG.jpg"
                      className="aboutLogo2 "
                      alt="logo2"
                    />
                  </picture>
                </Col>
                <Col sm={12}>
                  <h5 className="aboutQuote">
                    <p style={{ marginBottom: '-50px', fontSize: '90px' }}>“</p>
                    <p>{this.state.text.welead1}</p>
                    <p> {this.state.text.welead2}</p>
                    <p> {this.state.text.welead3}</p>

                    <p className="mymark">”</p>
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>{' '}
        <Container fluid className="shaarawySection mt-5"></Container>
        <Container>
          <p className="sharawytext text-center">
            For Interpretation of Surat Al Barzakh watch full video
          </p>
          <Row>
            <button className="sharawybtn mx-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=vfjNZAIWieA&t=109m33s"
              >
                WATCH VIDEO{' '}
              </a>
            </button>
          </Row>
        </Container>
        <div
          style={{ marginTop: '60px' }}
          className="container-fluid  numbers nums py-5"
        >
          <div className="container py-4">
            <Row>
              <Col className="number-dev" sm={12} md={4}>
                <div className="numb pb-5">
                  <Spring
                    from={{ number: 1 }}
                    to={{ number: 60 }}
                    config={config.slow}
                  >
                    {props => (
                      <h3 className="text-center">{parseInt(props.number)}</h3>
                    )}
                  </Spring>
                  <h4 className="text-center">{this.state.text.projectyear}</h4>
                </div>
              </Col>

              <Col className="number-dev" sm={12} md={4}>
                <div className="numb pb-5">
                  <Spring
                    from={{ number: 1 }}
                    to={{ number: 327 }}
                    config={config.slow}
                  >
                    {props => (
                      <h3 className="text-center">{parseInt(props.number)}</h3>
                    )}
                  </Spring>
                  <h4 className="text-center">{this.state.text.expert}</h4>
                </div>
              </Col>

              <Col className="number-dev" sm={12} md={4}>
                <div className="numb pb-5">
                  <Spring
                    from={{ number: 1 }}
                    to={{ number: 100 }}
                    config={config.slow}
                  >
                    {props => (
                      <h3 className="text-center">{parseInt(props.number)}%</h3>
                    )}
                  </Spring>
                  <h4 className="text-center">{this.state.text.satisfy}</h4>
                </div>
              </Col>
            </Row>{' '}
          </div>{' '}
          <div className="Message mt-5">
            <h6>{this.state.text.msghead}</h6>
          </div>{' '}
        </div>
        <Container className="py-5"></Container>
        <Container className="mt-5 messageContainer">
          <Row className="mt-5 justify-content-center">
            <Col className="mx-4" sm={12} md={5}>
              <p style={{ textAlign: 'justify' }}>
                {this.state.text.msg1}
                <br /> {this.state.text.msg2}
              </p>
            </Col>
            <Col className="mx-4" sm={12} md={5}>
              <p style={{ textAlign: 'justify' }}>
                {this.state.text.msg3}
                <br /> {this.state.text.msg4} <br />
                <br />
                <span style={{ fontSize: '21px', fontWeight: 'bold' }}>
                  {this.state.text.manager}
                </span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ marginTop: '60px' }}>
          <Row className="justify-content-center m-auto">
            <Col className="abouMission abouMission1 py-4" sm={12} md={4}>
              <h5 className=" py-3 mb-4"> {this.state.text.mission1} </h5>

              <p>{this.state.text.mission2}</p>
              <p>{this.state.text.mission3}</p>
              <p>{this.state.text.mission4}</p>
            </Col>

            <Col className="abouMission py-4" sm={12} md={4}>
              <h5 className=" py-3 mb-4"> {this.state.text.vision1} </h5>
              <p>{this.state.text.vision2}</p>
            </Col>
            <Col className="abouMission abouMission1 py-4" sm={12} md={4}>
              <h5 className="py-3 mb-4"> {this.state.text.value1} </h5>
              <p>{this.state.text.value2}</p>
            </Col>
          </Row>
        </Container>
        <Certificates />
      </div>
    );
  }
}

About.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(About));
