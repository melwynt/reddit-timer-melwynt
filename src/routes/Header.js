import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = ({ handleScroll, aboutRef, howItWorksRef }) => (
  <header>
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>

    <input type="checkbox" id="menu-btn" className="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="nav-icon" />
    </label>

    <ul className="nav-list">
      <li className="nav-list__item">
        <Link to="/search/javascript">Search</Link>
      </li>
      <li className="nav-list__item">
        <Link
          to="/#how-it-works"
          onClick={() => {
            handleScroll(howItWorksRef.current);
          }}
        >
          How it works
        </Link>
      </li>
      <li className="nav-list__item">
        <Link
          to="/#about"
          onClick={() => {
            handleScroll(aboutRef.current);
          }}
        >
          About
        </Link>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  handleScroll: PropTypes.func,
  aboutRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  howItWorksRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Header.defaultProps = {
  handleScroll: null,
  aboutRef: null,
  howItWorksRef: null,
};

export default Header;
