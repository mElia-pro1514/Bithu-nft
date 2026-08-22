import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(25);
  const [minutes, setMinutes] = useState(50);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    let intervalId;

    if (totalSeconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }

        if (minutes === 0 && seconds === 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
          setDays(days - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [days, hours, minutes, seconds]);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return <div className=' text-[25px] text-red-700'>Time&apos;s up..!</div>;
  }
  const displayDays = String(days).padStart(2, '0');
  const displayHours = String(hours).padStart(2, '0');
  const displayMinutes = String(minutes).padStart(2, '0');
  const displaySeconds = String(seconds).padStart(2, '0');

  return (
    <div>
        
      <p className='time text-[30px]'>
         {displayDays}<span>D</span>  <b>:</b> {displayHours}<span>H</span>  <b>:</b>  {displayMinutes}<span>M</span>  <b>:</b>  {displaySeconds}<span>S</span> 
      </p>
    </div>
  );
};

export default CountdownTimer;