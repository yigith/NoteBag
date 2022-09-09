import './App.css';
import NbNavbar from './components/NbNavbar';
import { Form, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  // App bileşeni ilk render olduğunda (mount)
  useEffect(function() {
    axios.get("https://localhost:7292/api/Notes")
      .then(function (response) {
        setNotes(response.data);
      });
  }, []);


  return (
    <div className="App">
      <NbNavbar />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={4} md={3}>
            <Button>Yeni</Button>
            <ListGroup className="mt-3 mb-3">
              { notes.map((note) => 
                <ListGroup.Item action key={note.id}>
                  {note.title}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col sm={8} md={9}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" placeholder="Content" rows={10} />
              </Form.Group>
            </Form>
            <div>
              <Button variant="primary" className="me-2">Kaydet</Button>
              <Button variant="danger">Sil</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
