
import React from 'react';
import { Card, Table, Image } from 'react-bootstrap';
import './css/RecentOrders.css';

const RecentOrdersCard = ({ orders }) => {
  const getStatusChip = (status) => {
    let colorClass = '';
    switch (status) {
      case 'Delivered':
        colorClass = 'status-delivered';
        break;
      case 'Pending':
        colorClass = 'status-pending';
        break;
      case 'Canceled':
        colorClass = 'status-canceled';
        break;
      default:
        colorClass = '';
    }
    return <span className={`status-chip ${colorClass}`}>{status}</span>;
  };

  return (
    <Card className="recent-orders-card bg-dark text-light">
      <Card.Body>
        <Card.Title className="card-title">Recent Orders</Card.Title>
        <Table responsive bordered hover variant="dark" className="orders-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="d-flex align-items-center">
                  <Image src={order.profilePic} roundedCircle height="30" className="me-2" />
                  {order.customerName}
                </td>
                <td>{order.orderNo}</td>
                <td>${order.amount}</td>
                <td>{getStatusChip(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentOrdersCard;
