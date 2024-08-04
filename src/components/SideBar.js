
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChartBar, faCheckSquare , faWallet, faUser} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="sidebar  bg-dark text-light">
      <Nav className="flex-column  bg-dark text-light">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <Nav.Link as={Link} to="/profile">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          <FontAwesomeIcon icon={faChartBar} />
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          <FontAwesomeIcon icon={faCheckSquare} />
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          <FontAwesomeIcon icon={faWallet} />
        </Nav.Link>
        
      </Nav>
    </div>
  );
};

export default Sidebar;
