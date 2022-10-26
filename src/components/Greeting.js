import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Button from 'react-bootstrap/Button';


function Greeting() {
  return (
    <div>
    <Navbar />
    <div className="App-header">
        <h1>Music Programming Project</h1>
        <p>Name = Liam Aspell</p>
        <p>Student Number = 17300046</p>
        <Button variant="primary" href="/Home">Take me there!</Button>
    </div>
    </div>
    
    
    
  );
}

export default Greeting;