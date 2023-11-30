import React from "react";
import Header from "./Header";
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header logo={logo}/>
                <section id="home" class="section">
                    <div class="content">
                        <h1>Welcome to Black & White Coffee</h1>
                        <p>Experience the perfect blend of flavors.</p>
                        <Link to="/">Home</Link>
                    </div>
                </section>

                <section id="menu" class="section">
                    <div class="content">
                        <h2>Our Menu</h2>
                        <p>Discover our wide selection of delicious coffees and pastries.</p>
                        <div class="menu-items">
                            <div class="menu-item">
                                <img src="coffee1.jpg" alt="Coffee 1" />
                                <h3>Espresso</h3>
                                <p>A strong and concentrated coffee served in a small cup.</p>
                            </div>
                            <div class="menu-item">
                                <img src="coffee2.jpg" alt="Coffee 2" />
                                <h3>Cappuccino</h3>
                                <p>A classic Italian coffee with espresso, steamed milk, and frothed milk.</p>
                            </div>
                            <div class="menu-item">
                                <img src="coffee3.jpg" alt="Coffee 3" />
                                <h3>Latte</h3>
                                <p>A smooth and creamy coffee with espresso and steamed milk.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" class="section">
                    <div class="content">
                        <h2>About Us</h2>
                        <p>Black & White Coffee is dedicated to providing the finest quality coffee and a cozy atmosphere for
                            coffee enthusiasts.</p>
                        <p>Our team of expert baristas is passionate about creating the perfect cup of coffee every time.</p>
                    </div>
                </section>

                <section id="contact" class="section">
                    <div class="content">
                        <h2>Contact Us</h2>
                        <p>Visit us at:</p>
                        <p>123 Coffee Street, City, Country</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@blackandwhitecoffee.com</p>
                    </div>
                </section>

                <footer>
                    <div class="content">
                        <p>&copy; 2023 Black & White Coffee. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home