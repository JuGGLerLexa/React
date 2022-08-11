import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const date = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  return moment(date).format('h:mm:ss A');
};

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
