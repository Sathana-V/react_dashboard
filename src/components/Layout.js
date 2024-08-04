
import React from 'react';
import TopBar from './TopBar';
import Sidebar from './SideBar';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10} style={{ marginLeft: '250px', padding: '20px' }}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
