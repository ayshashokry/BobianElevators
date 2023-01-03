import React, { Component } from 'react';
import { Row, Col, Form, Button, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.hide1 = this.hide1.bind(this);
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: '',
      number: '',
      email: '',
      show: false,
      show2: false,

      showAlert: true,
      errors: {
        name: '',
        email: '',
        number: ''
      }
    };
  }
  hide1 = e => {
    e.preventDefault();
    this.props.hideModal1();
  };

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
      // alert('da5al l hagat y hiwan');
      this.setState({ show2: true });
    } else {
      axios
        .post('http://power-support.lirten.com/api/sendMail/send', request)
        .then(
          // .post('https://cubexs.net/api/sendMail/send', request)
          this.setState({
            name: '',
            number: '',
            email: '',
            show2: false,
            show: true
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

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
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
    }

    this.setState({ errors, [name]: value }, () => {});
  };

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: '120px' }} className="homefooter">
        <Container fluid>
          <div className="pt-5">
            <Row>
              <Col sm={12} md={4}>
                <div className="footerlogo"></div>
              </Col>
              <Col md={4}></Col>
              <Col md={4}>
                {/* <Container className="links"> */}
                <div className="footerlinks">
                  <a
                    href="https://www.facebook.com/bobiantech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{
                        paddingLeft: '13px',
                        paddingRight: '13px',
                        fontSize: '15px'
                      }}
                      className="fab fa-facebook-f mx-3 "
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram mx-3"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in mx-3"></i>
                  </a>

                  <div className="copyright">
                    <p>Copyright© Bobian Elevators 2019</p>
                  </div>
                </div>

                {/* </Container> */}
              </Col>
            </Row>
            {/* <Row>
              <Col md={12} className="mt-5 footer1">
                <p className="box">
                  {' '}
                  <Link to="/">HOME</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/about">ABOUT US</Link>
                </p>
                <p className="box">
                  <Link to="/products">PRODUCTS</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/services">SERVICES</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/projects">PROJECTS</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/contact">CONTACT US</Link>{' '}
                </p>
              </Col>
            </Row> */}
            <Row>
              <Col md={12} lg={4} className="mt-5 footernav">
                <p className="box">
                  {' '}
                  <Link to="/">HOME</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/about">ABOUT US</Link>
                </p>
                <p className="box">
                  <Link to="/products">PRODUCTS</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/services">SERVICES</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/projects">PROJECTS</Link>
                </p>
                <p className="box">
                  {' '}
                  <Link to="/contact">CONTACT US</Link>{' '}
                </p>
              </Col>
              {/* <Col md={12} lg={4} className="mt-5 footer2">
                <h5
                  className="text-left  mb-3"
                  style={{ fontWeight: 'bold', marginLeft: '38px' }}
                >
                  Contact Information
                </h5>
                <ul className="pt-2">
                  <li>
                    <p className="text-left pt-3">
                      <span
                        style={{ fontSize: '15px', fontWeight: 'bold' }}
                        className="pr-4"
                      >
                        {' '}
                        Phone :
                      </span>
                      <span className="pr-2 text-left">+965</span>
                      <span className="text-left">22258060</span>
                    </p>
                  </li>

                  <li>
                    <p className="text-left">
                      <span
                        style={{ fontSize: '15px', fontWeight: 'bold' }}
                        className="pr-5 "
                      >
                        {' '}
                        Fax :
                      </span>
                      <span className="pr-2 text-left">+965</span>
                      <span className="text-left">22258059</span>
                    </p>
                  </li>

                  <li>
                    <p className="text-left">
                      <span
                        style={{ fontSize: '15px', fontWeight: 'bold' }}
                        className="pr-5"
                      >
                        Mail :
                      </span>{' '}
                      <span className="pr-2 text-left">
                        info@bobiantech.com
                      </span>
                    </p>
                  </li>

                  <li>
                    <p className="text-left pt-3">
                      <span
                        style={{ fontSize: '15px', fontWeight: 'bold' }}
                        className="pr-3 "
                      >
                        {' '}
                        Location :
                      </span>{' '}
                      <span className="pr-2 text-left">
                        Al Kuwit - Al Qubla - Fahd Al
                        <br /> Salem st - Block (14) - Building (2)-
                        <br /> Al Nasser Tower - 22 floor
                      </span>
                    </p>
                  </li>
                </ul>
                <Container className=" links">
                  <div className="footerlinks text-center">
                    <a
                      href="https://www.facebook.com/bobiantech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f mx-3 "></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram mx-3"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in mx-3"></i>
                    </a>
                  </div>
                  <div className="copyright text-center">
                    <p>Copyright© Bobian Elevators 2019</p>
                  </div>
                </Container>
              </Col> */}
              <Col md={12} lg={4} className="footer3 footer-form">
                <div className="title3" style={{ paddingLeft: '17px' }}>
                  <h5 style={{ fontWeight: 'bold' }}>Need a quote?</h5>
                  <p style={{ fontSize: '12px' }}>
                    Please leave your information and we <br /> will contact you
                    as soon as possible!{' '}
                  </p>
                </div>

                <Form className=" signform">
                  <Col sm="12">
                    <input
                      noValidate
                      required
                      value={this.state.name}
                      onChange={this.onChange}
                      type="text"
                      name="name"
                      className="name mt-1 w-75 "
                      id="name"
                    />
                    <label htmlFor="name"> Name</label>
                  </Col>
                  <Col sm="12">
                    {' '}
                    {errors.name.length > 0 && (
                      <span className="error" style={{ color: 'red' }}>
                        {errors.name}
                      </span>
                    )}{' '}
                  </Col>
                  <Col sm="12">
                    <input
                      noValidate
                      value={this.state.email}
                      onChange={this.onChange}
                      type="text"
                      name="email"
                      className="email mt-1 w-75 "
                      id="email"
                      required
                    />
                    <label htmlFor="email"> Email</label>
                  </Col>
                  <Col sm="12">
                    {' '}
                    {errors.email.length > 0 && (
                      <span className="error" style={{ color: 'red' }}>
                        {errors.email}
                      </span>
                    )}
                  </Col>
                  <Col sm="12">
                    <input
                      noValidate
                      value={this.state.number}
                      onChange={this.onChange}
                      type="number"
                      name="number"
                      className="phone mt-1 w-75 "
                      id="phone"
                      required
                    />
                    <label htmlFor="phone">Phone</label>
                  </Col>
                  <Col sm="12">
                    {' '}
                    {errors.number.length > 0 && (
                      <span className="error" style={{ color: 'red' }}>
                        {errors.number}
                      </span>
                    )}{' '}
                  </Col>
                  <Col sm="12" className="mt-2">
                    <Button
                      className="submit-button mt-3 mb-3"
                      type="submit"
                      onClick={this.submit}
                    >
                      Submit
                    </Button>
                  </Col>
                  <div className={this.state.show2 ? 'show' : 'hidden'}>
                    <p> Please fill all fields</p>
                  </div>
                </Form>
              </Col>

              <Col md={12} lg={4} className="mt-5 footer2">
                <h5
                  className="text-left  mb-3"
                  style={{ fontWeight: 'bold', marginLeft: '38px' }}
                >
                  Contact Information
                </h5>
                <div className="text-center">
                  <ul className="pt-2">
                    <li>
                      <p className="text-left pt-3">
                        <span
                          style={{ fontSize: '15px', fontWeight: 'bold' }}
                          className="phone"
                        >
                          {' '}
                          Phone :
                        </span>
                        <span className="pr-2 text-left">+965</span>
                        <span className="text-left">22258060</span>
                      </p>
                    </li>

                    <li>
                      <p className="text-left">
                        <span
                          style={{ fontSize: '15px', fontWeight: 'bold' }}
                          className="fax"
                        >
                          {' '}
                          Fax :
                        </span>
                        <span className="pr-2 text-left">+965</span>
                        <span className="text-left">22258059</span>
                      </p>
                    </li>

                    <li>
                      <p className="text-left">
                        <span
                          style={{ fontSize: '15px', fontWeight: 'bold' }}
                          className="email"
                        >
                          Mail :
                        </span>{' '}
                        <span className="pr-2 text-left">
                          info@bobiantech.com
                        </span>
                      </p>
                    </li>

                    <li>
                      <p className="text-left pt-3">
                        <span
                          style={{ fontSize: '15px', fontWeight: 'bold' }}
                          className="pr-3 "
                        >
                          {' '}
                          Location :
                        </span>{' '}
                        <span className="pr-2 text-left">
                          Al Kuwit - Al Qubla - Fahd Al
                          <br /> Salem st - Block (14) - Building (2)-
                          <br /> Al Nasser Tower - 22 floor
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <Container className=" links">
                  <div className="footerlinks text-center">
                    <a
                      href="https://www.facebook.com/bobiantech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f mx-3 "></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram mx-3"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in mx-3"></i>
                    </a>
                  </div>
                  <div className="copyright text-center">
                    <p>Copyright© Bobian Elevators 2019</p>
                  </div>
                </Container> */}
              </Col>

              {/* <Col sm={12} md={4}>
                <Container className="pt-5 links">
                  <div className="footerlinks text-center">
                    <a
                      href="https://www.facebook.com/bobiantech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f mx-3"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram mx-3"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in mx-3"></i>
                    </a>
                  </div>
                  <div className="copyright text-center pt-4">
                    <p>Copyright© Bobian Elevators 2019</p>
                  </div>
                </Container>
              </Col> */}
            </Row>
            <Modal className="mt-2" show={this.state.show}>
              <div id="snackbar">Sent Successfully</div>
            </Modal>
          </div>
        </Container>
      </div>
    );
  }
}
