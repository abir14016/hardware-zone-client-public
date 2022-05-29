import React from 'react';
import me from '../../images/me/abir.jpg';
import c from '../../images/skills/c.png';
import cPlus from '../../images/skills/c++.png';
import javaScript from '../../images/skills/javascript.png';
import react from '../../images/skills/react.png';
import python from '../../images/skills/python.png';
import bootstrap from '../../images/skills/bootstrap.png';
import firebase from '../../images/skills/firebase.png';
import html from '../../images/skills/html.png';
import css from '../../images/skills/css.png';
import tailwind from '../../images/skills/tailwind.png';
import gymHero from '../../images/projects/gym-hero.png';
import petConsultant from '../../images/projects/pet-consultant.png';
import royalEnfield from '../../images/projects/royal-enfield.png';
import './Myportfolio.css';
import { Button, Card } from 'react-bootstrap';

const MyPortfolio = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-warning mb-5'>About Me</h1>
            <div className='text-center'>
                <img className='abir-image' src={me} alt="" />
                <h2>Abir Hasan</h2>
                <p className='fw-bloder text-muted'>Full Stack Web Developer</p>
                <p><small className='text-muted'>email: abir14016@gmail.com</small></p>
                <p><small className='text-muted'>CSE,Islamic University</small></p>
            </div>
            <hr />
            <div className='container'>
                <p>About Me: This is Abir Hasan, A full Stack Web developer. Currently i'm graguating in Conputer Science And Enginnering of Islamic University. Iam very musch interested in computer programming and web development. I also familiar with robotics and machine learning. Everyday i am learning and gathering knoledge in the sector of Computer Science. I am skilled in some programming languages and some cripting languages that is given at the bellow part of this page</p>
            </div>
            <div className='text-center skills'>
                <h3>My Skills:</h3>
                <div>
                    <img src={c} alt="" />
                    <img src={cPlus} alt="" />
                    <img src={javaScript} alt="" />
                    <img src={python} alt="" />
                    <img src={bootstrap} alt="" />
                    <img src={tailwind} alt="" />
                </div>
                <div>
                    <img src={firebase} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={react} alt="" />
                </div>
            </div>
            <hr />
            <div className='text-center mt-5'>
                <h3>My Projects: </h3>
                <div className='container project-container'>
                    <div className='d-flex justify-content-center'>
                        <Card className='shadow-lg project-card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={gymHero} />
                            <Card.Body>
                                <Card.Title>Gym Hero</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="https://frolicking-puppy-e1821b.netlify.app/">
                                    <Button variant="dark">View Project</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Card className='shadow-lg project-card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={petConsultant} />
                            <Card.Body>
                                <Card.Title>Pet Consultant</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="https://remarkable-cassata-77c698.netlify.app/">
                                    <Button variant="dark">View Project</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Card className='shadow-lg project-card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={royalEnfield} />
                            <Card.Body>
                                <Card.Title>Royal Enfield</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="https://quiet-blini-a6fda2.netlify.app/">
                                    <Button variant="dark">View Project</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;