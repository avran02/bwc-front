import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="logo">
                        <img src={this.props.logo} alt="Black & White Coffee" />
                    </div>
                    <ul className="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className="login"><Link to="/login">Войти</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header