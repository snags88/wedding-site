import React, { useState } from 'react';
import IosHeart from 'react-ionicons/lib/IosHeart'
import dayjs from 'dayjs';

import { WEDDING_DATE, PRIMARY_COLOR_HEX } from 'consts';

const getDateDiff = units =>
  dayjs().isBefore(dayjs(WEDDING_DATE))
    ? dayjs(WEDDING_DATE).diff(Date.now(), units)
    : 0;


const Counter = () => {
  const [days, setDays] = useState(getDateDiff('day'));
  const [hours, setHours] = useState(getDateDiff('hour'));
  const [minutes, setMinutes] = useState(getDateDiff('minute'));
  const [seconds, setSeconds] = useState(getDateDiff('second'));

  setInterval(() => {
    setDays(getDateDiff('day'));
    setHours(getDateDiff('hour'));
    setMinutes(getDateDiff('minute'));
    setSeconds(getDateDiff('second'));
  }, 1000);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="u-m-b-5 text-center u-font-script">we are <br/>counting down!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <ul className="counter-list clearfix">
            <li className="counter-list__item">
              <span>{ days }</span>
              <p>days</p>
              <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm"/>
            </li>
            <li className="counter-list__item">
              <span>{ hours % 24 }</span>
              <p>hours</p>
              <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm"/>
            </li>
            <li className="counter-list__item">
              <span>{ minutes % 60 }</span>
              <p>minutes</p>
              <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm"/>
            </li>
            <li className="counter-list__item">
              <span>{ seconds % 60 }</span>
              <p>seconds</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Counter;
