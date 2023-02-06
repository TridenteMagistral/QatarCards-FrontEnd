import NavDropdown from 'react-bootstrap/NavDropdown';
import WorldCup from "../../Image/world-Cup.png"
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navigation() {
  return (
      <div className='d-flex navbarQatar justify-content-center text-white fixed-top mx-0 '>
        <div className='mx-2 '>
          <NavDropdown title="Cards" className='' >
            <NavDropdown.Item href="/myColeccion">My colleccion</NavDropdown.Item>
            <NavDropdown.Item href="/swapCards">
              Swap cards
            </NavDropdown.Item>
            <NavDropdown.Item href="/openPacks">
              Open Packs
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className='mx-2'>
          <NavDropdown title="Shop" className='' >
            <NavDropdown.Item href="/myColeccion">My colleccion</NavDropdown.Item>
            <NavDropdown.Item href="/swapCards">
              Swap cards
            </NavDropdown.Item>
            <NavDropdown.Item href="/openPacks">
              Open Packs
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className='mx-2 pt-2'>
          <Link  to={"/home"}>
            <img src={WorldCup} alt="" />
          </Link>
        </div>
       
        <div>
          <NavDropdown className='text-white navbarDropdown mx-2' title="Totw" >
            <NavDropdown.Item href="/myColeccion">My colleccion</NavDropdown.Item>
            <NavDropdown.Item href="/swapCards">
              Swap cards
            </NavDropdown.Item>
            <NavDropdown.Item href="/openPacks">
              Open Packs
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className='mx-2 '>
          <NavDropdown className=' text-white ' title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">SignIn</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
          </NavDropdown>
        </div>  
      </div>
  );
}


export default Navigation;