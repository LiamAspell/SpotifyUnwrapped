import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { Artists } from '../Pages/Artists';
import { Landing } from '../Pages/Home';
import { Tracks } from '../Pages/Tracks';

import { BrowserRouter as Router, Switch, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Nav className="me-auto" style={{}}>
              <Nav.Link as={Link} to="/" style={{ color: "rgb(30, 215, 96)" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/Artists" style={{ color: "rgb(30, 215, 96)" }}>Artists</Nav.Link>
              <Nav.Link as={Link} to="/Tracks" style={{ color: "rgb(30, 215, 96)" }}>Tracks</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Artists"  element={<Artists />} />
            <Route path="/Tracks" element={<Tracks />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default ColorSchemesExample;