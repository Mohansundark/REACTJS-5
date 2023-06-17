import React, { useState } from 'react';
import moment from 'moment';
import './date.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0 });

  const calculateAge = () => {
    const currentDate = moment();
    const birthDate = moment(dob);

    const yearsDiff = currentDate.diff(birthDate, 'years');
    birthDate.add(yearsDiff, 'years');
    const monthsDiff = currentDate.diff(birthDate, 'months');

    setAge({ years: yearsDiff, months: monthsDiff });
  };

  return (
    <div class="div1">
      <h1>Age Calculator</h1>
      <h3>Enter your Date of Birth</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="inputField"
      /><br/>
      <button onClick={calculateAge} className="calculateButton">
        Calculate Age
      </button>
      {age.years > 0 && (
        <p>
          Your are {age.years} years {age.months} months old!!!
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
