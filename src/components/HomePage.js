import React, { Component } from 'react'
import { Row, Col, Container, Button, Nav } from 'react-bootstrap'
import Navigation from './Navigation'
import logo from '../assets/Logobanner.png'
import '../App.css';
import { EditorFormatLineSpacing } from 'material-ui/svg-icons';



class HomePage extends Component {

    render() {


        return (
            <Container-fluid>

                <Navigation />

                {/* <hr className = 'hr'/> */}

                <div className='topspace'></div>
                <div class='top'>
                    <Row>
                        <Col className="topText" >
                            <div>
                                <img
                                    alt=""
                                    src={logo}
                                    width="17.5%"
                                    height="17.5%"
                                    className="d-inline-block align-left"
                                    style={{ marginBottom: '25px' }}
                                />
                                <h1 className='h1' style={{ fontSize: '44pt' }}> SOCIAL COMMERCE </h1>
                                <h1 className='h1' style={{ color: "#FFEC00", fontSize: '44pt' }}>MADE EASY</h1>
                                <h6 style={{ color: '#FFFFFF', font: 'Ariel Narrow', fontSize: '15pt' }}> Unlock full potential for social merchants </h6>
                                <h6 style={{ color: '#FFFFFF', font: 'Ariel Narrow', fontSize: '15pt' }}> with automated online retail solutions </h6>
                                <Button
                                    type='button'
                                    style={{ letterSpacing: '1px', border: '2px', borderRadius: '40px', width: '150px', height: '40px', color: '#EB3390', fontFamily: 'Fredoka One', fontSize: '13pt', fontStyle: 'Bold', marginTop: '25px' }}
                                    variant='light'
                                    href='https://docs.google.com/forms/d/e/1FAIpQLSdsE7hf0DQjVywRMr-MGG6HaBkzZe6CasQJOPE9ci1_W6bQ6A/viewform'>
                                    SIGN UP
                                </Button>
                            </div>
                        </Col>

                        <Col>
                            <div class='topRight'>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col>
                        <div className='textAreaSmall'>
                            <div align='center'>
                                <h1 style={{ fontSize: '44pt', color: "#202020", fontFamily: 'Fredoka One', fontStyle: 'cursive' }}>We know what you need</h1>
                                <h6 style={{ fontSize: '15pt', color: '#8c8c8c', font: 'Arial' }}> Make your hard work pay off </h6>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                        <div className='textAreaBig1'></div>
                        <h4 align='center' style={{ fontSize: '11pt', color: '#202020', font: 'Arial' }}> Never miss selling </h4>
                        <h1 align='center' style={{ fontSize: '23pt', color: '#e81790', fontFamily: 'Fredoka One', fontStyle: 'cursive' }}> Opportunities </h1>
                        <h6 align='center' style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial' }}> 24/7 instant customer service </h6>
                    </Col>
                    <Col>
                        <div className='textAreaBig2'></div>
                        <h4 align='center' style={{ fontSize: '11pt', color: '#202020', font: 'Arial' }}> Automated </h4>
                        <h1 align='center' style={{ fontSize: '23pt', color: '#e81790', fontFamily: 'Fredoka One', fontStyle: 'cursive' }}> Sales process </h1>
                        <h6 align='center' className='h6' style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial' }}> Enable end-to-end sales </h6>
                        <h6 align='center' className='h6' style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial' }}> automatically and simultaneously </h6>
                    </Col>
                    <Col>
                        <div className='textAreaBig3'></div>
                        <h4 align='center' style={{ fontSize: '11pt', color: '#202020', font: 'Arial' }}> LIVE </h4>
                        <h1 align='center' style={{ fontSize: '23pt', color: '#e81790', fontFamily: 'Fredoka One', fontStyle: 'cursive' }}> Streaming </h1>
                        <h6 align='center' className='h6' style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial' }}> Professional quality within 15 minutes </h6>
                    </Col>
                    <Col></Col>
                </Row>

                <div style={{ marginBottom: '5%' }}></div>

                <hr />

                <div style={{ marginTop: '2%' }}></div>

                <Row>
                    <Col> <div class='middleLeft'></div></Col>
                    <Col>
                        <Row>
                            <div className='solutionRight'>
                                <h1 align='center' style={{ fontSize: '44pt', color: "#202020", fontFamily: 'Fredoka One', fontStyle: 'cursive' }}> Our Solutions </h1>
                                <h6 align='center' style={{ fontSize: '15pt', color: '#8c8c8c', font: 'Arial' }}> To ensure high quaity, we use the same
                                    technology that we </h6>
                                <h6 align='center' style={{ fontSize: '15pt', color: '#8c8c8c', font: 'Arial' }}>provide to enterprises.
                                </h6>
                            </div>
                        </Row>
                        <Row>
                            <div className='solutionRight1'>
                                <div className='solutionMargin'>
                                    <h1 style={{ fontSize: '23pt', color: '#202020', font: 'Arial' }}>Automated</h1>
                                    <h6 style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial' }}>
                                        
                                        <ul>
                                        <li> AI chat customer service </li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='solutionRight2'>
                                <div className='solutionMargin2'>
                                    <h1 style={{ fontSize: '23pt', color: '#202020', font: 'Arial' }}>Conversational sales automation</h1>
                                    <h6 style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial', lineHeight: '25px' }}>
                                        <ul>
                                        <li> From product selection to delivery detail.
                                            Fully automated. </li>
                                        <li> Unique cutomer experience for both new and returning
                                            customers </li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='solutionRight3'>
                                <div className='solutionMargin2'>
                                    <h1 style={{ fontSize: '23pt', color: '#202020', font: 'Arial' }}>Professional LIVE session</h1>
                                    <h6 style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial', lineHeight: '25px' }}>
                                        <ul>
                                        <li> Beautiful display </li>
                                        <li> Built-in sound effects </li>
                                        <li> Embedded sales hack tools </li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </Row>
                        <div className='solutionMargin2' style={{ marginTop: '-6%', marginBottom: '4%', marginLeft: '13%' }}>
                            <Button variant='light'
                                style={{ marginTop: '7%', letterSpacing: '1px', border: '2px', borderRadius: '40px', width: '170px', height: '44px', backgroundColor: '#EB3390', color: '#FFFFFF', fontFamily: 'Fredoka One', fontSize: '10pt' }}>
                                FREE TO USE
                        </Button>
                        </div>
                    </Col>
                </Row>


                <div className='pinkBody' style={{ marginTop: '1.5%' }}>
                    <Row>
                        <Col>
                            {/* <div className='textAreaSmall'> */}
                            <div align='center' className='startBody'>
                                <h1 style={{ fontSize: '23pt', color: '#FFFFFF', fontFamily: 'Fredoka One', fontStyle: 'cursive' }}> GET STARTED IN 15 MINS </h1>
                                <h6 style={{ fontSize: '14pt', color: '#FFFFFF', font: 'Ariel' }}> with 3 simple steps </h6>
                            </div>
                            {/* </div> */}
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={1}></Col>
                        <Col>
                            <div className='step1'>
                                <div className='stepsMargin'>
                                    <h5 style={{ fontSize: '14pt', color: '#FFFFFF', font: 'Ariel' }}> Create profile </h5>
                                    <h6 style={{ fontSize: '9pt', color: '#FFFFFF', font: 'Ariel Narrow' }}> Click sign up </h6>
                                </div>
                            </div>
                        </Col>
                        <Col><div className='step2'>
                            <div className='stepsMargin2'>
                                <h5 style={{ fontSize: '14pt', color: '#FFFFFF', font: 'Ariel' }}> Train your bot / </h5>
                                <h5 style={{ fontSize: '14pt', color: '#FFFFFF', font: 'Ariel' }}> Set up LIVE session </h5>
                                <h6 style={{ fontSize: '9pt', color: '#FFFFFF', font: 'Ariel Narrow' }}> Tell us more about your products and </h6>
                                <h6 style={{ fontSize: '9pt', color: '#FFFFFF', font: 'Ariel Narrow' }}> create your first LIVE session.</h6>
                            </div>
                        </div>
                        </Col>
                        <Col><div className='step3'>
                            <div className='stepsMargin3'>
                                <h5 style={{ fontSize: '14pt', color: '#FFFFFF', font: 'Ariel' }}> Let's LIVE!! </h5>
                                <h6 style={{ fontSize: '9pt', color: '#FFFFFF', font: 'Ariel Narrow' }}> Showtime begins. LIVE</h6>
                                <h6 style={{ fontSize: '9pt', color: '#FFFFFF', font: 'Ariel Narrow' }}> and wait for the sales to flow in </h6>
                            </div>
                        </div>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </div>

                <div className='freetouse'>
                    <Row>
                        <Col>
                            <div className='freeText'>
                                <h1 className='h1' style={{ fontSize: '34pt', color: '#202020' }} > Free to use </h1>
                                <h6 style={{ fontSize: '11pt', color: '#8c8c8c', font: 'Arial', lineHeight: '5px' }}> 15 minute set up </h6>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ marginLeft: '-8%', marginTop: '-2%' }}>
                                <Button variant='light' className='freeButton' style={{lineHeight: '40px', height: '55px', letterSpacing: '1px', border: '2px', borderRadius: '40px', width: '160px', backgroundColor: '#EB3390', color: '#FFFFFF', fontFamily: 'Fredoka One', fontSize: '10pt' }} href='https://docs.google.com/forms/d/e/1FAIpQLSdsE7hf0DQjVywRMr-MGG6HaBkzZe6CasQJOPE9ci1_W6bQ6A/viewform'> GET STARTED </Button>
                                <Button className='freeButton2' style={{ borderColor: '#EB3390', borderRadius: '40px', height: '55px', letterSpacing: '1px', width: '160px', color: '#EB3390', fontFamily: 'Fredoka One', fontSize: '10pt' }} variant='light'>SUBSCRIBE</Button>
                            </div>
                        </Col>
                    </Row>
                </div>

                <hr className='hr2' />
                <div className='bottomNavbar'>
                    <Row>
                        <Col>
                        </Col>
                        <Col className="ml-auto" align='right'>
                            <Row>
                                <Col >
                                    <Nav >
                                        <Nav.Link disabled></Nav.Link>
                                        <Nav.Link disabled></Nav.Link>
                                        <Nav.Link disabled ></Nav.Link>
                                        <Nav.Link disabled></Nav.Link>
                                        <Nav.Link disabled></Nav.Link>
                                        <Nav.Link disabled></Nav.Link>
                                        <Nav.Link disabled ></Nav.Link>
                                        <Nav.Link disabled></Nav.Link>
                                        <Nav.Link style={{ color: "#202020" }}> Home </Nav.Link>
                                        <Nav.Link style={{ color: "#202020" }}> Contact us </Nav.Link>
                                        <Nav.Link style={{ color: "#202020" }}> About us </Nav.Link>
                                    </Nav>
                                </Col>

                            </Row>

                        </Col>
                    </Row>
                </div>

                <div className='copyright'>
                    <h6 align='center' className='copyrighttext'> &copy; 2019 Aris Company. All rights reserved </h6>
                </div>


            </Container-fluid>
        )
    }
}

export default HomePage;