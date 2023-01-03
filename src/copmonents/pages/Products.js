import React, { Component } from 'react';
import '../../style sheets/Product.css';
import RequestQuotation from '../sections/RequestQuotations';
//DB
import db from '../../database/db';

//react-bootstrap
import { Container, Row, Col, Card } from 'react-bootstrap';

import { Collapse, Button } from 'reactstrap';
import Header from '../layout/Header';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse1: true,
      collapse2: true,
      collapse3: true,
      collapse4: true,
      collapse5: true,
      collapse6: true,
      collapse7: true,
      Vacuum: [],
      Panoramic: [],
      Homelift: [],
      Escalator: [],
      Travelators: [],
      Passenger: [],
      Bed: [],
      show: false,
      hideBtn1: false,
      data: []
    };
    this.content = React.createRef();
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  hideModal1 = e => {
    this.setState({ [e.target.id]: true });
  };

  mytoggleform = e => {
    this.setState({ [e.target.id]: false });
  };
  componentWillMount() {
    db.findAll().map(obj => this.setState({ [obj.id]: 'false' }));

    this.setState(prevState => ({
      product: db.findAll().map(obj => Object.assign({ [obj.id]: 'false' }))
    }));

    this.setState({
      Vacuum: db.findByType('Vacuum'),
      Panoramic: db.findByType('Panoramic'),
      Homelift: db.findByType('HomeLift'),
      Escalator: db.findByType('Escalator'),
      Travelators: db.findByType('Travelators'),
      Passenger: db.findByType('Passenger'),
      Bed: db.findByType('Bed')
    });
  }

  toggle1 = () => {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  };

  toggle2 = () => {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  };

  toggle3 = () => {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  };

  toggle4 = () => {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  };
  toggle5 = () => {
    this.setState(state => ({ collapse5: !state.collapse5 }));
  };

  toggle6 = () => {
    this.setState(state => ({ collapse6: !state.collapse6 }));
  };

  toggle7 = () => {
    this.setState(state => ({ collapse7: !state.collapse7 }));
  };

  render() {
    return (
      <div className="product-section">
        <div className="ProductHeader">
          <Header />
          <Container className="Productcaption pt-5">
            <div className="line"></div>
            <h3 className="pt-2">
              OUR PRODUCTS ARE A<br /> WORLDWIDE PHENOMENON!
            </h3>

            <p>
              Our wide range of products are installed in huge,
              <br /> worldwide projects. Those products have proven that our
              <br /> choice of suppliers is the best!{' '}
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

        <Container
          style={{ marginTop: '130px' }}
          className="blt-section-white"
          ref={this.content}
        >
          <Row className="blt-img my-5">
            <Col sm={12}>
              <picture>
                <source
                  srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/blt-black.webp"
                  alt="blt logo"
                  className="img-fluid"
                  type="image/webp"
                />
                <source
                  srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/blt-black.png"
                  alt="blt logo"
                  className="img-fluid"
                  type="image/png"
                />{' '}
                <img
                  src="img/creakyOldJPEG.jpg"
                  alt="blt logo"
                  className="img-fluid"
                />
              </picture>
            </Col>
          </Row>

          <h4 className=" my-5">
            {' '}
            BLT has spread to every corner both at home and abroad with its
            superior quality and extraordinary creativity, building the vigorous
            brand of elevator industry in the age of technology. Being insisting
            on quality BLT has earned wide acclaim with the outstanding
            performance.
          </h4>
        </Container>

        <h2 className="my-5 elevators pro-title1">Elevators</h2>
        <div className="cont my-5">
          <div>
            <Button onClick={this.toggle1} className="toggle-title">
              Vacuums{' '}
              {this.state.collapse1 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse1}>
              {/* <Container>
                <Row>
                  <Col className="d-flex"></Col>
                </Row>
              </Container> */}
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Vacuum.map(products => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {products.title}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={products.srcwebp}
                                  alt="Vacuums"
                                  className=" card-img-top vacum img-fluid"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={products.srcpng}
                                  alt="Vacuums"
                                  className=" card-img-top vacum img-fluid"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="Vacuums"
                                  className="card-img-top vacum img-fluid"
                                />
                              </picture>

                              <Card.Body>
                                <Row>
                                  <Col className="d-flex pb-3 elevatorCard">
                                    <Card.Text>{products.content}</Card.Text>
                                  </Col>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={products.id}
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[products.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={products.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>

          <div>
            <Button onClick={this.toggle2} className="toggle-title">
              Panoramic{' '}
              {this.state.collapse2 ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse2}>
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Panoramic.map(product => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {product.title}{' '}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={product.srcwebp}
                                  alt="paronamic"
                                  className="card-img-top img-fluid py-5 productImg"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={product.srcpng}
                                  alt="paronamic"
                                  className=" card-img-top img-fluid py-5 productImg"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="paronamic"
                                  className=" card-img-top img-fluid p-5  productImg"
                                />
                              </picture>

                              <Card.Body>
                                <Card.Text className="elevatorCard2">
                                  <Row>
                                    <div className="col-lg-4  bold">
                                      <p>Name :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.title}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Car Ceiling : </p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.ceiling}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Front Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.front}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Side Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p> {product.side}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Door :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.door}</p>
                                    </div>
                                  </Row>
                                </Card.Text>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={product.id}
                                    variant="primary"
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request Quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[product.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={product.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>

          <div>
            <Button onClick={this.toggle3} className="toggle-title">
              Passenger{' '}
              {this.state.collapse3 ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse3}>
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Passenger.map(product => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {product.title}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={product.srcwebp}
                                  alt="Passenger"
                                  className="card-img-top img-fluid py-2 productImg"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={product.srcpng}
                                  alt="Passenger"
                                  className=" card-img-top img-fluid py-2 productImg"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="Passenger"
                                  className=" card-img-top img-fluid p-5  productImg"
                                />
                              </picture>

                              <Card.Body>
                                <Card.Text className="elevatorCard2">
                                  <Row>
                                    <div className="col-lg-4  bold">
                                      <p>Name :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.title}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Car Ceiling : </p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.ceiling}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Front Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.front}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Side Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p> {product.side}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Door :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.door}</p>
                                    </div>
                                  </Row>
                                </Card.Text>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={product.id}
                                    variant="primary"
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request Quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[product.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={product.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>

          <div>
            <Button onClick={this.toggle4} className="toggle-title">
              Home Lift{' '}
              {this.state.collapse4 ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse4}>
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Homelift.map(product => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {product.title}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={product.srcwebp}
                                  alt="home lift"
                                  className="card-img-top img-fluid py-2 productImg"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={product.srcpng}
                                  alt="home lift"
                                  className=" card-img-top img-fluid py-2 productImg"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="home lift"
                                  className=" card-img-top img-fluid p-5  productImg"
                                />
                              </picture>

                              <Card.Body>
                                <Card.Text className="elevatorCard2">
                                  <Row>
                                    <div className="col-lg-4  bold">
                                      <p>Name :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.title}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Car Ceiling : </p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.ceiling}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Front Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.front}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Side Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p> {product.side}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Door :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.door}</p>
                                    </div>
                                  </Row>
                                </Card.Text>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={product.id}
                                    variant="primary"
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request Quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[product.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={product.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>

          <div>
            <Button onClick={this.toggle5} className="toggle-title">
              Bed{' '}
              {this.state.collapse5 ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse5}>
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Bed.map(product => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {product.title}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={product.srcwebp}
                                  alt="bed"
                                  className="card-img-top img-fluid py-2 productImg"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={product.srcpng}
                                  alt="bed"
                                  className=" card-img-top img-fluid py-2 productImg"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="bed"
                                  className=" card-img-top img-fluid p-5  productImg"
                                />
                              </picture>

                              <Card.Body>
                                <Card.Text className="elevatorCard2">
                                  <Row>
                                    <div className="col-lg-4  bold">
                                      <p>Name :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.title}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Car Ceiling : </p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.ceiling}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Front Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.front}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Side Wall :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p> {product.side}</p>
                                    </div>
                                    <div className="col-lg-4  bold">
                                      <p>Door :</p>
                                    </div>
                                    <div className="col-lg-8 ">
                                      <p>{product.door}</p>
                                    </div>
                                  </Row>
                                </Card.Text>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={product.id}
                                    variant="primary"
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request Quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[product.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={product.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        </div>

        <h2 className="my-5 elevators pro-title2">Escalators</h2>
        <div className="cont my-5">
          <div>
            <Button onClick={this.toggle6} className="toggle-title">
              ES Series of Escalator{' '}
              {this.state.collapse6 ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse6}>
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Escalator.map(product => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {product.title}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={product.srcwebp}
                                  alt="Escalator"
                                  className="card-img-top img-fluid py-4 productImg"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={product.srcpng}
                                  alt="Escalator"
                                  className=" card-img-top img-fluid py-4 productImg"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="Escalator"
                                  className=" card-img-top img-fluid p-4  productImg"
                                />
                              </picture>

                              <Card.Body>
                                <Card.Text className="elevatorCard">
                                  <Card.Text>{product.content}</Card.Text>
                                </Card.Text>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={product.id}
                                    variant="primary"
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request Quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[product.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={product.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        </div>
        <h2 className="my-5 pro-title3 elevators">Travelators</h2>
        <div className="cont my-5">
          <div>
            <Button onClick={this.toggle7} className="toggle-title">
              CS Series of Passenger Conveyor{' '}
              {this.state.collapse7 ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </Button>
            <Collapse isOpen={this.state.collapse7}>
              <Card className="fram">
                <Card.Body className="productCard">
                  <Row>
                    {' '}
                    <div className="col-lg-12 mx-auto">
                      {' '}
                      <Row>
                        {this.state.Travelators.map(product => (
                          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Card className="my-3">
                              <Card.Title className="pt-3 pl-3">
                                {product.title}
                              </Card.Title>

                              <picture>
                                <source
                                  srcSet={product.srcwebp}
                                  alt="Passenger"
                                  className="card-img-top img-fluid py-4 productImg"
                                  type="image/webp"
                                />
                                <source
                                  srcSet={product.srcpng}
                                  alt="Passenger"
                                  className=" card-img-top img-fluid py-4 productImg"
                                  type="image/png"
                                />{' '}
                                <img
                                  src="img/creakyOldJPEG.jpg"
                                  alt="Passenger"
                                  className=" card-img-top img-fluid p-4  productImg"
                                />
                              </picture>

                              <Card.Body>
                                <Card.Text className="elevatorCard">
                                  <Card.Text>{product.content}</Card.Text>
                                </Card.Text>
                                <Row className="d-flex justify-content-center">
                                  <Button
                                    id={product.id}
                                    variant="primary"
                                    onClick={this.mytoggleform}
                                    className="my-button cardBtn"
                                  >
                                    Request Quotation
                                  </Button>
                                </Row>
                                <div
                                  className={
                                    this.state[product.id] ? 'hidden' : 'show'
                                  }
                                >
                                  <RequestQuotation
                                    hideModal1={this.hideModal1}
                                  />
                                  <i
                                    id={product.id}
                                    onClick={this.hideModal1}
                                    className="he fas fa-times d-flex justify-content-end p-3"
                                  />{' '}
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
