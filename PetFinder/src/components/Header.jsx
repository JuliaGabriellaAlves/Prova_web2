
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="s">
                <h1>PetFinder</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Galeria de Pets</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;