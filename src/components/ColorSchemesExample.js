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
      <div className="Homepage-header">
        <Navbar />
        <h1>Spotify Unwrapped</h1>
        {/* <img src={Logo} height="100px"/>  */}
        <img src={SpotifyLogo} width="20%" alt="ProjectLogo" />
        <div style={{   width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'}}>
        <center><p>This is a Music Programming Project as part of the CS322 Music Programming Module. This project intends to extend the functionality of Spotify, achieved by using the Spotify API and Youtube v3 API.</p></center>
        </div>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}>

          
          <Button href="/Artists" id="exploreArtists" >Explore the Artists Section</Button>
          <button href="/Tracks" class="btn btn-warning" id="exploreTracks">Explore the Tracks Section</button>

        </div>
        <Authenticate />
      </div>
    </>
  );
}

export default ColorSchemesExample;