import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Rouen</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='0608010170'>
                                <span className='clickInput' onClick={() => alert('Téléphone copié !')}>06 08 01 01 70</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='fas fa-envelope'></i>
                            <CopyToClipboard text='erwan.sagnardon@campus-la-chataigneraie.org'>
                                <span className='clickInput' onClick={() => alert('E-Mail copié !')}>erwan.sagnardon@campus-la-chataigneraie.org</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.linkedin.com/in/erwan-sagnardon-5b1b1b1b3/' target='_blank' rel='noopener noreferrer'>
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https:/github.com/XloxTV' target='_blank' rel='noopener noreferrer'>
                            <h4>GitHub</h4>
                            <i className='fab fa-github'></i>
                        </a>
                        <a href='https://twitter.com/ESagnardon' target='_blank' rel='noopener noreferrer'>
                            <h4>Twitter</h4>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;