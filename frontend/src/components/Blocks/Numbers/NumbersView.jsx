import React, { useState, useEffect } from 'react';

const NumbersView = (props) => {
  const { data } = props;
  const [timeRemaining, setTimeRemaining] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(timer); // Parar o contador quando o tempo acabar
      }
    }, 1000);

    // Limpando o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, [timeRemaining]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="title text-4xl font-bold uppercase p-4">{data.title}</div>
      <div>
        <ul className="flex gap-4">
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <span className="">{hours.toString().padStart(2, '0')}</span>
            <span>Days</span>
          </li>
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <span className="">{minutes.toString().padStart(2, '0')}</span>
            <span>Minutes</span>
          </li>
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <span className="">{seconds.toString().padStart(2, '0')}</span>
            <span>Seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NumbersView;
