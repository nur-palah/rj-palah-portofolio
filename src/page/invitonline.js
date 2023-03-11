import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import PageCarousel from '../component/carousel-item-page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

class InvitOnline extends Component {
    render() {
        const meta = {
            title: 'Invit Online',
            description: 'Provider of online wedding invitation making services packaged in the form of a website.',
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
                                            <PageCarousel style="carousel-item detail active" img="invitonline/invit-1" />
                                            <PageCarousel style="carousel-item detail" img="invitonline/invit-2" />
                                            <PageCarousel style="carousel-item detail" img="invitonline/invit-3" />
                                            <PageCarousel style="carousel-item detail" img="invitonline/invit-4" />
                                            <PageCarousel style="carousel-item detail" img="invitonline/invit-5" />
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
                                    <h2>Not Allowed</h2>
                                </TabPanel>
                                <div className="detail-description">
                                    <h2>Invit Online</h2>
                                    <p>Url : <a href="https://invit.online/">https://invit.online/</a> <span
                                        class="text-danger">(expired)</span></p>
                                    <p>Back End : Php 8, <a href="https://codeigniter.com/">CodeIgniter 4</a></p>
                                    <p>Front End : Html 5, CSS 3, <a
                                        href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap
                                        5</a></p>
                                    <p>Additional : Icon By <a href="https://fontawesome.com/">FontAwesome 6 Free</a>, Animation
                                        Scroll Library By <a href="https://michalsnik.github.io/aos/">AOS</a>, Auth Library By <a
                                            href="https://github.com/lonnieezell/myth-auth">Myth-Auth</a></p>
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

export default InvitOnline;