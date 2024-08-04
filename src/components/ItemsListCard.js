
import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBullseye, faAngleRight, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import './css/ItemsListCard.css';

const items = [
  { icon: faBullseye, title: 'Goals', color: '#ff0000' },
  { icon: faUtensils, title: 'Popular Dishes',  color: '#0066ff' },
  { icon: faBowlFood, title: 'Menus',  color: '#66ff99' },
];
const getBgColor = (color) =>  color
? `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
    color.slice(3, 5),
    16
  )}, ${parseInt(color.slice(5, 7), 16)}, 0.3)`
: "sl";

const ItemListCard = () => {

  return (
    <Card className="item-list-card bg-dark text-light">
      <Card.Body>
        <ListGroup className="list-group-flush">
          {items.map((item, index) => (
            <ListGroupItem key={index} className="d-flex justify-content-between align-items-center bg-dark text-light">
              <div className="d-flex align-items-center">
                <div className="icon-circle" style={{background: getBgColor(item.color)}}>
                  <FontAwesomeIcon icon={item.icon} color={item.color} />
                </div>
                <span className="item-title">{item.title}</span>
              </div>
              <Button variant="outline-light" className="show-more-button">
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ItemListCard;
