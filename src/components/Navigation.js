import React, {Component} from 'react'
import logo from '../assets/Logobanner.png'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

class Navigation extends Component{
    render(){

        return(
            <Navbar bg="dark" variant="dark" fixed='top'>

                <Nav.Link disabled></Nav.Link>
                <Nav.Link disabled></Nav.Link>
                <Nav.Link disabled ></Nav.Link>

                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src= {logo}
                    width="70%"
                    height="70%"
                    className="d-inline-block align-top"
                />
                 </Navbar.Brand>

                <Nav className="ml-auto" >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#contact">Contact us</Nav.Link>
                    <Nav.Link href="#login">Sign in</Nav.Link>
                    <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSdsE7hf0DQjVywRMr-MGG6HaBkzZe6CasQJOPE9ci1_W6bQ6A/viewform" >Sign up</Nav.Link>
                    <Nav.Link disabled></Nav.Link>
                    <Nav.Link disabled></Nav.Link>
                    <Nav.Link disabled ></Nav.Link>
                    <Nav.Link disabled></Nav.Link>
                </Nav>

            </Navbar>
        )
    }
}

export default Navigation;