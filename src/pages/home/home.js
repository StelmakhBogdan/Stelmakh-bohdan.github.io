import React from 'react';
import {
  CardDeck,
  Container,
  Card,
  CardImg,
  Button
} from 'react-bootstrap';

import Slider from '../../components/slider';
import picture1 from '../../img/Title-cards/card1.jpg';
import picture2 from '../../img/Title-cards/card2.jpg';
import picture3 from '../../img/Title-cards/card3.jpg';

const Home = () => (
  <div className="jumbotron-fluid">
    <Slider/>
    <Container>
      <h2 className="text-center m-4">My experience</h2>
      <CardDeck>
        <Card>
          <CardImg
            variant="top"
            src={picture1}
          />
          <Card.Body>
            <Card.Title>Shuba Magazine</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque facilis hic laudantium nesciunt numquam qui reprehenderit sint, vero!
              A, assumenda harum! Aut debitis dolores esse hic ipsa laboriosam sint, tempore.
            </Card.Text>
            <Button variant="outline-secondary">About Team</Button>
          </Card.Body>
        </Card>
        <Card>
          <CardImg
            variant="top"
            src={picture2}
          />
          <Card.Body>
            <Card.Title>Cinema</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque facilis hic laudantium nesciunt numquam qui reprehenderit sint, vero!
              A, assumenda harum! Aut debitis dolores esse hic ipsa laboriosam sint, tempore.
            </Card.Text>
            <Button variant="outline-secondary">Join to us!</Button>
          </Card.Body>
        </Card>
        <Card>
          <CardImg
            variant="top"
            src={picture3}
          />
          <Card.Body>
            <Card.Title>All Are Welcome</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque facilis hic laudantium nesciunt numquam qui reprehenderit sint, vero!
              A, assumenda harum! Aut debitis dolores esse hic ipsa laboriosam sint, tempore.
            </Card.Text>
            <Button variant="outline-secondary">About</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </div>
);

export default Home;