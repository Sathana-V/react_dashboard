
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <CardComponent title="Card 1" content="This is the content of card 1." />
          <CardComponent title="Card 2" content="This is the content of card 2." />
        </Col>
        <Col md={6}>
          <div className="dashboard-content">
            <h3>Additional Information</h3>
            <p>Placeholder for charts, statistics, or other information.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
