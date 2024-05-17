"use client"
import { useEffect, useState } from 'react';

const CountdownTimer = ({ duration }) => {
  const calculateTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [targetDate, setTargetDate] = useState(new Date().getTime() + duration);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <h1 className='shadow-lg px-3 text-blue-800'>
        {timeLeft.hours !== undefined ? `${timeLeft.hours}h ` : ''}{timeLeft.minutes !== undefined ? `${timeLeft.minutes}m ` : ''}{timeLeft.seconds !== undefined ? `${timeLeft.seconds}s` : 'Time is up!'}
      </h1>
    </div>
  );
};

export default CountdownTimer;
