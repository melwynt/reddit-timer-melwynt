import React, {
  useEffect, //
  useState,
  useReducer,
  useRef,
} from 'react';
import {
  useParams, //
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Calendar from './Calendar';
import Posts from './Posts';

import recursiveCommentFetch from '../helper/reddit';

const getData = async (word) => recursiveCommentFetch(word);

const reducer = (state, action) => {
  switch (action.type) {
    case 'getData':
      return {
        posts: action.data,
      };
    default:
      return state;
  }
};

const Search = () => {
  const [timezone, setTimezone] = useState('');

  const { subreddit } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState(subreddit);

  const fetchingRef = useRef(false);

  const [loading, setLoading] = useState(false);

  const initialState = {
    posts: {},
  };
  const [posts, dispatch] = useReducer(reducer, initialState);

  const [selectedPosts, setSelectedPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`, { state: { subreddit: search } });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelect = (selectedData) => {
    setSelectedPosts(selectedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getData(subreddit);
      setLoading(false);
      return data;
    };

    if (fetchingRef.current === false) {
      fetchingRef.current = true;
      fetchData().then((data) => {
        dispatch({
          type: 'getData',
          data,
        });
      });
    }

    if (location.state === null) {
      setSearch(subreddit);
    }

    return () => {
      fetchingRef.current = false;
    };
  }, [subreddit, location]);

  useEffect(
    () => setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone),
    [],
  );

  return (
    <main className="main-search">
      <h2 className="main-search__title">Find the best time for a subreddit</h2>
      <div className="main-search__search">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            <div className="main-search__search__label">r /</div>
            <input
              id="search"
              type="text"
              onChange={handleChange}
              value={search}
            />
          </label>
          <button type="submit" id="btn-search">
            Search
          </button>
        </form>
      </div>
      {loading ? (
        <div id="loading" />
      ) : (
        <Calendar posts={posts} handleSelect={handleSelect} />
      )}
      <div className="main-search__timezone">
        All times are shown in your timezone: <span>{timezone}</span>
      </div>
      {selectedPosts.length !== 0 && <Posts selectedPosts={selectedPosts} />}
    </main>
  );
};

export default Search;
