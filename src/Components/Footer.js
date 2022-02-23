import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">IIT Jammu Forum</h1>

                    <h2>Contact</h2>

                    <address>
                        Indian Institute of Technology Jammu, Jagti , Jammu<br/>

                            <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>

                <ul className="footer__nav">


                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title" id='nav_title_1'>Follow Us</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="#">Linkedin</a>
                            </li>

                            <li>
                                <a href="#">Twitter</a>
                            </li>

                            <li>
                                <a href="#">Facebook</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Use</a>
                            </li>

                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy;All rights reserved.</p>

                    <div className="legal__links">
                        <span>Training and Placement Cell, IIT Jammu</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
