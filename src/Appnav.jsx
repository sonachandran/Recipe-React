 
  // import Container from 'react-bootstrap/Container';
  // import Nav from 'react-bootstrap/Nav';
  // import Navbar from 'react-bootstrap/Navbar';
  import { CiHeart } from "react-icons/ci";
  import React from 'react'
  import { Link, Outlet } from 'react-router-dom';
  import './Food.css'
   
   const Appnav = () => {
     return (
      < div>
      <div className=' pt-4  bg-light  d-flex justify-content-center   align-items-center  flex-wrap 'style={{fontSize:'120%',padding:'2%'}}>
        <b>MY KITCHEN</b>
        <span style={{ marginTop:'-20px',marginLeft:'50%',display:'flex',flexWrap:'wrap',gap:'4%'}}>
      <Link to='./home'>  <b className='text2'>HOME</b></Link> 
      <Link to='./allitems'><b className='text2'>ALL ITEMS</b></Link>  
      <Link to='./favourite'><b className='text2'>FAVOURITE<CiHeart/></b></Link> 
      <Link to='./country'><b className='text2'>COUNTRY</b></Link> 

     
        </span>
  </div>
<Outlet/>
  </div>
    
  
     )
   }
   
   export default Appnav



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
           
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;