
import React from 'react';
import "./css/Topbar.css";
import {Navbar, Nav, Form, FormControl, Button, Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faUser, faTruck , faGear } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/person.png';

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="topbar">
     <Navbar.Brand href="#">
       
        <FontAwesomeIcon icon={faTruck} size="lg"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

       <Nav>
          <FontAwesomeIcon icon={faUser} />
        </Nav>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Form inline="true" className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           
          </Form>
        </Nav>
        
        <Nav className="ml-auto">
        <Nav.Link href="#env" className="topbar-icon"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
          <Nav.Link href="#settings" className="topbar-icon"><FontAwesomeIcon icon={faGear} /></Nav.Link>
          <Nav.Link href="#bell" className="topbar-icon"><FontAwesomeIcon icon={faBell} /></Nav.Link>
          
          <Dropdown align="end">
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="profile-dropdown">
              <Image src={profilePic} roundedCircle height="35"  />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/profile">Profile Settings</Dropdown.Item>
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
