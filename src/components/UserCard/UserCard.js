import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './UserCard.css';


const user = {
   userName: "LizaKLim",
   firstName: "Liza",
   secondName: "Klim",
   age: 19,
   date_registration: "18.12.2024",
   nomber_phone: "+79000000000",
   image_url: ""
}

function UserCard(){
  return(
    <Card className = 'userCard'>
    <Card.Img variant="top" src="../../123.png" className='img'/>
    <Card.Header style={{ textAlign: 'center'}}>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first" style={{ width: '15rem' }}>User information</Nav.Link>
            <Card.Subtitle className = 'my-3'>First Name: <b>{user.firstName}</b><br></br> Second Name: <b>{user.secondName}</b> </Card.Subtitle>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Contact information</Nav.Link>
            <Card.Subtitle className = 'my-5'>AGE: {user.age}<br></br> Data registration: {user.date_registration}<br></br>  Phone: {user.nomber_phone}</Card.Subtitle>
          </Nav.Item>
        </Nav>
      </Card.Header>
    <Card.Body>
      <Card.Title>{user.userName + ' - '}</Card.Title>
      <p>- Есть два способа создания дизайна программы. Один из них, это сделать его настолько простым, что в нем, очевидно, не будет недостатков. Другой способ — сделать его настолько запутанным, что в нем не будет очевидных недостатков.
      — C.A. R. Hoare</p>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default UserCard;
