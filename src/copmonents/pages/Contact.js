import React, { Component } from 'react';
import '../../style sheets/contactCss.css';
import { Container, Form, Col, Row, Button, Modal } from 'react-bootstrap';
//images
//axios
import axios from 'axios';
import Header from '../layout/Header';

//language
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json');
class Contact extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      name: '',
      number: '',
      email: '',
      message: '',
      show2: false,
      text: text.en,
      errors: {
        name: '',
        email: '',
        number: '',
        message: ''
      }
    };
  }
  handleShow() {
    this.setState({ show: true });
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
  submit(e) {
    e.preventDefault();
    const request = {
      recieverMail: 'info@bobiantech.com',
      body: `A potential customer with the following email wishes to subscribe Bobian \n\t Name: ${this.state.name} \n\t Email: ${this.state.email}  \n\t Number: ${this.state.number}  \n\t Message: ${this.state.message} \n\t Sincerly, Bobian bot`,
      subject: 'New Newsletter Subscription'
    };
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.number === ''
    ) {
      this.setState({ show2: true });
    } else {
      axios
        // .post('https://cubexs.net/api/sendMail/send', request)
        .post('http://power-support.lirten.com/api/sendMail/send', request)
        .then(
          this.setState({
            show: true,
            name: '',
            number: '',
            email: '',
            message: '',
            show2: false
          })
        )
        .then(
          setTimeout(() => {
            this.setState({ show: false });
          }, 1300)
        )
        .catch(err => console.log(err));
    }
  }
  onChange = event => {
    event.preventDefault();
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name = value.length < 3 ? 'Enter a valid name!' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'number':
        errors.number = value.length < 5 ? 'Enter a valid Phone number' : '';

        break;
      default:
        break;
      case 'message':
        errors.message = value.length < 5 ? 'message is required' : '';
        break;
    }

    this.setState({ errors, [name]: value }, () => {});
  };
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      val => val.length > 0 && (valid = false)
    );
    return valid;
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info('Valid Form');
    } else {
      console.error('Invalid Form');
    }
  };
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
    const { errors } = this.state;

    return (
      <div>
        <div className="contactHeader">
          <Header />
          <Container className="contactcaption pt-5">
            <div className="line"></div>
            <h3 className="pt-2">
              {this.state.text.feeling1}
              <br />
              {this.state.text.feeling2}
            </h3>

            <p>
              {this.state.text.ourteam1}
              <br />
              {this.state.text.ourteam2}
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

        <Container fluid className="py-5" ref={this.content}>
          <Form onSubmit={this.handleSubmit} noValidate>
            <Container>
              <Row>
                <Col sm={12}>
                  <p
                    style={{
                      fontWeight: 'bolder',
                      fontSize: '17px',
                      color: 'black'
                    }}
                  >
                    {this.state.text.contactus1}
                  </p>{' '}
                </Col>
                <Col sm={12}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {' '}
                    {this.state.text.contactus2}
                    <br /> {this.state.text.contactus3}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Control
                      noValidate
                      required
                      type="text"
                      onChange={this.onChange}
                      value={this.state.name}
                      name="name"
                      placeholder={this.state.text.contactname}
                      className="contactForm my-4"
                    />
                  </Form.Group>
                  {errors.name.length > 0 && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.name}
                    </span>
                  )}{' '}
                  <Form.Group>
                    <Form.Control
                      type="text"
                      noValidate
                      required
                      onChange={this.onChange}
                      value={this.state.number}
                      name="number"
                      placeholder={this.state.text.contactphone}
                      className="contactForm my-4"
                    />
                  </Form.Group>
                  {errors.number.length > 0 && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.number}
                    </span>
                  )}{' '}
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control
                      noValidate
                      required
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      name="email"
                      placeholder={this.state.text.contactemail}
                      className="contactForm my-4"
                    />
                  </Form.Group>{' '}
                  {errors.email.length > 0 && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.email}
                    </span>
                  )}
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      noValidate
                      required
                      placeholder={this.state.text.contactmsg}
                      as="textarea"
                      rows="4"
                      onChange={this.onChange}
                      value={this.state.message}
                      name="message"
                      type="text"
                      className="contactForm my-4"
                    />
                  </Form.Group>{' '}
                  {errors.message.length > 0 && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.message}
                    </span>
                  )}
                  <Col sm={12}>
                    <div>
                      <Button
                        onClick={this.submit}
                        type="submit"
                        className="contactButton"
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Col>

                <Col sm={12} md={6}>
                  <Container>
                    <Col className="py-4 mb-5 pl-5 " sm={12} md={12}>
                      <Row>
                        <h6
                          style={{ fontWeight: 'bold' }}
                          className="pl-3 pb-3"
                        >
                          {this.state.text.support1}
                        </h6>{' '}
                      </Row>
                      <Row>
                        <Col sm={12} md={3}>
                          <picture>
                            <source
                              srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Repairs2.webp"
                              alt="icon1"
                              className="img-fluid"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Repairs2.png"
                              alt="icon1"
                              className="img-fluid"
                              type="image/png"
                            />{' '}
                            <img
                              src="img/creakyOldJPEG.jpg"
                              alt="icon1"
                              className="img-fluid"
                            />
                          </picture>
                        </Col>
                        <Col className="pt-4" sm={12} md={8}>
                          <Row>
                            <Col md={3} sm={12}>
                              <p style={{ fontWeight: 'bold' }}>
                                {this.state.text.supportphone}
                              </p>
                            </Col>
                            <Col md={9} sm={12}>
                              <p>+965 22258060</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={3} sm={12}>
                              <p style={{ fontWeight: 'bold' }}>
                                {' '}
                                {this.state.text.supportmail}
                              </p>
                            </Col>
                            <Col md={9} sm={12}>
                              <p>info@bobiantech.com</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col className="py-4 mb-5 pl-5" sm={12}>
                      <Row>
                        <h6
                          style={{ fontWeight: 'bold' }}
                          className="pl-3 pb-3"
                        >
                          {this.state.text.salescenter}
                        </h6>{' '}
                      </Row>

                      <Row>
                        <Col sm={12} md={3}>
                          <picture>
                            <source
                              srcSet="https://bobianwebsite.s3.me-south-1.amazonaws.com/Sales2.webp"
                              alt="icon2"
                              className="img-fluid"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Sales2.png"
                              alt="icon2"
                              className="img-fluid"
                              type="image/png"
                            />{' '}
                            <img
                              src="img/creakyOldJPEG.jpg"
                              alt="icon2"
                              className="img-fluid"
                            />
                          </picture>
                        </Col>
                        <Col className="pt-4" sm={12} md={8}>
                          <Row>
                            <Col md={3} sm={12}>
                              <p style={{ fontWeight: 'bold' }}>
                                {this.state.text.salesphone}
                              </p>
                            </Col>
                            <Col md={9} sm={12}>
                              <p>+965 22258060</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={3} sm={12}>
                              <p style={{ fontWeight: 'bold' }}>
                                {this.state.text.salesmail}
                              </p>
                            </Col>
                            <Col md={9} sm={12}>
                              <p>info@bobiantech.com</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Container>
                </Col>
              </Row>
            </Container>
            <div className={this.state.show2 ? 'show' : 'hidden'}>
              <p style={{ color: 'red' }}> Please fill all fields</p>
            </div>
          </Form>
          <Modal className="mt-2" show={this.state.show}>
            <div id="snackbar">Sent Successfully</div>
          </Modal>
          <Container className="pt-4 mt-5 text-center mymap">
            <iframe
              title="bobianmap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.76658866484706!2d47.96394599365402!3d29.361983119891985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84dedfb4c059%3A0x75f3e0d87a4c804b!2sAl-%20Nassar%20Tower%2C%2017%20Fahad%20Al-Salem%20Street%2C%20Al%20Kuwayt%2C%20Kuwait!5e0!3m2!1sen!2seg!4v1578909607515!5m2!1sen!2seg"
            ></iframe>
          </Container>
        </Container>
      </div>
    );
  }
}

Contact.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(Contact));
