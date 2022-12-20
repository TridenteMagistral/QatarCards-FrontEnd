import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

function BasicExample() {
  return (
    <Navbar collapseOnSelect className='fixed-top ps-3' expand="sm" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <div className='d-flex '>
        <NavDropdown className='mx-3 m-auto d-block d-sm-none icon' title={<FontAwesomeIcon icon={faGear} />} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />     
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <NavDropdown className='mx-3 m-auto d-none d-sm-block icon' title={<FontAwesomeIcon icon={faGear} />} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
        </NavDropdown>
    </Navbar>
  );
}


export default BasicExample;