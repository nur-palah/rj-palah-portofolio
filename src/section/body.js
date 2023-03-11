import React, { Component } from 'react';
import HomeCarousel from '../component/carousel-item-home';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPhp, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MiddleWrapper = styled.section`
  background: ${props => props.n1 ? "#405d2c" : "#ffffff"};
  color: ${props => props.n1 ? "#ffffff" : "#405d2c"};
  min-height: 100vh;
  max-height: 100%;
  padding: 0px 0px 20px 0px;
`;

class Body extends Component {

    render() {
        return (
            <div>
                <MiddleWrapper n1>
                    <svg className="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,32L720,160L1440,128L1440,0L720,0L0,0Z"></path>
                    </svg>

                    <div className="item-wrapper">

                        <h2 className="item-wrapper-title">My Favorite</h2>

                        <div className="favorite card shadow" data-aos="fade-up">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="favorite card shadow" data-aos="fade-up">
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className="favorite card shadow" data-aos="fade-up">
                            <FontAwesomeIcon icon={faPhp} />
                        </div>
                        <div className="favorite card shadow" data-aos="fade-up">
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                        <div className="favorite card shadow" data-aos="fade-up">
                            <img src="./img/codeigniter-logo.png" />
                        </div>

                    </div>
                </MiddleWrapper>

                <MiddleWrapper>
                    <svg className="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#405d2c" fillOpacity="1" d="M0,32L720,160L1440,128L1440,0L720,0L0,0Z"></path>
                    </svg>

                    <div className="item-wrapper">

                        <h2 className="item-wrapper-title">My Project</h2>

                        <div id="carouselHomeProject" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
                            <div className="carousel-inner">
                                <HomeCarousel style="carousel-item active" img="jubescoot/jubescoot-1.png" title="JubeScoot" desc="Simple application for small-scale transactions." link="jubescoot" />
                                <HomeCarousel style="carousel-item" img="pramukacipanas/pramuka-cipanas-1.png" title="Gerakan Pramuka Cipanas" desc="Organizational blog as a medium to convey news about organizational activities." link="pramuka-cipanas" />
                                <HomeCarousel style="carousel-item" img="invitonline/invit-1.png" title="Invit Online" desc="Provider of online wedding invitation making services packaged in the form of a website." link="invit-online" />
                                <HomeCarousel style="carousel-item" img="palahco/palahco-1.png" title="Palah.Co" desc="Media providing information needed about the company." link="palah-co" />
                                <HomeCarousel style="carousel-item" img="anisa/anisa-1.png" title="Anisa | Aplikasi Informasi Stunting Balita" desc="Data collection and information on stunting and child malnutrition cases." link="anisa" />
                                <HomeCarousel style="carousel-item" img="koica-peranketangguhankeluarga/pkk-1.png" title="Koica Web Game | Berbagi Peran Ketangguhan" desc="Web based game for fun learning." link="koica-berbagi-peran-ketangguhan" />
                                <HomeCarousel style="carousel-item" img="koica-prosedurevakuasi/prosedur-1.png" title="Koica Web Game | Prosedur Evakuasi" desc="Web based game for fun learning." link="koica-prosedur-evakuasi" />
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeProject" data-bs-slide="prev">
                                <span aria-hidden="true"><FontAwesomeIcon icon={faCircleArrowLeft} className="togle-carousel" /></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeProject" data-bs-slide="next">
                                <span aria-hidden="true"><FontAwesomeIcon icon={faCircleArrowRight} className="togle-carousel" /></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="text-quote box" data-aos="fade-up">
                            <hr />
                            <div className="text-quote text-start">"</div>
                            <span className="text-quote focus">Responsibility</span> as a form of professionalism
                            <div className="text-quote text-end">"</div>
                            <hr />
                        </div>

                    </div>
                </MiddleWrapper>
            </div >
        )
    }
}

export default Body;