import React from "react";

import Header from './Header';
import Footer from './Footer';


const ContactMe = () => {
    return (
        <div class="container">
            <Header />
            <main>
                <div class="form">
                    <form action="mailto:catarina.em12@gmail.com" method="post" enctype="text/plain" >
                        <input type="text" name="yourName" value="" placeholder="Your Name" />
                        <br />
                        <input type="email" name="yourEmail" value="" placeholder="Your email" />
                        <br />
                        <textarea name="yourMessage" placeholder="Your message"></textarea>
                        <br />
                        <input type="submit" name="" />
                    </form>
                </div>
            </main >
            <Footer />
        </div >
    );
};

export default ContactMe;