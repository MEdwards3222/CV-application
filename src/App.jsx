import './App.css';
//import ResumeForm from './ResumeForm';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

function App() {
 

  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">Resume Generator</Navbar.Brand>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="https://github.com/MEdwards3222/cv-application">Github Repository</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      
      
    </Navbar>
  )
}

export default App
