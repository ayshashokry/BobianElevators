import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style sheets/Services.css';
import Header from '../layout/Header';
import { Container, Col } from 'react-bootstrap';
// Modules

//language
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json');

class Services extends Component {
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
    window.scrollTo(0, 0);
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
      <div className="Services-page">
        <div className="servHeader">
          <Header />
          <Container className="servcaption pt-5">
            <div className="line"></div>
            <h3 className="pt-2">
              {this.state.text.servicetitle1}
              <br />
              {this.state.text.servicetitle2}
            </h3>

            <p>
              {this.state.text.servicesubtitle1} <br />
              {this.state.text.servicesubtitle2} <br />{' '}
              {this.state.text.servicesubtitle3}
            </p>
          </Container>
          {/* <div className="inquiries">
            <p>Inquiries?</p>
            <p>Call us on: +965 22258060</p>
          </div> */}
          <div className="homeBtn" onClick={this.handleScroll}>
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
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                className=" fas fa-chevron-circle-down"
                alt="arrow"
              />
            </picture>
          </div>
        </div>

        <div
          style={{ marginTop: '100px' }}
          className="wide-range my-5"
          ref={this.content}
        >
          <h2> {this.state.text.widerangheader}</h2>
          <div className="cont my-5">
            <h6>{this.state.text.Inspectiontitle}</h6>
            <Container className="text-center">
              <Col className="text-center m-auto" sm={12} md={8}>
                <p>{this.state.text.Inspectionsubtitle}</p>
              </Col>
            </Container>
            <h6>{this.state.text.developmenttitle}</h6>
            <Container className="text-center">
              <Col className="text-center m-auto" sm={12} md={8}>
                <p>{this.state.text.developmentsubtitle}</p>
              </Col>
            </Container>{' '}
            <h6> {this.state.text.Executiontitle}</h6>
            <Container className="text-center">
              <Col className="text-center m-auto" sm={12} md={8}>
                <p>{this.state.text.Executionsubtitle}</p>
              </Col>
            </Container>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className=" Installation cont col-lg-5 mt-5">
            <h4 className="">{this.state.text.InstallationServices}</h4>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <div className="Installation">
          {/* <h4 className="">{this.state.text.InstallationServices}</h4> */}

          <div className="row d-flex justify-content-center">
            <div className="col-lg-2">
              <picture>
                <source
                  srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Installation.webp"
                  alt="icon1"
                  className="img-fluid pt-5"
                  type="image/webp"
                />
                <source
                  srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Installation.png"
                  alt="icon1"
                  className="img-fluid pt-5"
                  type="image/png"
                />{' '}
                <img
                  src="img/creakyOldJPEG.jpg"
                  alt="icon1"
                  className="img-fluid pt-5"
                />
              </picture>
            </div>
            <div className="col-lg-6 pt-5 pl-5 mb-5">
              <h6>
                {this.state.text.InstallationsubServices}
                <br />
                <br />
                {this.state.text.Installationsub2Services}
              </h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className=" Maintenance cont col-lg-5 ">
            <h4 className="mt-5 ml-3">
              {this.state.text.Maintenance} & {this.state.text.Support}
            </h4>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <div className="Maintenance cont">
          {/* <h4 className=" my-5">
            {this.state.text.Maintenance} & {this.state.text.Support}
          </h4> */}

          <div className="row d-flex justify-content-center">
            <div className="col-lg-2">
              <picture>
                <source
                  srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Maintenance.webp"
                  alt="icon2"
                  className="img-fluid pt-5"
                  type="image/webp"
                />
                <source
                  srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Maintenance.png"
                  alt="icon2"
                  className="img-fluid pt-5"
                  type="image/png"
                />{' '}
                <img
                  src="img/creakyOldJPEG.jpg"
                  alt="icon2"
                  className="img-fluid pt-5"
                />
              </picture>
            </div>
            <div className="col-lg-6 pt-5 pl-5 mb-5">
              <h6>
                {this.state.text.Maintenancesec1} <br />
                <br />
                {this.state.text.Maintenancesec2}
              </h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className=" Spare cont col-lg-5 ">
            <h4 className="mt-5 ml-3 mt-5">{this.state.text.SpareParts}</h4>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <div className="Spare cont ">
          {/* <h4 className=" my-5">{this.state.text.SpareParts} </h4> */}

          <div className="row d-flex justify-content-center">
            <div className="col-lg-2">
              <picture>
                <source
                  srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Spare.webp"
                  alt="icon3"
                  className="img-fluid pt-5"
                  type="image/webp"
                />
                <source
                  srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Spare.png"
                  alt="icon3"
                  className="img-fluid pt-5"
                  type="image/png"
                />{' '}
                <img
                  src="img/creakyOldJPEG.jpg"
                  alt="icon3"
                  className="img-fluid pt-5"
                />
              </picture>
            </div>
            <div className="col-lg-6 pt-5 pl-5">
              <h6>{this.state.text.SpareParg}</h6>
            </div>
          </div>
        </div>

        <p className="mt-5 Interested"> {this.state.text.Interested} ?</p>

        <div className="row">
          <button className="servbtn btn mb-5">
            <Link
              to="/contact"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              {' '}
              {this.state.text.Letstalk}!
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

Services.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});
export default connect(mapStateToProps, { changeLang })(withRouter(Services));
