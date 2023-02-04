import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

function Navigation() {
  return (
    <Navbar collapseOnSelect className='fixed-top ps-3' expand="sm" variant="dark">
      <Navbar.Brand href="/home">Qatar Cards</Navbar.Brand>
      <div className='d-flex '>
        <NavDropdown className='mx-3 m-auto d-block d-sm-none' title={<FontAwesomeIcon icon={faGear} />} id="basic-nav-dropdown">
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
          <NavDropdown title="Cards" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/myCollection">My collection</NavDropdown.Item>
            <NavDropdown.Item href="/swapCards">
              Swap cards
            </NavDropdown.Item>
            <NavDropdown.Item href="/openPacks">
              Open packs
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <NavDropdown className='mx-3 m-auto d-none d-sm-block text-light' title={<FontAwesomeIcon icon={faGear} />} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}


export default Navigation;