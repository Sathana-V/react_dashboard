
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Dropdown } from 'react-bootstrap';
import 'chart.js/auto';
import './css/ActivityCard.css';

const ActivityCard = () => {
  const [view, setView] = useState('Weekly');

  const getRandomValues = (num) => {
    return Array.from({ length: num }, () => Math.floor(Math.random() * 15000) + 1);
  };

  const days = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
  const data = {
    labels: days,
    datasets: [
      {
        label: 'Amount',
        data: getRandomValues(days.length),
        backgroundColor: 'rgba(0, 123, 255, 0.8)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
        borderRadius: 40
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
          callback: (value) => `${value / 1000}k`,
          color: '#fff',
          maxTicksLimit: 4
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      x: {
        ticks: {
          color: '#fff'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <Card className="activity-card bg-dark text-light">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="card-title">Activity</Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {view}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setView('Weekly')}>Weekly</Dropdown.Item>
              <Dropdown.Item onClick={() => setView('Monthly')}>Monthly</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActivityCard;
