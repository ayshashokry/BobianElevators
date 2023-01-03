// Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Styling
import './App.css';

// Components
import Home from './copmonents/pages/Home';
import About from './copmonents/pages/About';
import Footer from './copmonents/layout/Footer';
import Projects from './copmonents/pages/Projects';
import Contact from './copmonents/pages/Contact';
import Services from './copmonents/pages/Services';
import Products from './copmonents/pages/Products';
//language
import { changeLang } from './globalState/actions/langActions';
import { connect } from 'react-redux';
import store from './globalState/store';
import PropTypes from 'prop-types';

if (localStorage.chosenLanguage) {
  store.dispatch(changeLang(localStorage.chosenLanguage));
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dir: 'ltr' };
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === 'ar') {
        this.setState({ dir: 'rtl' });
      } else {
        this.setState({ dir: 'ltr' });
      }
    }
  }
  render() {
    return (
      <Router>
        <div
          className={
            ' App ' + (this.props.language === 'en' ? '' : 'arabicFont')
          }
        >
          {/* <Helmet>
            <html
              // dir={this.state.dir}
              lang={this.props.Language}
            />
          </Helmet> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/Services" component={Services} />
          <Route exact path="/Products" component={Products} />

          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  changeLang: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  language: state.lang.language
});
export default connect(mapStateToProps, { changeLang })(App);
