import React from 'react';
import images from "./loadImages.js"

function Card({ idx, card }) {
    return (
        <div id='cardItem'>
            <img src={images[idx]} alt="" />
            <a href={card.url} target="_blank" >
                {card.name}
            </a>

        </div>
    );
}

export default Card;
