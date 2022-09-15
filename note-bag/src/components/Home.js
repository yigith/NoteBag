import { Form, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NbNavbar from './NbNavbar';

function Home() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  // App bileşeni ilk render olduğunda (mount)
  useEffect(function () {
    axios.get(apiUrl)
      .then(function (response) {
        setNotes(response.data);
      });
  }, []);

  const handleNewNote = function (e) {
    axios.post(apiUrl, { title: "New Note", content: "" })
      .then(function (response) {
        setNotes([response.data, ...notes]);
      });
  };

  const handleSave = function (e) {
    axios.put(apiUrl + "/" + activeNote.id, {
      id: activeNote.id,
      title: activeNote.title,
      content: activeNote.content
    })
      .then(function (response) {
        const notes2 = [...notes];
        const index = notes2.findIndex(x => x.id === activeNote.id);
        notes2[index] = response.data;
        setNotes(notes2);
        setActiveNote({ ...response.data });
      });
  };

  const handleDelete = function (e) {
    axios.delete(apiUrl + "/" + activeNote.id)
      .then(function (response) {
        setNotes(notes.filter(x => x.id !== activeNote.id));
        setActiveNote(null);
      });
  };

  const handleTitleChange = function (e) {
    setActiveNote({ ...activeNote, title: e.target.value });
  };

  const handleContentChange = function (e) {
    setActiveNote({ ...activeNote, content: e.target.value });
  };

  return (
    <div className="Home">
      <NbNavbar />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={4} md={3}>
            <Button onClick={handleNewNote}>Yeni</Button>
            <ListGroup className="mt-3 mb-3">
              {notes.map((note) =>
                <ListGroup.Item action key={note.id}
                  active={note.id === activeNote?.id}
                  onClick={() => setActiveNote({ ...note })}>
                  {note.title}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col sm={8} md={9}>
            {
              activeNote == null
                ?
                <div className="d-flex align-items-center justify-content-center" style={{ height: 400 }}>
                  Select a note to view/edit or create a new one!
                </div>
                :
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Title" value={activeNote.title} onChange={handleTitleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" placeholder="Content" rows={10} value={activeNote.content} onChange={handleContentChange} />
                  </Form.Group>
                  <div>
                    <Button variant="primary" className="me-2" onClick={handleSave}>Kaydet</Button>
                    <Button variant="danger" onClick={handleDelete}>Sil</Button>
                  </div>
                </Form>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
