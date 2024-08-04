// src/components/CircularLoader.js
import React, { useEffect, useState } from 'react';
import './css/CircularLoader.css';

const CircularLoader = ({ percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    // Ensure percentage is between 0 and 100
    const targetPercentage = Math.max(0, Math.min(percentage, 100));
    const duration = 2000; // Duration of the animation in milliseconds
    const start = 0;

    const stepTime = duration / targetPercentage;
    let currentPercentage = start;

    const animate = () => {
      if (currentPercentage < targetPercentage) {
        currentPercentage += 1; // Increment by 1%
        setAnimatedPercentage(currentPercentage);
        setTimeout(animate, stepTime);
      } else {
        setAnimatedPercentage(targetPercentage);
      }
    };

    animate();
  }, [percentage]);

  // Calculate the stroke dash array and offset
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="circular-loader">
      <svg
        width="90"
        height="90"
        viewBox="0 0 120 120"
      >
        <circle
          className="background-circle"
          cx="60"
          cy="60"
          r={radius}
        />
        <circle
          className="progress-circle"
          cx="60"
          cy="60"
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="loader-text">
        {animatedPercentage}%<br />
        <span className='loader-completed'>Goal Completed</span>
      </div>
    </div>
  );
};

export default CircularLoader;
