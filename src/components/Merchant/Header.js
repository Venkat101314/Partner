import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Images/logo.png";
import "../styles.css";


const Header = () => {
  const navigate = useNavigate();
  const loggedOut=()=>{
    localStorage.clear();
    return navigate("/")
  }
  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid>
          <Navbar.Brand className="d-flex" style={{alignItems:"center"}}>
            <Avatar src={logo} sx={{ width: 33, height: 33, marginRight: 1 }} />
            PAZHAMUDHIR NILAYAM
          </Navbar.Brand>
         <Nav fill  className='ms-auto'>
          <NavLink href="/home" style={{color:'white'}}>Dashboard</NavLink>
          <NavLink href="/product" style={{color:'white'}}>Product Upload</NavLink>
          <NavLink href="/rate" style={{color:'white'}}>Rate Set</NavLink>
          <NavLink href="/item" style={{color:'white'}}>Item Status</NavLink>
          <NavLink href="/reports" style={{color:'white'}}>Reports</NavLink>
         </Nav> 
          <Nav>
            <Nav.Link style={{color:'white'}} onClick={loggedOut}><LogoutIcon/></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
