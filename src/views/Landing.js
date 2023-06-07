import React from 'react'
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'

const Landing = () => {
    document.title = "Luiggi Tenorio | Software Engineer"

    const handleClickScroll = (element_id) => {
        const element = document.getElementById(element_id);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar expand="lg">
                <Container className='my-4'>
                    <Navbar.Brand><strong className='fw-bolder fs-1'>lbit.dev</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Nav.Link className='fs-5' onClick={() => handleClickScroll("about-me")}>about me</Nav.Link>
                            {/* <Nav.Link>projects</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className='my-5'>
                <Container className='p-2'>
                    <Row className='mb-4'>
                        <Col className='col-12 col-lg-6 align-self-center'>
                            <div className='fw-bolder fs-2 text-center mb-3'>
                                A Software Engineer and Data Enthusiast
                            </div>
                            <div className='fs-3 text-center'>
                                Design and develop applications first, then I exist
                            </div>
                        </Col>
                        <Col className='col-12 col-lg-6 text-center'>
                            <img src={process.env.PUBLIC_URL + '/logo512.png'} style={{ height: "300px" }}></img>
                        </Col>
                    </Row>
                </Container>
            </div>




            <div id="about-me" style={{ backgroundColor: "var(--color-primary)" }}>
                <Container className='p-5'>
                    <Row className='justify-content-center'>

                        <Col className='col-12 col-lg-8 my-4'>
                            <div className='fw-bolder fs-2 text-center mb-4 text-white'>
                                Hi! I'm Luiggi. Nice to meet you.
                            </div>
                            <div className='fs-5 text-center text-white'>
                                Professional with more than 2 years of experience in Software Engineering and 1 year in Data Engineering. Master's Student in Computer Engineering and Full-Stack Developer at the Biocomputing Lab of the University of Padua.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container className='my-5'>
                    <Row className='justify-content-center'>
                        <Col className='px-0'>
                            <div className='p-4 border rounded-start'>
                                <div className='fw-bolder fs-4 text-center mb-3'>
                                    Full-Stack Developer
                                </div>
                                {/* <div className='fs-5 text-center'>
                                    Some Languages
                                </div> */}
                            </div>
                        </Col>
                        <Col className='px-0'>
                            <div className='p-4 border border-start-0 rounded-end'>
                                <div className='fw-bolder fs-4 text-center mb-3'>
                                    Data Engineer
                                </div>
                                {/* <div className='fs-5 text-center'>
                                    Some Languages
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <div>
                <Container className='mb-5'>
                    <Row className='justify-content-center'>
                        <Col>
                            <Card className='p-4'>
                                <div className='fw-bolder fs-4 text-center mb-3'>
                                    Data Engineer
                                </div>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            
            {/* <div style={{ backgroundColor: "var(--color-secondary)", height: 400 }}>

                </div> */}
        </div>
    )
}

export default Landing;