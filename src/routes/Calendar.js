/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

const Calendar = ({ posts, handleSelect }) => {
  const data = posts.posts;

  const initCalendar = {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
  };

  const [selected, setSelected] = useState({});
  const [focused, setFocused] = useState({});

  const [calendar, setCalendar] = useState(initCalendar);

  const updateCalendar = (dataPosts) => {
    // loop through all the posts
    for (let i = 0; i < dataPosts.length; i += 1) {
      const {
        created, //
        title,
        permalink,
        score,
        author,
        num_comments,
        id,
      } = dataPosts[i].data;

      const url = `https://www.reddit.com${permalink}`;

      const currentTime = dayjs.unix(created);

      const hour = Number(currentTime.utc().local().format('H'));
      const dayOfWeek = currentTime.utc().local().format('dddd');
      const timePosted = currentTime.utc().local().format('h:mm a');

      // push the hour in the correct day of the week
      switch (dayOfWeek) {
        case 'Monday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Monday: {
              ...prevCalendar.Monday,
              [hour]: {
                count: prevCalendar.Monday[hour]?.count + 1 || 1,
                posts: prevCalendar.Monday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        case 'Tuesday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Tuesday: {
              ...prevCalendar.Tuesday,
              [hour]: {
                count: prevCalendar.Tuesday[hour]?.count + 1 || 1,
                posts: prevCalendar.Tuesday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        case 'Wednesday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Wednesday: {
              ...prevCalendar.Wednesday,
              [hour]: {
                count: prevCalendar.Wednesday[hour]?.count + 1 || 1,
                posts: prevCalendar.Wednesday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        case 'Thursday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Thursday: {
              ...prevCalendar.Thursday,
              [hour]: {
                count: prevCalendar.Thursday[hour]?.count + 1 || 1,
                posts: prevCalendar.Thursday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        case 'Friday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Friday: {
              ...prevCalendar.Friday,
              [hour]: {
                count: prevCalendar.Friday[hour]?.count + 1 || 1,
                posts: prevCalendar.Friday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        case 'Saturday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Saturday: {
              ...prevCalendar.Saturday,
              [hour]: {
                count: prevCalendar.Saturday[hour]?.count + 1 || 1,
                posts: prevCalendar.Saturday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        case 'Sunday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Sunday: {
              ...prevCalendar.Sunday,
              [hour]: {
                count: prevCalendar.Sunday[hour]?.count + 1 || 1,
                posts: prevCalendar.Sunday[hour]?.posts?.concat([
                  {
                    title,
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ]) || [
                  {
                    title, //
                    url,
                    timePosted,
                    score,
                    num_comments,
                    author,
                    id,
                  },
                ],
              },
            },
          }));
          break;
        default:
          break;
      }
    }
  };

  // expected output: Array ["Monday", "Tuesday", etc.]
  const days = Object.keys(calendar);
  const hours = Array.from(Array(24).keys());

  useEffect(() => {
    updateCalendar(data);
  }, [data]);

  // useEffect(() => {
  //   console.log(calendar);
  // }, [calendar]);

  return (
    <div className="calendar-container">
      <table className="calendar">
        <thead>
          <tr>
            <td />
            <td colSpan="2">12:00am</td>
            <td colSpan="2">2:00am</td>
            <td colSpan="2">4:00am</td>
            <td colSpan="2">6:00am</td>
            <td colSpan="2">8:00am</td>
            <td colSpan="2">10:00am</td>
            <td colSpan="2">12:00pm</td>
            <td colSpan="2">2:00pm</td>
            <td colSpan="2">4:00pm</td>
            <td colSpan="2">6:00pm</td>
            <td colSpan="2">8:00pm</td>
            <td colSpan="2">10:00pm</td>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <th key={`${day}-header`}>{day}</th>

              {hours.map((hour) => {
                const res = calendar[day][hour]?.count || 0;

                // setting up color code based on number of posts during that hour
                let classTD = res >= 10 ? 'color-10' : `color-${res}`;

                // init itemSelected to false
                let itemSelected = false;

                // if day and hour are true, we add 'selected' class
                if (day === selected.day && hour === selected.hour) {
                  itemSelected = true;
                  classTD += ' selected';
                }

                // state if item was hovered
                let itemFocused = false;

                // focused state is updated via setFocused on onMouseOver
                if (day === focused.day && hour === focused.hour) {
                  itemFocused = true;

                  // we are only adding the 'selected' class if the item was not already clicked on
                  if (!itemSelected && itemFocused) {
                    classTD += ' selected';
                  }
                }

                return (
                  <td
                    className={classTD}
                    key={`${day}-${hour}`}
                    onMouseOver={() => {
                      // console.log('hover');
                      setFocused({
                        day,
                        hour,
                      });
                    }}
                    onFocus={() => {
                      // console.log('focused');
                    }}
                  >
                    <button
                      className="calendar__button"
                      type="button"
                      onClick={() => {
                        if (res === 0) {
                          // console.log(
                          //   'type of calendar[day][hour]:',
                          //   typeof calendar[day][hour],
                          // );
                          handleSelect([]);
                        } else {
                          handleSelect(calendar[day][hour].posts);
                        }

                        setSelected({
                          day,
                          hour,
                        });
                      }}
                    >
                      {res}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  handleSelect: PropTypes.func,
};

Calendar.defaultProps = {
  posts: {},
  handleSelect: () => {},
};

export default Calendar;
