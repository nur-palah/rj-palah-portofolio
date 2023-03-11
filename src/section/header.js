import React, { Component } from 'react';
import ItemSocialBox from '../component/social-box-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMapPin } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return (
            <div className="top-wrapper">
                <div class="modal fade" id="biodataModal" tabindex="-1" aria-labelledby="biodataModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <button type="button" class="btn-close m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-body p-4">
                                <h4>Nur Palah</h4>
                                <h6 class="text-success mb-4">Web Developer</h6>
                                <h5>Riwayat Pendidikan</h5>
                                <h6 class="mb-3">SLTA - Teknik Komputer dan Jaringan, SMK Negeri 1 Cipanas</h6>
                                <h5>Riwayat Pekerjaan</h5>
                                <h6 class="mb-2">Marketing PT Mitra Berry Mandiri, Sept 2018 - Nov 2021</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-img">
                    <img className="rounded-circle shadow" src="./img/profile-img.jpg" />
                </div>
                <div className="profile-box card">
                    <div className="profile-detail">
                        <div className="text-name">Nur Palah</div>
                        <div className="text-job">~ Web Developer ~</div>
                        <div className="text-country"><FontAwesomeIcon icon={faMapPin} /> Cianjur, Indonesia</div>
                        <div className="social-box">
                            <ItemSocialBox link="mailto:corporation.np@gmail.com" title="Send me email | corporation.np@gmail.com" icon={faAt} />
                            <ItemSocialBox link="https://linkedin.com/in/nurpalah" title="Follow me on LinkedIn | _osipalah" icon={faLinkedin} />
                            <ItemSocialBox link="https://instagram.com/_nurpalah" title="Follow me on Instagram | _osipalah" icon={faInstagram} />
                            <ItemSocialBox link="https://github.com/nur-palah" title="Find me on GitHub | nur-palah" icon={faGithub} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;