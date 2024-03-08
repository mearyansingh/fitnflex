import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import FitinFlex from '../Assets/Images/fitinflex.png'

function About() {
   return (
      <>
         <Container className="flex-grow-1 py-5">
            <h2 className="">Fitinflex: Your One-Stop Shop for Fitness Inspiration</h2>
            <p className="text-secondary">Welcome to Fitinflex, your ultimate destination for fitness inspiration and exercise exploration. Whether you're a fitness enthusiast or a beginner on a wellness journey, Fitinflex is designed to empower and guide you through your fitness routine.
            </p>
            <section className="py-3 py-md-5">
               <div className="container">
                  <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                     <Col lg={6} xl={5} >
                        <Image fluid className="rounded" loading="lazy"
                           src={FitinFlex}
                           alt="About" />
                     </Col>
                     <Col lg={6} xl={7}>
                        <Row className="justify-content-xl-center">
                           <Col xl={11}>
                              <h2 className="mb-3">Why Fitinflex?</h2>
                              <p className="lead fs-4 text-secondary mb-5">At Fitinflex, we are committed to providing a comprehensive platform where users can discover, learn, and be inspired to lead a healthier lifestyle. Our mission is to make fitness accessible, enjoyable, and educational for everyone, regardless of their fitness level.</p>
                              <Row className="gy-4 gy-md-0">
                                 <Col md={6}>
                                    <div className="d-flex">
                                       <div className="me-4" style={{ color: "#000" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                             <path
                                                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                          </svg>
                                       </div>
                                       <div>
                                          <h2 className="h4 mb-3">Detailed exercise information</h2>
                                          <p className="text-secondary mb-0">Dive deep into each exercise with in-depth descriptions, proper form instructions, and related videos.</p>
                                       </div>
                                    </div>
                                 </Col>
                                 <Col md={6}>
                                    <div className="d-flex">
                                       <div className="me-4" style={{ color: "#000" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                             <path
                                                d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                          </svg>
                                       </div>
                                       <div>
                                          <h2 className="h4 mb-3">Intuitive user interface</h2>
                                          <p className="text-secondary mb-0">Enjoy a clean and intuitive user interface designed for effortless navigation. Fitinflex ensures a seamless experience across all devices, providing you with a user-friendly platform to support your fitness goals.</p>
                                       </div>
                                    </div>
                                 </Col>
                              </Row>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </div>
            </section>
         </Container>
      </>
   )
}

export default About


