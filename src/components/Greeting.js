import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Authenticate from '../components/Authenticate';

function Greeting() {
  return (
    <div>
   
    <div className="App-header">
        <Navbar />
        <h1>Music Programming Project</h1>
        <p>Name = Liam Aspell</p>
        <p>Student Number = 17300046</p>
        <Button href="/Home"><a href="/Git">Take me there</a></Button>
        <Authenticate />
        <p>Student Number = 17300046</p>
    </div>
    </div>
    
    
    
  );
}

export default Greeting;