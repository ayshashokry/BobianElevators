import React, { Component } from 'react';

//react-bootstrap
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';

const text = require('../localization/lan.json');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text.en,
      position: 'absolute'
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

  onChange = e => {
    return this.changeLanguage(e);
  };
  changeLanguage = e => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
    // document.addEventListener('click', this.handleDocumentClick, true);
  }
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleDocumentClick, true);
  // }
  // handleDocumentClick = e => {
  //   var collapseelement = document.getElementById('responsive-navbar-nav');
  //   var toggler = document.getElementById('mytoggelerrr');
  //   const container = this._element;
  //   if (e.target.className !== 'mynavitem') {
  //     toggler.classList.add('collapsed');
  //     collapseelement.classList.remove('show');

  //     document.addEventListener('click', this.handleDocumentClick, false);
  //   } else {
  //     console.log('hey');
  //   }
  //   console.log(e.target.className);
  // };
  render() {
    return (
      <div>
        <Navbar
          className="navbar navbar-dark"
          expand="lg"
          // ref={c => (this._element = c)}
        >
          <Link to="/">
            {' '}
            <Navbar.Brand className="logo" href=""></Navbar.Brand>
          </Link>
          <Navbar.Toggle
            id="mytoggelerrr"
            aria-controls="responsive-navbar-nav"
            className="mynavitem"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div className="navo mylink1">
                <NavLink
                  to="/"
                  exact
                  className="navitem mynavitem"
                  activeClassName="navitem-active"
                >
                  {this.state.text.navbarhome}
                </NavLink>
              </div>
              <div className="navo">
                <NavLink
                  exact
                  to="/about"
                  className="navitem mynavitem"
                  activeClassName="navitem-active"
                >
                  {this.state.text.navbarabout}
                </NavLink>
              </div>
              <div className="navo">
                <NavLink
                  exact
                  to="/products"
                  className="navitem mynavitem"
                  activeClassName="navitem-active"
                >
                  {this.state.text.navbarproducts}
                </NavLink>
              </div>{' '}
              <div className="navo">
                <NavLink
                  exact
                  to="/services"
                  className="navitem mynavitem"
                  activeClassName="navitem-active"
                >
                  {this.state.text.navbarservice}
                </NavLink>
              </div>
              <div className="navo">
                <NavLink
                  exact
                  to="/projects"
                  className="navitem mynavitem"
                  activeClassName="navitem-active"
                >
                  {this.state.text.navbarprojects}
                </NavLink>
              </div>
              <div className="navo">
                <NavLink
                  exact
                  to="/contact"
                  className="navitem mynavitem"
                  activeClassName="navitem-active"
                >
                  {this.state.text.navbarcontact}
                </NavLink>
              </div>
              {/* <div className="navo">
                <Link
                  className={this.props.language === 'ar' ? 'lanStyle' : ''}
                  id="ar"
                  onClick={this.onChange}
                >
                  عربي
                </Link>

                <Link
                  className={this.props.language === 'en' ? 'lanStyle' : ''}
                  onClick={this.onChange}
                  id="en"
                >
                  ENG
                </Link>
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(Header));
