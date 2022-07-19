import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import preview from '../images/preview.png';

const Home = ({ aboutRef, howItWorksRef }) => (
  <main className="main-home">
    <h1 className="main-home__title">No reactions to your reddit posts?</h1>
    <p className="main-home__description">
      Great timing, great results! Find the best time to post on your subreddit.
    </p>
    <div className="main-home__button">
      <Link to="/search/javascript">Show me the best time</Link>
    </div>
    <div className="main-home__search">
      <Link to="/search/javascript">r/javascript</Link>
    </div>
    <div className="main-home__screenshot">
      <div className="main-home__screenshot__inner">
        <Link to="/search/javascript">
          <img src={preview} alt="" />
        </Link>
      </div>
    </div>

    <div className="main-home__section">
      <h2 className="main-home__section__title" ref={howItWorksRef}>
        How it works
      </h2>
      <ul className="main-home__section__list">
        <li className="main-home__section__list__item">
          We find the 500 top posts from the past year for a subreddit.
        </li>
        <li className="main-home__section__list__item">
          The data is visualized in a heatmap grouped by weekday and hour of the
          day.
        </li>
        <li className="main-home__section__list__item">
          See immediately when to submit your reddit post.
        </li>
      </ul>
    </div>

    <div className="main-home__section about">
      <h2 className="main-home__section__title" ref={aboutRef}>
        About
      </h2>
      <p className="main-home__section__about-description">
        This app was created during a course on
        <a href="https://profy.dev"> profy.dev </a>
        with the goal to implement a
        <br />
        pixel-perfect real-world application with professional workflows and
        tools like Kanban,
        <br />
        ClickUp, Figma, GitHub, pull requests and code reviews.
        <a href="https://profy.dev/employers">
          {' '}
          Click here for more information.
        </a>
      </p>
    </div>
  </main>
);

Home.propTypes = {
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

Home.defaultProps = {
  aboutRef: null,
  howItWorksRef: null,
};

export default Home;
