import React from 'react';
import './style.css';
import logonegativo from '../../assets/img/logonegativo.png';

function Footer() {
    return (
        <div className="main">
            <div className="footer">
                <div className="inner-footer">
                    <div className="logo-container">
                        <img className="logonegativo" src={logonegativo} alt="logo negativo"></img>
                    </div>
                </div>

                <div className="verticalLine"></div>

                <div className="footer-third">
                    <p>Company Inc., 8901 Marmora Road,Glasgow, D04 89GR</p>
                    <p>Call us now toll free:(800)2345-6789</p>
                    <p>Customer support:support@demolink.org</p>
                    <p>Skype: sample-username</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;