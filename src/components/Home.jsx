import React from "react";

import Header from './Header';
import Footer from './Footer';


const Home = () => {
    return (
        <div class="container">
            <Header />
            <main>
                <div class="top-container">
                    <div class="background">
                        <img class="img-fluid" src="images/top.png" alt="" />
                        <div class="col-5 headings">
                            <h1>Catarina Mendes</h1>
                            <p class="title">Web Developer</p>
                        </div>
                    </div>
                </div>

                <div class="middle-container col-10">
                    <div class="row row-col-2">

                        <div class="col-md-2 sidebarBackground">
                            <div class="nav nav-sidebar flex-column">
                                <ul>
                                    <li><a target="_blank" rel="noreferrer" href="https://cathesposito.github.io/cv/">CV Site</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://cathesposito.github.io/yogawithcatarina/">Yoga Site</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://cathesposito.github.io/muaythaicomcatarina/">Muay Thai Site</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-lg-6">
                                    <a target="_blank" rel="noreferrer" href="https://cathesposito.github.io/cv/"><img class="img-fluid" src="images/3.png" alt="" /></a>
                                    <h2>Curriculum Vitae Site</h2>
                                    <p class="lead">I used HTML, CSS and Bootstrap to design my page. And I also used JavaScript to make the site more interesting. I made some click function to fade in or fade out some informations.
                                        I used move over function to increase the sizer of some icons.</p>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <a target="_blank" rel="noreferrer" href="https://cathesposito.github.io/yogawithcatarina/"><img class="img-fluid" src="images/2.png" alt="" /></a>
                                    <h2>Yoga site</h2>
                                    <p class="lead">I used my Yoga hobby as an inspiration to do second site. I did an cover page and a home page. In the home page I tried to make something similar to the apple watch.
                                        Inside a circle if you mouse over the mouse it will make the picture larger and if you click, it will direct you to anothr page. I also used HTML, CSS and Bootstrap to design it.</p>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <a target="_blank" rel="noreferrer" href="https://cathesposito.github.io/muaythaicomcatarina/"><img class="img-fluid" src="images/4.png" alt="" /></a>
                                    <h2>Muay Thai site</h2>
                                    <p class="lead">Another hobby that I used as an inspiration. I used JavaScript to make the scroll function to change pics as you scroll. I also used HTML, CSS and Bootstrap to design.</p>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <a target="_blank" rel="noreferrer" href="https://github.com/cathesposito/blogcanada"><img class="img-fluid" src="images/6.png" alt="" /></a>
                                    <h2>Personal Blog</h2>
                                    <p class="lead">First version with front-end tools, such as JavaScript, EJS, Node, Express, Body-Parser and CSS. Not deployed yet.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="skills col-10">
                    <div class="row justify-content-center align-self-center">
                        <div class="col-auto">
                            <p>Canva</p>
                        </div>
                        <div class="col-auto">
                            <p>Atom</p>
                        </div>
                        <div class="col-auto">
                            <p><i class="fab fa-html5"></i> HTML5</p>
                        </div>
                        <div class="col-auto">
                            <p><i class="fab fa-css3-alt"></i> CSS</p>
                        </div>
                        <div class="col-auto">
                            <p><i class="fab fa-bootstrap"></i> Bootstrap</p>
                        </div>
                        <div class="col-auto">
                            <p><i class="fab fa-js-square"></i> JavaScript</p>
                        </div>
                        <div class="col-auto">
                            <p>jQuery</p>
                        </div>
                        <div class="col-auto">
                            <p>Hyper Terminal</p>
                        </div>
                        <div class="col-auto">
                            <p>Node.js</p>
                        </div>
                        <div class="col-auto">
                            <p>Express.js</p>
                        </div>
                        <div class="col-auto">
                            <p>NPM</p>
                        </div>
                        <div class="col-auto">
                            <p>Mailchimp</p>
                        </div>
                        <div class="col-auto">
                            <p>Heroku</p>
                        </div>
                        <div class="col-auto">
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;