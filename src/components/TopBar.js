
import "./css/Topbar.css";
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faTruck, faGear } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/person.png';
import React, { useState, useEffect } from 'react';
const TopBar = () => {
 
  const isMobile =  window.innerWidth < 780;
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="topbar">
      <Navbar.Brand href="#">
        <FontAwesomeIcon icon={faTruck} size="lg" />
      </Navbar.Brand>
      
     
      { isMobile ? 

        <Dropdown align="end" className="topbar-dropdown">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Dropdown.Toggle variant="dark" id="dropdown-basic" className="profile-dropdown">
          <Image src={profilePic} roundedCircle height="35" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/profile">Profile Settings</Dropdown.Item>
          <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> :  <Navbar.Toggle aria-controls="basic-navbar-nav" />
}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Form className="d-flex position-relative">
            <FormControl
              type="text"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              className="search-input"
            />
            <Button variant="link" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Nav>
        <Nav className="ml-auto">
          
          <Nav.Link href="#env" className="topbar-icon">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="icon-title"> Messages</span>
          </Nav.Link>
          <Nav.Link href="#settings" className="topbar-icon">
            <FontAwesomeIcon icon={faGear} />
            <span className="icon-title"> Settings</span>
          </Nav.Link>
          <Nav.Link href="#bell" className="topbar-icon">
            <FontAwesomeIcon icon={faBell} />
            <span className="icon-title"> Notifications</span>
          </Nav.Link>
       
        </Nav>
        { isMobile ? null :
        <Dropdown align="end" className="topbar-dropdown">
        
        <Dropdown.Toggle variant="dark" id="dropdown-basic" className="profile-dropdown">
          <Image src={profilePic} roundedCircle height="35" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/profile">Profile Settings</Dropdown.Item>
          <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
