import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Card.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import CircularLoader from "./CircularLoader";

const CardComponent = ({
  icon,
  title,
  number,
  percentage,
  isAmount,
  isIncreased,
  color,
  completedPercentage,
}) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const increment = () => {
      start += 1;
      setAnimatedNumber(start);

      if (start < end) {
        setTimeout(increment, stepTime);
      } else {
        setAnimatedNumber(end);
      }
    };

    increment();
  }, [number]);
  const backgroundColor = color
    ? `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
        color.slice(3, 5),
        16
      )}, ${parseInt(color.slice(5, 7), 16)}, 0.3)`
    : "sl";
  let cardClass = icon ? "my-card default-card" : "my-card profit-card";
  cardClass = cardClass + ' bg-dark text-light';
  return (
    <Card className={cardClass}>
      <Card.Body>
        {icon ? (
          <div className="card-icon" style={{ backgroundColor, color }}>
            <FontAwesomeIcon icon={icon} size="1x" />
          </div>
        ) : null}
        <Row>
          <Col md={ completedPercentage ? "6" : "12"}>
            {title ? (
              <Card.Title className="card-title">{title}</Card.Title>
            ) : null}
            <div className="card-number">
              <span className="number"> {isAmount ? '$':''} { animatedNumber}</span>
             
              {icon ? (
                <div>
                  <FontAwesomeIcon
                    className="percentage"
                    icon={isIncreased ? faCaretUp : faCaretDown}
                    size="2x"
                  />

                  <span className="percentage">{percentage}%</span>
                </div>
              ) : null}
            </div>
            {!icon ? (
              <div style={{ marginTop: completedPercentage ? '13px' : '0px'}}>
                <FontAwesomeIcon
                  className="percentage"
                  icon={isIncreased ? faCaretUp : faCaretDown}
                  size="2x"
                />

                <span className="percentage">{percentage}%</span>
              </div>
            ) : null}
          </Col>
          {completedPercentage ? (
            <Col  md="6" style={{textAlign:'center'}}>
              <CircularLoader percentage={40} />
              <span style={{fontSize:'8px', color: 'white'}}>*The value here has been rounded off</span>
            </Col>
           
          ) : null}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
