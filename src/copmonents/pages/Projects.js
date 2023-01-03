import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style sheets/portfolio.css';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Header from '../layout/Header';
//language
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json');
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text.en,
      local: [
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p30.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p30.JPG',
          name: 'Ministry Of Awqaf',
          alt: 'Ministry Of Awqaf',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Parliament%2BOf%2BKuwaot.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Parliament+Of+Kuwaot.jpg',

          name: 'Parliment Of Kuwait',
          alt: 'Parliment Of Kuwait',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSheikh%2BSaad%2BHalls.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Sheikh+Saad+Halls.jpg',

          name: 'Al Sheikh Saad Halls',
          alt: 'Al Sheikh Saad Halls',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p31.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p31.JPG',

          name: 'Al Hajri Tower',
          alt: 'Al Hajri Tower',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p32.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p32.JPG',

          name: 'Adnan Al-Ageil ',
          alt: 'Adnan Al-Ageil ',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p33.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p33.JPG',

          name: 'Marim Residence',
          alt: 'Marim Residence',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p34.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p34.JPG',

          name: 'Abdullatef Al Menis - Salmiya',
          alt: 'Abdullatef Al Menis - Salmiya',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p35.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p35.jpg',

          name: 'Waleed Al Banai',
          alt: 'Waleed Al Banai',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p36.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p36.JPG',

          name: 'Fraj Swilah Resturant',
          alt: 'Fraj Swilah Resturant',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BYosufen%2BMosque.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Yosufen+Mosque.JPG',
          name: 'Al Yosufen Mosque',
          alt: 'Al Yosufen Mosque',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Eurika%2BBuilding.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Eurika+Building.JPG',

          name: 'Eurika Building',
          alt: 'Eurika Building',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Car%2BParking-Ibn%2BSeina%2BHospital.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Car+Parking-Ibn+Seina+Hospital.JPG',

          name: 'Car Parking-Ibn Seina Hospital',
          alt: 'Car Parking-Ibn Seina Hospital',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Lavida%2BTower.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Lavida+Tower.JPG',

          name: 'Lavida Tower',
          alt: 'Lavida Tower',
        },
        // {
        //   srcwebp:
        //     'https://bobianwebsite.s3.me-south-1.amazonaws.com/Management%2Bof%2BHawali%2BMosques-2.webp',
        //   srcpng:
        //     'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Management+of+Hawali+Mosques-2.jpg',

        //   name: 'Diwan of General Health',
        //   alt: 'Diwan of General Health'
        // },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSafwa%2BComplex.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Safwa+Complex.JPG',

          name: 'Al Assemy Complex',
          alt: 'Al Assemy Complex',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSafwa%2BCo..webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Safwa+Co..JPG',

          name: 'Al Safwa Co.',
          alt: 'Al Safwa Co.',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Ali%2BAl%2BSebei%2B-%2BMahbula.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Ali+Al+Sebei+-+Mahbula.JPG',

          name: 'Ali AlSebei',
          alt: 'Ali AlSebei',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BOthman%2BKhitan.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Othman+Khitan.JPG',

          name: 'Al Othman Khitan',
          alt: 'Al Othman Khitan',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSalmiya%2BResturant.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Salmiya+Resturant.JPG',

          name: 'Al Salmiya Resturant',
          alt: 'Al Salmiya Resturant',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Suood%2BAl%2BBabteinn%2BCenter.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Suood+Al+Babteinn+Center.jpg',

          name: 'Suood Al Babteinn Center',
          alt: 'Suood Al Babteinn Center',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Shikha%2BBadeiya%2BAl%2BAhmed%2BAl%2BJaber%2BAl%2BSabah%2BCenter.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Shikha+Badeiya+Al+Ahmed+Al+Jaber+Al+Sabah+Center.jpg',
          name: 'Shikha Badeiya Center',
          alt: 'Shikha Badeiya Center',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Management%2Bof%2BHawali%2BMosques.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Management+of+Hawali+Mosques.jpg',
          name: 'Diwan of General Health',
          alt: 'Diwan of General Health',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Al%2BSheikh%2BSalem%2BAl%2BAli%2BAl%2BSobah%2B%2BCenter.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Al+Sheikh+Salem+Al+Ali+Al+Sobah++Center.JPG',
          name: 'Al Sheikh Salem Al Ali Center',
          alt: 'Al Sheikh Salem Al Ali Center',
        },
        {
          srcwebp:
            'https://bobianwebsite.s3.me-south-1.amazonaws.com/Ministry%2BOf%2BHealth%2B-%2BMain%2BBuilding.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/Ministry+Of+Health+-+Main+Building.jpg',

          name: 'Management of Al-Hawali mosques',
          alt: 'Management of Al-Hawali mosques',
        },
      ],
      international: [
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p1.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p1.jpg',

          name: 'Siena park residences building facade',
          alt: 'Siena park residences building facade',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p2.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p2.jpg',

          name: 'Primus Hotel Sydney, Australia',
          alt: 'Primus Hotel Sydney, Australia',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p3.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p3.jpg',

          name: ' Novo Kl Malaysia',
          alt: ' Novo Kl Malaysia',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p4.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p4.jpg',

          name: 'Triconic KK Malaysia',
          alt: 'Triconic KK Malaysia',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p5.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p5.jpg',

          name: 'Ostia Bangi Malaysia',
          alt: 'Ostia Bangi Malaysia',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p6.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p6.jpg',

          name: 'Switzerland Novartis Pharma, Austrilia',
          alt: 'Switzerland Novartis Pharma, Australia',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p7.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p7.jpg',

          name: 'Raya garden high rise',
          alt: 'Raya garden high rise',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p8.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p8.jpg',

          name: 'OASIS Damansara Malaysia',
          alt: 'OASIS Damansara Malaysia',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p9.webp',
          srcpng: 'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p9.jpg',

          name: 'Zara Flagship Store at Dubai Festival City',
          alt: 'Zara Flagship',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p10.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p10.JPG',

          name: 'UK heathrow airport',
          alt: 'UK heathrow airpor',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p11.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p11.JPG',

          name: 'Harbin Metro',
          alt: 'Harbin Metro',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p12.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p12.jpg',

          name: 'Brio Tower Dmci Makati',
          alt: 'Brio Tower Dmci Makati',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p13.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p13.jpg',

          name: ' Guangzhou metro',
          alt: ' Guangzhou metro',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p14.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p14.jpg',

          name: 'Bukit Merah Singapore',
          alt: 'Bukit Merah Singapore',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p15.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p15.jpg',

          name: 'Haishenwai',
          alt: 'Haishenwai',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p17.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p17.JPG',

          name: 'Green Towers, Egypt',
          alt: 'Green Towers',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p18.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p18.jpg',

          name: 'The Ministry of Fisheries Wealth, Oman ',
          alt: 'The Ministry of Fisheries',
        },

        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p20.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p20.jpg',

          name: 'Raya Garden',
          alt: 'Raya Garden',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p21.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p21.jpg',

          name: 'King Abdulaziz University, Saudi Arabia',
          alt: 'King Abdulaziz University',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p22.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p22.JPG',

          name: 'Dalian Metro- 1',
          alt: 'Dalian Metro- 1',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p23.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p23.JPG',

          name: 'Dalian Metro- 2',
          alt: 'Dalian Metro',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p24.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p24.JPG',

          name: 'Dalian Metro- 3',
          alt: 'Dalian Metro',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p25.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p25.jpg',

          name: 'Beijing airport',
          alt: 'Beijing airport',
        },
        {
          srcwebp: 'https://bobianwebsite.s3.me-south-1.amazonaws.com/p26.webp',
          srcpng:
            'https://bobianwebsitepng.s3.me-south-1.amazonaws.com/p26.jpg',
          name: 'Moscow',
          alt: 'Moscow',
        },
      ],
    };
    this.content = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.checklang();
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
      behavior: 'smooth',
    });
  };
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      autoplay: false,
      // autoplaySpeed: 2000,
      centerPadding: '260px',
      slidesToShow: 1,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 3,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 820,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 490,
          settings: {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '10px',
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
          },
        },
      ],
    };
    return (
      <div className="portfolioPage">
        <div className="portfolioHeader">
          {' '}
          <Header />
          <Container className="portcaption pt-5">
            <div className="line"></div>
            <h3 className="pt-2">
              {this.state.text.new1}
              <br />
              {this.state.text.new2}
            </h3>

            <p>
              {this.state.text.huge1} <br />
              {this.state.text.huge2}
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
          style={{ marginTop: '120px' }}
          className="localprojects"
          ref={this.content}
        >
          <Container className="mb-5">
            <div className="localHeader">
              <hr />
              <h2>{this.state.text.localhuge1}</h2>
              <p>
                {' '}
                {this.state.text.localhuge2}
                <br /> {this.state.text.localhuge3}
              </p>
            </div>
          </Container>

          <Slider {...settings} className="mb-5">
            {this.state.local.map(function (local) {
              return (
                <div className="px-3" key={local}>
                  <div className="kwuit-image">
                    <picture>
                      <source
                        srcSet={local.srcwebp}
                        className="img-fluid kuwitimg"
                        alt={local.alt}
                        type="image/webp"
                      />
                      <source
                        srcSet={local.srcpng}
                        className="img-fluid kuwitimg"
                        alt={local.alt}
                        type="image/png"
                      />{' '}
                      <img
                        src="img/creakyOldJPEG.jpg"
                        className="img-fluid kuwitimg"
                        alt={local.alt}
                      />
                    </picture>
                  </div>
                  <h5 className="imgcaption mt-4">{local.name}</h5>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="interprojects" style={{ marginTop: '160px' }}>
          <Container className="mb-5">
            <div className="interHeader">
              <hr />
              <h2>{this.state.text.international1}</h2>
              <p>
                {this.state.text.international2}
                <br /> {this.state.text.international3}
                <br /> {this.state.text.international4}
                <br />
                {this.state.text.international5}
              </p>
            </div>
          </Container>
          <Slider {...settings} className="mb-5">
            {this.state.international.map(function (inter) {
              return (
                <div className="px-3" key={inter}>
                  <div className="inter-image">
                    <picture>
                      <source
                        srcSet={inter.srcwebp}
                        className="img-fluid interimg"
                        alt={inter.alt}
                        type="image/webp"
                      />
                      <source
                        srcSet={inter.srcpng}
                        className="img-fluid interimg"
                        alt={inter.alt}
                        type="image/png"
                      />{' '}
                      <img
                        src="img/creakyOldJPEG.jpg"
                        className="img-fluid interimg"
                        alt={inter.alt}
                      />
                    </picture>
                  </div>
                  <h5 className="imgcaption mt-4">{inter.name}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
        <div style={{ marginTop: '100px' }} className="text-center letstalk">
          <h2>{this.state.text.inetersted1}</h2>
          <button className="servbtn btn mb-5">
            <Link
              to="/contact"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              {' '}
              {this.state.text.inetersted2}
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(Projects));
