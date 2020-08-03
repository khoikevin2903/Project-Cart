import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer center-on-small-only">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 ml-auto flex-col justify-center">
                                <h5 className="title social-section-title pl-4">Social Media</h5>
                                <div className="social-section text-md">
                                    <ul className="m-0 mt-2">
                                        <li>
                                            <div className="btn-floating  btn-fb waves-effect waves-light">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-floating  btn-ins waves-effect waves-light">
                                                <i className="fa fa-instagram"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-floating  btn-tw waves-effect waves-light">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-floating  btn-yt waves-effect waves-light">
                                                <i className="fa fa-youtube"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-floating  btn-li waves-effect waves-light">
                                                <i className="fa fa-linkedin"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-floating  btn-dribbble waves-effect waves-light">
                                                <i className="fa fa-dribbble left"></i>
                                            </div>
                                        </li>
                                        <li className="pl-4">
                                            <div className="btn-floating  btn-pin waves-effect waves-light">
                                                <i className="fa fa-pinterest"></i>
                                            </div>
                                        </li>
                                        <li className="">
                                            <div className="btn-floating  btn-gplus waves-effect waves-light">
                                                <i className="fa fa-google-plus"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="title">Delivery</h5>
                                <ul>
                                    <li>
                                        Store Delivery
                                    </li>
                                    <li>
                                        Online Delivery
                                    </li>
                                    <li>
                                        Delivery Terms &amp; Conditions
                                    </li>
                                    <li>
                                        Tracking
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="title">Need help?</h5>
                                <ul>
                                    <li>
                                        FAQ
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>
                                    <li>
                                        Return Policy
                                    </li>
                                    <li>
                                        Product Registration
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-4">
                                <h5 className="title">Instagram Photos</h5>
                                <ul className="instagram-photos">
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view overlay hm-white-slight z-depth-1">
                                            <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" alt="" />
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container-fluid">
                            © 2016 Copyright:
                    <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;