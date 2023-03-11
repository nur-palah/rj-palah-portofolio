import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import PageCarousel from '../component/carousel-item-page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

class KoicaBPK extends Component {
    render() {
        const meta = {
            title: 'Koica Web Game | Berbagi Peran Ketangguhan',
            description: 'Web based game for fun learning.',
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
                                            <PageCarousel style="carousel-item detail active" img="koica-peranketangguhankeluarga/pkk-1" />
                                            <PageCarousel style="carousel-item detail" img="koica-peranketangguhankeluarga/pkk-2" />
                                            <PageCarousel style="carousel-item detail" img="koica-peranketangguhankeluarga/pkk-3" />
                                            <PageCarousel style="carousel-item detail" img="koica-peranketangguhankeluarga/pkk-4" />
                                            <PageCarousel style="carousel-item detail" img="koica-peranketangguhankeluarga/pkk-5" />
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
                                    <h2>Koica Web Game | Berbagi Peran Ketangguhan</h2>
                                    <p>Url : <a href="">-</a></p>
                                    <p>Back End : Php 8</p>
                                    <p>Front End : Html 5, CSS 3, Javascript <a
                                        href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap
                                        5</a></p>
                                    <p>Additional : Library Jquery</p>
                                    <p>Responsive Mobile : Yes</p>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div >
            </DocumentMeta >
        )
    }
}

export default KoicaBPK;