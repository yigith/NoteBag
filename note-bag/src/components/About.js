import React from 'react';
import { Container } from 'react-bootstrap';
import NbNavbar from './NbNavbar';

function About() {
  return (
    <div>
      <NbNavbar />
      <Container>
        <h1>About Us</h1>
        <p>We are lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores ipsam, quod similique commodi odio. Facere fugiat voluptates aperiam similique suscipit, cumque est voluptatem consequuntur reprehenderit, ipsa assumenda ipsum distinctio?</p>
        <p>We want to quia minus unde, nulla distinctio accusantium adipisci obcaecati velit, optio, veritatis doloribus praesentium asperiores reiciendis voluptas fugiat aperiam sunt ratione delectus tempora vel laudantium consectetur molestiae! Accusantium architecto possimus cum?</p>
      </Container>
    </div>
  )
}

export default About