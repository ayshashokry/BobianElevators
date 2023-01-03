import React, { Component } from 'react';
//bootstrap
import { Container, Row, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json');
class HomeVideos extends Component {
  constructor(props) {
    super(props);
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
      <Container>
        <Row className="homevideos">
          <Col sm={12}>
            <h3>{this.state.text.videotitle}</h3>
          </Col>
          <Col className="py-4" md={12}>
            <iframe
              src="https://www.youtube.com/embed/sqyPKsOc3Kg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video 1"
              className="homevideo"
            />
          </Col>

          <Col sm={12}>
            {' '}
            <iframe
              src="https://www.youtube.com/embed/jAxtaXwsx8c"
              frameBorder="0"
              allow="accelerometer autoplay encrypted-media gyroscope; picture-in-picture"
              title="video 2"
              allowFullScreen
              className="homevideo"
            />{' '}
          </Col>
        </Row>
      </Container>
    );
  }
}

HomeVideos.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(HomeVideos));
