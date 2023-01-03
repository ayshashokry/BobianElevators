// Libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Modules

import Slider from "react-slick";
import Header from "../layout/Header";
import HomeVideos from "../sections/HomeVideos";
//react-bootstrap
import { Container, Card, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
const text = require("../localization/lan.json");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text.en,
      products: [
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Parliament%2BOf%2BKuwaot.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Parliament+Of+Kuwaot.jpg",
          name: "Parliment Of Kuwait",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSheikh%2BSaad%2BHalls.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Sheikh+Saad+Halls.jpg",
          name: "Al Sheikh Saad Halls",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p31.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p31.JPG",
          name: "Al Hajri Tower",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p32.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p32.JPG",
          name: "Al Anzei Building ",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p33.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p33.JPG",
          name: "Marim Residence",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p34.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p34.JPG",
          name: "Abdullatef Al Menis - Salmiya",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p35.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p35.jpg",
          name: "Waleed Al Banai",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p36.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p36.JPG",
          name: "Fraj Swilah Resturant",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BYosufen%2BMosque.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Yosufen+Mosque.JPG",
          name: "Al Yosufen Mosque",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Eurika%2BBuilding.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Eurika+Building.JPG",
          name: "Eurika Building",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Car%2BParking-Ibn%2BSeina%2BHospital.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Car+Parking-Ibn+Seina+Hospital.JPG",
          name: "Car Parking-Ibn Seina Hospital",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Lavida%2BTower.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Lavida+Tower.JPG",
          name: "Lavida Tower",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p1.webp",
          srcpng: "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p1.jpg",
          name: "Siena park residences building facade",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p2.webp",
          srcpng: "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p2.jpg",
          name: "Primus Hotel Sydney, Australia",
        },
        {
          srcwebp: "https://bobianwebsite.s3.me-south-1.amazonaws.com/p3.webp",
          srcpng: "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p3.jpg",
          name: " Novo Kl Malaysia",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Ali%2BAl%2BSebei%2B-%2BMahbula.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Ali+Al+Sebei+-+Mahbula.JPG",
          name: "Ali AlSebei",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BOthman%2BKhitan.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Othman+Khitan.JPG",
          name: "Al Othman Khitan",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSalmiya%2BResturant.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Salmiya+Resturant.JPG",
          name: "Al Salmiya Resturant",
        },
        {
          srcwebp:
            "https://bobianwebsite.s3.me-south-1.amazonaws.com/Suood%2BAl%2BBabteinn%2BCenter.webp",
          srcpng:
            "https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Suood+Al+Babteinn+Center.jpg",
          name: "Suood Al Babteinn Center",
        },
      ],
    };
    this.content = React.createRef();
  }

  checklang = () => {
    if (this.props.language === "en") {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === "ar") {
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }

  changeLanguage = (e) => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };

  handleScroll = (e) => {
    e.preventDefault();
    const content = this.content.current;
    window.scrollTo({
      top: content.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.checklang();
  }
  render() {
    const settings = {
      className: "center",
      // autoplay: true,
      // autoplaySpeed: 2000,
      centerMode: true,
      infinite: true,
      centerPadding: "260px",
      slidesToShow: 1,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 820,
          settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 490,
          settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
          },
        },
      ],
    };
    return (
      <div className="homee">
        <div className="header">
          <Header />
          <Container className="homecaption pt-5">
            <h2 className="pt-2">{this.state.text.bobian}</h2>
            <div className="line"></div>
            <h3>
              {" "}
              {this.state.text.safty1} <br /> {this.state.text.safty2}{" "}
            </h3>

            <p>
              {this.state.text.following1}
              <br /> {this.state.text.following2}
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
              />{" "}
              <img
                src="img/creakyOldJPEG.jpg"
                className=" fas fa-chevron-circle-down"
                alt="arrow"
              />
            </picture>
          </div>
        </div>{" "}
        <div
          style={{ marginTop: "100px" }}
          className="rookies-section"
          ref={this.content}
        >
          <h2>{this.state.text.rookies}</h2>

          <Container className="py-5">
            <h3>{this.state.text.handle}</h3>

            <h4 className="pb-4">{this.state.text.free1}</h4>
            <h4>
              {" "}
              {this.state.text.free2} <br /> {this.state.text.free3}
            </h4>
          </Container>
        </div>{" "}
        <div style={{ marginTop: "90px" }} className="blt-section">
          <Container>
            <Col sm={12}>
              <div className="blt-img">
                <picture>
                  <source
                    srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/blt.webp"
                    alt="blt logo"
                    className="img-fluid"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/blt.png"
                    alt="blt logo"
                    className="img-fluid"
                    type="image/png"
                  />{" "}
                  <img
                    src="img/creakyOldJPEG.jpg"
                    alt="blt logo"
                    className="img-fluid"
                  />
                </picture>
              </div>
            </Col>
            <Col sm={12}>
              <div className="title-line"></div>
            </Col>
            <Col className="pb-4" sm={12}>
              <h3>{this.state.text.usinglatest} </h3>
            </Col>
            <Col className="m-auto" sm={12} md={11}>
              <h4> {this.state.text.usinglatest2}</h4>
            </Col>
          </Container>
        </div>
        <div style={{ marginTop: "120px" }} className="leaders-section">
          <div className="leaders-section-title my-5">
            <div className="row red">
              <div className="Col-sm-6 mx-auto">
                <h2 className="px-5">{this.state.text.leaders}</h2>
              </div>
            </div>
            <Container>
              <h4 className="my-5">{this.state.text.leaders2}</h4>
            </Container>
            <div className="homeslider">
              <Slider {...settings} className="mb-5">
                {this.state.products.map(function (inter) {
                  return (
                    <div className="px-3" key={inter}>
                      <div className="inter-image">
                        <picture>
                          <source
                            srcSet={inter.srcwebp}
                            className="img-fluid interimg"
                            alt="bobian products"
                            type="image/webp"
                          />
                          <source
                            srcSet={inter.srcpng}
                            className="img-fluid interimg"
                            alt="bobian products"
                            type="image/png"
                          />{" "}
                          <img
                            src="img/creakyOldJPEG.jpg"
                            className="img-fluid interimg"
                            alt="bobian products"
                          />
                        </picture>
                      </div>
                      <h5 className="imgcaption mt-4">{inter.name}</h5>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <p className="mt-5">{this.state.text.see}</p>

            <div className="row">
              <button className="btn my-button">
                {" "}
                <Link
                  to="/projects"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {this.state.text.visit}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }} className="Offering-section">
          <h2 className="pt-5"> {this.state.text.offering}</h2>
          <Container className="my-5">
            <div className="row">
              <div className=" my-3 col-lg-4  col-md-7 col-sm-12 text-center mx-auto  d-flex align-items-stretch">
                <Card>
                  <picture>
                    <source
                      srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Sales.webp"
                      className="card-img-top img-fluid py-5"
                      alt="icon1"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Sales.png"
                      className="card-img-top img-fluid py-5"
                      alt="icon1"
                      type="image/png"
                    />
                    <img
                      src="img/creakyOldJPEG.jpg"
                      className="card-img-top img-fluid p-5"
                      alt="icon1"
                    />
                  </picture>
                  <Card.Body>
                    <Card.Title>{this.state.text.sales}</Card.Title>
                    <Card.Text style={{ marginBottom: "40px" }}>
                      {this.state.text.cardtxt1}
                    </Card.Text>
                    <Button variant="primary" className="my-button">
                      <Link
                        to="/products"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        {" "}
                        Visit Products
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              <div className=" my-3  col-lg-4 col-md-7 col-sm-12 text-center mx-auto d-flex align-items-stretch">
                <Card>
                  <picture>
                    <source
                      srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Repairs.webp"
                      className="card-img-top img-fluid py-5"
                      alt="icon2"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Repairs.png"
                      className="card-img-top img-fluid py-5"
                      alt="icon2"
                      type="image/png"
                    />
                    <img
                      src="img/creakyOldJPEG.jpg"
                      className="card-img-top img-fluid p-5"
                      alt="icon2"
                    />
                  </picture>

                  <Card.Body>
                    <Card.Title>{this.state.text.repaire}</Card.Title>
                    <Card.Text style={{ marginBottom: "40px" }}>
                      {this.state.text.cardtxt2}
                    </Card.Text>
                    <Button className="my-button ">
                      <Link
                        to="/services"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        {" "}
                        Visit Services
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              <div className=" my-3 col-lg-4 col-md-7 col-sm-12 text-center mx-auto d-flex align-items-stretch">
                <Card>
                  <picture>
                    <source
                      srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Spare2.webp"
                      className="card-img-top img-fluid py-5"
                      alt="icon3"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Spare2.png"
                      className="card-img-top img-fluid py-5"
                      alt="icon3"
                      type="image/png"
                    />
                    <img
                      src="img/creakyOldJPEG.jpg"
                      className="card-img-top img-fluid p-5"
                      alt="icon3"
                    />
                  </picture>
                  <Card.Body>
                    <Card.Title>{this.state.text.spare}</Card.Title>
                    <Card.Text style={{ marginBottom: "65px" }}>
                      {this.state.text.cardtxt3}
                    </Card.Text>
                    <Button className="my-button ">
                      <Link
                        to="/services"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        {" "}
                        Visit Services
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
          <HomeVideos />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(Home));
