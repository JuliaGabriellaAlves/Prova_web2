import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard.jsx'; 
import './Gallery.css'; 

const petsData = [
  { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
  { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
  { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
  { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
  { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
  { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
  { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
  { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
  { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
  { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
  { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
  { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
  { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
  { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
  { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
];

const Gallery = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        console.log("Página da galeria carregada"); 

        setPets(petsData);


        return () => {
            console.log("Saindo da galeria de pets");
        };
    }, []); 

    return (
        <section className="gallery-section container">
            <h2>Nossos Pets Disponíveis</h2>
            <p className="total-pets">Total de pets disponíveis: {pets.length}</p>
            <div className="pet-grid">
                {pets.length === 0 ? (
                    <p>Nenhum pet encontrado no momento.</p>
                ) : (
                    pets.map(pet => (
                        <PetCard key={pet.id} pet={pet} />
                    ))
                )}
            </div>
        </section>
    );
};

export default Gallery;