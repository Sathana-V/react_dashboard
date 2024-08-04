
import React from 'react';
import TopBar from './TopBar';
import Sidebar from './SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Layout.css'
const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Container fluid className='layout-container'>
        <Row>
         
          <Col xs={12}>
          <Sidebar />
           <div  className='layout-children'>
           {children}
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
