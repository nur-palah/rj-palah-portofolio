import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import PageCarousel from '../component/carousel-item-page';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

class PramukaCipanas extends Component {
    render() {
        const meta = {
            title: 'Gerakan Pramuka Cipanas',
            description: 'Organizational blog as a medium to convey news about organizational activities.',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'react,meta,document,html,tags'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <div className="container-fluid detail">
                    <div className="row">
                        <div className="col detail col-1">
                            <div className="back-togle-detail">
                                <Link to={'/'}><FontAwesomeIcon icon={faCircleLeft} /></Link>
                            </div>
                        </div>
                        <div className="col detail">
                            <Tabs className="detail-page card shadow">
                                <TabList>
                                    <Tab>User Page</Tab>
                                </TabList>

                                <TabPanel>
                                    <div id="carouselDetailPage1" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <PageCarousel style="carousel-item detail active" img="pramukacipanas/pramuka-cipanas-1" />
                                            <PageCarousel style="carousel-item detail" img="pramukacipanas/pramuka-cipanas-2" />
                                            <PageCarousel style="carousel-item detail" img="pramukacipanas/pramuka-cipanas-3" />
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselDetailPage1" data-bs-slide="prev">
                                            <span aria-hidden="true"><FontAwesomeIcon icon={faCircleArrowLeft} className="togle-carousel" /></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselDetailPage1" data-bs-slide="next">
                                            <span aria-hidden="true"><FontAwesomeIcon icon={faCircleArrowRight} className="togle-carousel" /></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </TabPanel>
                                <div className="detail-description">
                                    <h2>Gerakan Pramuka Cipanas</h2>
                                    <p>Url : <a href="https://www.pramukacipanas.or.id/">https://www.pramukacipanas.or.id/</a>
                                    </p>
                                    <p>Back End : <a href="https://www.blogger.com/">Blogger.com</a></p>
                                    <p>Front End : Html 5, CSS 3, <a
                                        href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap
                                        5</a></p>
                                    <p>Additional : <a href="">-</a></p>
                                    <p>Responsive Mobile : Yes</p>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div >
            </DocumentMeta>
        )
    }
}

export default PramukaCipanas;