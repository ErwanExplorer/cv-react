import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/billGates.jpg" alt="profil" />
                    <h3>Erwan</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/PortFolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>PortFolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Contact" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/erwan-sagnardon" target="blanc" rel='noopener noreferrer'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/XloxTV" target="blanc" rel='noopener noreferrer'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ESagnardon" target="blanc" rel='noopener noreferrer'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Erwan Sagnardon - 2023</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;