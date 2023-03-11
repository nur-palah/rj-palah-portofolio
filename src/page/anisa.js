import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import PageCarousel from '../component/carousel-item-page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

class Anisa extends Component {
    render() {
        const meta = {
            title: 'Anisa | Aplikasi Informasi Stunting Balita',
            description: 'Data collection and information on stunting and child malnutrition cases.',
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
                                    <Tab>Admin Page</Tab>
                                </TabList>

                                <TabPanel>
                                    <div id="carouselDetailPage1" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <PageCarousel style="carousel-item detail active" img="anisa/anisa-1" />
                                            <PageCarousel style="carousel-item detail" img="anisa/anisa-2" />
                                            <PageCarousel style="carousel-item detail" img="anisa/anisa-3" />
                                            <PageCarousel style="carousel-item detail" img="anisa/anisa-4" />
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
                                <TabPanel>
                                    <div id="carouselDetailPage2" class="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <PageCarousel style="carousel-item detail active" img="anisa/anisa-5" />
                                            <PageCarousel style="carousel-item detail" img="anisa/anisa-6" />
                                            <PageCarousel style="carousel-item detail" img="anisa/anisa-7" />
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselDetailPage2" data-bs-slide="prev">
                                            <span aria-hidden="true"><FontAwesomeIcon icon={faCircleArrowLeft} className="togle-carousel" /></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselDetailPage2" data-bs-slide="next">
                                            <span aria-hidden="true"><FontAwesomeIcon icon={faCircleArrowRight} className="togle-carousel" /></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </TabPanel>
                                <div className="detail-description">
                                    <h2>Anisa | Aplikasi Informasi Stunting Balita</h2>
                                    <p>Url : <a href="">-</a></p>
                                    <p>Back End : Php 8, <a href="https://codeigniter.com/">CodeIgniter 4</a></p>
                                    <p>Front End : Html 5, CSS 3, <a
                                        href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap
                                        5</a></p>
                                    <p>Additional : Chart By <a href="https://www.chartjs.org/docs/latest/">Chart.js</a>, Auth Library By <a
                                        href="https://github.com/lonnieezell/myth-auth">Myth-Auth</a></p>
                                    <p>Responsive Mobile : Yes</p>
                                </div>
                            </Tabs>
                        </div>
                    </div >
                </div >
            </DocumentMeta >
        )
    }
}

export default Anisa;