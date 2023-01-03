import React, { Component } from 'react';
//bootstrap
import { Form, Button, Col, Alert, Modal } from 'react-bootstrap';
import axios from 'axios';
export default class RequestQuotations extends Component {
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
      body: `A potential customer with the following email wishes to communicate with Bobian \n\t Name: ${this.state.name} \n\t Email: ${this.state.email}  \n\t Number: ${this.state.number} \n\t Sincerly, Bobian bot`,
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
      <div className="prodInfo">
        <div>
          {<Alert variant="success">This is alert—check it out!</Alert> &&
            this.state.showAlert}
        </div>
        <div>
          <h4
            className="text-center"
            style={{ color: 'black', marginTop: '25px' }}
          >
            Request Quotation
          </h4>
          <hr className="productTitle2" />

          <div className="w-75 justify-content-center m-auto">
            <Form className=" productsignform">
              <Col sm="12">
                <input
                  noValidate
                  required
                  value={this.state.name}
                  onChange={this.onChange}
                  type="text"
                  name="name"
                  className="mt-5 w-100  "
                  id="name"
                  autocomplete="off"
                />
                <label for="name"> Name</label>
                {errors.name.length > 0 && (
                  <span className="error" style={{ color: 'red' }}>
                    {errors.name}
                  </span>
                )}{' '}
              </Col>

              <Col sm="12">
                <input
                  noValidate
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                  type="text"
                  name="email"
                  className="email2 mt-5 w-100 "
                  id="email"
                  autocomplete="off"
                />
                <label for="email"> Email</label>

                {errors.email.length > 0 && (
                  <span className="error" style={{ color: 'red' }}>
                    {errors.email}
                  </span>
                )}
              </Col>

              <Col sm="12">
                <input
                  noValidate
                  required
                  value={this.state.number}
                  onChange={this.onChange}
                  type="number"
                  name="number"
                  className="phone2 mt-5 w-100 "
                  id="number"
                  min="0"
                  autocomplete="off"
                />
                <label for="phone">Phone</label>
                {errors.number.length > 0 && (
                  <span className="error" style={{ color: 'red' }}>
                    {errors.number}
                  </span>
                )}{' '}
              </Col>

              <Col sm="12" className="mt-2">
                <Button
                  className="productsubmit-button "
                  variant="success"
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
          </div>
        </div>
        <Modal className="mt-2" show={this.state.show}>
          <div id="snackbar">Sent Successfully</div>
        </Modal>
      </div>
    );
  }
}
