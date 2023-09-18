import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav class="navbar top-navbar">
            <div class="container-fluid justify-content-start">
                <img class="nav-brand logo" src="./images/logo2.png" alt="" />
                <div class="navbar-nav">
                    <div class="nav-item">
                        <a class="icons" href="/">Home</a>
                        <a class="icons" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/catarina-e-mendes"><i class="fab fa-linkedin"></i></a>
                        <a class="icons" target="_blank" rel="noreferrer" href="https://www.youtube.com/c/CatarinaEsposito"><i class="fab fa-youtube"></i></a>
                        <a class="icons" target="_blank" rel="noreferrer" href="/contactme"></a>
                        <Link className="icons" to="/contactme" target="_blank" rel="noreferrer">
                            <i class="fas fa-envelope"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}