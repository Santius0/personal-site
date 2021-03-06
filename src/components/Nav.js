import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from "../data/contact";

import me_icon from "../static/images/me_icon.jpg";

const BASE_PATH = '/'

const Nav = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={me_icon} alt="me_icon" />
            </Link>
            <header>
                <h2>Sergio Mathurin</h2>
                <p><a href="mailto:santius1995@gmail.com">santius1995@gmail.com</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>Hi, I&apos;m Sergio. I like to build cool stuff.</p>
            <ul className="actions">
                <li>
                    {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
                </li>
            </ul>
        </section>

        <section id="footer">
            <ul className="icons">
                {contact.map((s) => (
                    <li key={s.label}>
                        <a href={s.link}>
                            <FontAwesomeIcon icon={s.icon} />
                        </a>
                    </li>
                ))}
            </ul>
            <p className="copyright">&copy; Sergio Mathurn <Link to="/">sergiomathurin.com</Link>.</p>
        </section>
    </section>
);

export default Nav;
