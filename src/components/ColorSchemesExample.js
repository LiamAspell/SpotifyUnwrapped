import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { Git } from '../Pages/Git';
import { Player } from '../Pages/Player';
import { Artists } from '../Pages/Artists';
import { Greeting } from '../Pages/HomeGreeting';
import { Tracks } from '../Pages/Tracks';
import Button from 'react-bootstrap/Button';
import Authenticate from './Authenticate'


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
              <Nav.Link as={Link} to="/Artists" style={{ color: "rgb(30, 215, 96)" }}>Artists</Nav.Link>
              <Nav.Link as={Link} to="/Tracks" style={{ color: "rgb(30, 215, 96)" }}>Tracks</Nav.Link>
              {/* <Nav.Link as={Link} to='/Player' style={{ color: "rgb(30, 215, 96)" }}>Player</Nav.Link> */}
              <Nav.Link as={Link} to='/Git' style={{ color: "rgb(30, 215, 96)" }}>Git</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/Artists" element={<Artists />} />
            <Route path="/Tracks" element={<Tracks />} />
            {/* <Route path="/Player" element={<Player />} /> */}
            <Route path="/Git" element={<Git />} />
          </Routes>
        </div>
      </Router>
      <div className="Homepage-header">
        <Navbar />
    
        <h1>Spotify Unwrapped</h1>

        <Button href="/Artists" >Explore the Project!</Button>
        <Authenticate />
        
       
        
        
      </div>
    </>
  );
}

export default ColorSchemesExample;