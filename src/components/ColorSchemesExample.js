import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Nav className="me-auto"  style={{}}>
            <Nav.Link href="#Home" style={{color:"rgb(30, 215, 96)"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color:"rgb(30, 215, 96)"}}>Player</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"rgb(30, 215, 96)"}}>Git</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;