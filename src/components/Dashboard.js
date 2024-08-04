
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';

import { faTruck, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';
import './css/Dashboard.css';
import ActivityCard from './ActivityCard';
import ItemListCard from './ItemsListCard';
import RecentOrdersCard from './RecentOrderCard';
import profilePic1 from '../assets/person1.png';
import profilePic2 from '../assets/person2.png';
import profilePic3 from '../assets/person3.png';
import profilePic4 from '../assets/person4.png';
import CustomerFeedbackCard from './CustomerFeedbackCard';
const orders = [
    {
      customerName: 'John Doe',
      profilePic: profilePic1,
      orderNo: '12345',
      amount: '150.00',
      status: 'Delivered'
    },
    {
      customerName: 'Jane Smith',
      profilePic: profilePic2,
      orderNo: '12346',
      amount: '200.00',
      status: 'Pending'
    },
    {
      customerName: 'Michael Johnson',
      profilePic: profilePic3,
      orderNo: '12347',
      amount: '100.00',
      status: 'Canceled'
    },
    {
        customerName: 'Michael Johnson',
        profilePic: profilePic4,
        orderNo: '12347',
        amount: '100.00',
        status: 'Delivered'
      },
      {
        customerName: 'Wade Warren',
        profilePic: profilePic2,
        orderNo: '545345',
        amount: '200.00',
        status: 'Pending'
      },
      {
        customerName: 'Cody Fisher',
        profilePic: profilePic1,
        orderNo: '4344345',
        amount: '150.00',
        status: 'Delivered'
      },
  ];
  const generateFeedbacks = () => {
    const feedbacks = [
      {
        customerName: 'Alice Johnson',
        profilePic: profilePic1,
        rating: 5,
        review: 'The food was absolutely amazing! The flavors were on point, and the service was exceptional. Highly recommend!',
      },
      {
        customerName: 'Bob Smith',
        profilePic: profilePic2,
        rating: 4,
        review: 'Great experience overall. The pizza was delicious, but the pasta was a bit undercooked. Still, I will be coming back!',
      },
      {
        customerName: 'Charlie Brown',
        profilePic: profilePic3,
        rating: 3,
        review: 'The restaurant had a nice ambiance, but the food was just average. The burger was okay, but nothing to write home about.',
      },
      {
        customerName: 'Diana Prince',
        profilePic: profilePic4,
        rating: 5,
        review: 'Fantastic dining experience! The sushi was fresh and beautifully presented. The staff was friendly and attentive.',
      },
      {
        customerName: 'Ethan Hunt',
        profilePic: profilePic1,
        rating: 4,
        review: 'The steak was cooked to perfection, but the sides could use some improvement. Still, a great meal and worth the visit.',
      },
      {
        customerName: 'Fiona Gallagher',
        profilePic :profilePic2,
        rating: 5,
        review: 'Everything was top-notch! The desserts were a highlight, and the ambiance was perfect for a night out.',
      },
      {
        customerName: 'George Lopez',
        profilePic: profilePic4,
        rating: 2,
        review: 'Not a great experience. The food was bland, and the service was slow. I don’t think I’ll be coming back anytime soon.',
      },
      {
        customerName: 'Hannah Montana',
        profilePic: profilePic3,
        rating: 4,
        review: 'The food was good, but the wait was a bit longer than expected. The ambiance was nice, and the staff was friendly.',
      },
      {
        customerName: 'Ian Malcolm',
        profilePic: profilePic1,
        rating: 3,
        review: 'The experience was average. The food was okay, but the service could use some improvement. Not bad, but not great either.',
      },
      {
        customerName: 'Julia Roberts',
        profilePic: profilePic4,
        rating: 5,
        review: 'An excellent dining experience! The food was outstanding, and the service was impeccable. Definitely worth a visit!',
      },
      {
        customerName: 'Kevin Spacey',
        profilePic: profilePic2,
        rating: 4,
        review: 'Very enjoyable meal. The appetizers were fantastic, and the main course was quite good. I’ll be back for sure.',
      },
      {
        customerName: 'Laura Croft',
        profilePic: profilePic4,
        rating: 5,
        review: 'Delicious food and great service! The menu has a lot of variety, and everything we ordered was cooked perfectly.',
      },
      {
        customerName: 'Matt Damon',
        profilePic: profilePic1,
        rating: 3,
        review: 'The food was decent, but nothing special. The service was a bit slow, and the atmosphere was average.',
      },
     
      {
        customerName: 'Ursula K. Le Guin',
        profilePic: profilePic3,
        rating: 4,
        review: 'Great meal with a cozy atmosphere. The food was tasty, and the service was decent. I had a pleasant experience'
      }
    ];
    return feedbacks;
  };  
  const feedbacks = generateFeedbacks();
const Dashboard = () => {
  return (
    <Container fluid>
      <h4 className='dashboard-title'>Dashboard</h4>
      <Row>
        <Col md={8}>
         <Row>
         <Col md={3}>
         <CardComponent icon={faTruck} title="Total Orders" color="#0066ff" number={75} percentage={3} isIncreased ={true} />
         </Col>
         <Col md={3}>
         <CardComponent icon={faTruck} title="Total Delivered" color="#ff0000"  number={70} percentage={3} isIncreased ={false} />
         </Col>
         <Col md={3}>
         <CardComponent icon={faTruck} title="Total Cancelled" color="#66ff99"  number={5} percentage={2} isIncreased ={true} />
         </Col>
         <Col md={3}>
         <CardComponent icon={faTruck} title="Total Revenue" isAmount={true} color="#ff99cc"  number={12} percentage={3} isIncreased ={true} />
         </Col>
         </Row>
        </Col>
        <Col md={4}>
        <CardComponent  title="Net Profit"  completedPercentage="70" isAmount={true}   number={6759} percentage={75} isIncreased ={true} />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <ActivityCard />
        </Col>
        <Col md={4}>
          <ItemListCard />
        </Col>
      </Row>
      
      <Row>
        <Col md={8}>
        <RecentOrdersCard orders={orders} />
        </Col>
        <Col md={4}>
        <CustomerFeedbackCard feedbacks={feedbacks} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
