import React, { useState, useEffect, useRef } from 'react';

const CountdownView = (props) => {
  const { data } = props;
  const [hours, setHours] = useState(Number(data.hoursTime) || 0);
  const [minutes, setMinutes] = useState(Number(data.minutesTime) || 0);
  const [seconds, setSeconds] = useState(Number(data.secondsTime) || 0);
  const [isRunning, setIsRunning] = useState(false);

  /*
  faz a soma total de segundos para armazenar valores que precisam persistir
  entre as renderizações do componente, garantido que o valor preservado
  corretamente e não seja reinicializado a cada renderização
  */

  const totalSecondsRef = useRef(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    let timer;

    if (isRunning && totalSecondsRef.current > 0) {
      timer = setInterval(() => {
        if (totalSecondsRef.current > 0) {
          totalSecondsRef.current -= 1;
          setHours(Math.floor(totalSecondsRef.current / 3600));
          setMinutes(Math.floor((totalSecondsRef.current % 3600) / 60));
          setSeconds(totalSecondsRef.current % 60);
        } else {
          clearInterval(timer);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="title text-4xl font-bold uppercase p-4">
        {data.title === undefined ? 'Countdown Time' : data.title}
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <span
              onChange={(e) => setHours(e.target.value)}
              disabled={isRunning}
              className="hoursTime"
            >
              {hours < 10 ? '0' + hours : hours}
            </span>
            <span className="hours">
              {data.hours === undefined ? 'hours' : data.hours}
            </span>
          </li>
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <span
              onChange={(e) => setMinutes(e.target.value)}
              disabled={isRunning}
              className="minutesTime"
            >
              {minutes < 10 ? '0' + minutes : minutes}
            </span>
            <span className="minutes">
              {data.minutes === undefined ? 'minutes' : data.minutes}
            </span>
          </li>
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <span
              onChange={(e) => setSeconds(e.target.value)}
              disabled={isRunning}
              className="secondsTime"
            >
              {seconds < 10 ? '0' + seconds : seconds}
            </span>
            <span className="seconds">
              {data.seconds === undefined ? 'seconds' : data.seconds}
            </span>
          </li>
        </ul>
        <div className="flex justify-center gap-4 my-8">
          <button
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
            className="buttonStart bg-green-400 cursor-pointer px-8 py-3 text-xl font-medium text-white hover:bg-green-600 rounded-md"
          >
            {data.buttonStart === undefined ? 'start' : data.buttonStart}
          </button>
          <button
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
            className="buttonStart top bg-red-400 cursor-pointer px-8 py-3 text-xl font-medium text-white hover:bg-red-600 rounded-md"
          >
            {data.buttonStop === undefined ? 'stop' : data.buttonStop}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownView;
