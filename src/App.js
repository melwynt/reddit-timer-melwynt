import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './routes/Header';
import Home from './routes/Home';
import Search from './routes/Search';
import Terms from './routes/Terms';
import Footer from './routes/Footer';

const App = () => {
  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <Header
        handleScroll={handleScroll}
        aboutRef={aboutRef}
        howItWorksRef={howItWorksRef}
      />
      <Routes>
        <Route
          path="/"
          element={<Home aboutRef={aboutRef} howItWorksRef={howItWorksRef} />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:subreddit" element={<Search />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
