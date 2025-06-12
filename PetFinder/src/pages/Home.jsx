import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <section className="home-section container">
            <h2>Bem-vindo ao PetFinder!</h2>
            <p>Encontre seu novo amigo de quatro patas. Explore nossa galeria de pets disponíveis para adoção.</p>
            <div>
                <Link to="/gallery" className="button-primary">Ver Galeria de Pets</Link>
            </div>
        </section>
    );
};

export default Home;