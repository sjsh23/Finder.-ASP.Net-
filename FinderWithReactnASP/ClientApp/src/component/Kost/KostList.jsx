import React from 'react';
import './KostList.css';

const KostCard = ({ image, title, location, features, price, tags }) => {
    return (
        <div className="kostCard">
            <img src={image} alt={title} />
            <div className="details">
                <div className="tags">
                    {tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <h2 className="title">{title}</h2>
                <p className="location">{location}</p>
                <p className="features">{features}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    );
}

export default KostCard;
