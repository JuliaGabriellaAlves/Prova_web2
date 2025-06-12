import React from 'react';
import './PetCard.css'; 

const PetCard = ({ pet }) => {

    return (
        <div className="pet-card">
            <div className="pet-info">
                <h3>{pet.nome}</h3>
                <p>Espécie: {pet.especie}</p>
                <p>Idade: {pet.idade} ano(s)</p>
            </div>
        </div>
    );
};

export default PetCard;