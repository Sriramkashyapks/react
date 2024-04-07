import React from 'react';

const Card = (props) => {
    return (
        <div className='container-card'>
            <div className='card-left'>
                <div className='picture-holder'>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className='card-button'>Rating: {props.rating}</div>
            </div>

            <div className='card-right'>
                <div className='card-title'>Title: {props.title}</div>
                <div className='card-description'>Description: {props.description}</div>
            </div>
        </div>
    );
};

export default Card;