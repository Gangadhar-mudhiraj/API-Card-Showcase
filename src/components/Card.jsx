import React from 'react';

function Card({ card }) {
    return (
        <div id='cardItem'>
            <h2>{card.name}</h2>
            {card.url ? (
                <a href={card.url} target="_blank" >
                    {card.url}
                </a>
            ) : (
                <p>No link available</p>
            )}
        </div>
    );
}

export default Card;
