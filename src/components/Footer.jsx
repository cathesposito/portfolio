import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <a class="contact" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/catarina-e-mendes"><i class="fab fa-linkedin"></i></a>
                        <a class="contact" target="_blank" rel="noreferrer" href="https://www.youtube.com/c/CatarinaEsposito"><i class="fab fa-youtube"></i></a>
                        <a class="contact" href="contactme.html"><i class="fas fa-envelope"></i></a>
                        <p>Get In Touch</p>
                    </div>
                    <div class="col">
                        <p style={{ marginBottom: 0 }}>Copyright © Catarina Mendes {currentYear}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
