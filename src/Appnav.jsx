

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { Link, Outlet } from 'react-router-dom';
 import { CiHeart } from "react-icons/ci";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import img7  from './img7.jpg'
function Appnav() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='font' >MY KITCHEN  <img style={{height:'80px'}} src={img7} alt="" /> </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{marginLeft:'30%'}}>
          <Nav style={{gap:'10%', fontSize:'18px'}}>
           <Link to='./home' className='text2'> <b>HOME</b></Link>
           <Link to='./allitems'className='text2'><b>ALLITEMS</b></Link> 
           <Link to='./favourite'className='text2'><b>FAVOURITE</b></Link> 
           <Link to='./country'className='text2'> <b>COUNTRY </b></Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <Outlet/>
    </>
  );
}

export default Appnav;