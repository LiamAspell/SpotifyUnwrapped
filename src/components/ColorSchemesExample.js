import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

import { Git } from '../Pages/Git';
import { Player } from '../Pages/Player';
import { Home } from '../Pages/Home';
import { Greeting } from '../Pages/HomeGreeting';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function ColorSchemesExample() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Nav className="me-auto" style={{}}>
              <Nav.Link as={Link} to="/" style={{ color: "rgb(30, 215, 96)" }}>Home</Nav.Link>
              <Nav.Link as={Link} to='/Player' style={{ color: "rgb(30, 215, 96)" }}>Player</Nav.Link>
              <Nav.Link as={Link} to='/Git' style={{ color: "rgb(30, 215, 96)" }}>Git</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Player" element={<Player />} />
            <Route path="/Git" element={<Git />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default ColorSchemesExample;