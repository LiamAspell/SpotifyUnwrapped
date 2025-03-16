import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../resources/SpotifyUnwrapped.png'
import '../App.css';
import { Git } from '../Pages/Git';
import { Player } from '../Pages/Player';
import { Artists } from '../Pages/Artists';
import { Greeting } from '../Pages/HomeGreeting';
import { Tracks } from '../Pages/Tracks';
import Button from 'react-bootstrap/Button';
import Authenticate from './Authenticate';
import Carousel from './ControlledCarousel';
import SpotifyLogo from '../resources/music-icon.png';
import { BrowserRouter as Router, Switch, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Nav className="me-auto" style={{}}>
              <Nav.Link as={Link} to="/Artists" id="toArtists" style={{ color: "rgb(30, 215, 96)" }}>Artists</Nav.Link>
              <Nav.Link as={Link} to="/Tracks" id="toTracks" style={{ color: "rgb(30, 215, 96)" }}>Tracks</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/Artists"  element={<Artists />} />
            <Route path="/Tracks" element={<Tracks />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default ColorSchemesExample;