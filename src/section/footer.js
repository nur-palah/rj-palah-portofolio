import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';

var statusList = 'close';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
        if (statusList == 'close') {
            document.getElementById('link-list').classList.remove('link-list-active');
            statusList = 'open';
        } else {
            document.getElementById('link-list').classList.add('link-list-active')
            statusList = 'close';
        }
    }

    render() {
        return (
            <div>
                <div className="bottom-wrapper">
                    <svg className="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,32L720,160L1440,128L1440,0L720,0L0,0Z"></path>
                    </svg>

                    <div className="item-wrapper bottom">
                        Made With <span className="text-danger"><FontAwesomeIcon icon={faHeart} /></span> by <a
                            className="text-white text-decoration-none" href="https://instagram.com/_osipalah/">Palah.Co</a> © 2022
                    </div>

                    <div id="link-list" className="link-list link-list-active">
                        <h5 className="text-center">Link</h5>
                        <li id="biodata-modal" data-bs-toggle="modal" data-bs-target="#biodataModal"><a>Biodata Developer</a>
                        </li>
                        <li><a href="#">Cianjur Media Tech.</a></li>
                        <li><a href="https://fastwork.id/user/osipalah" target="_blank">Fastwork Gallery</a></li>
                        <li><a href="https://fiverr.com/osipalah" target="_blank">Fiverr Gallery</a></li>
                        <li><a href="https://play.google.com/store/apps/dev?id=8699766931808988499" target="_blank">Play Store Gallery</a>
                        </li>
                        <li onClick={this.showMenu} id="btn-link-list" className="btn-link-list"><FontAwesomeIcon icon={faEllipsis} /></li>
                    </div>
                </div>

                <div className="btn-whatsapp">
                    <a href="https://bit.ly/3XH2IvA" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div >
            </div >
        )
    }
}

export default Footer;