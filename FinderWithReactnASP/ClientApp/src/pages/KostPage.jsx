// src/pages/KostListPage.jsx
import React from 'react';
import KostCard from '../component/Kost/KostList';

const KostListPage = () => {
    const kosts = [
        {
            image: 'image1.jpg',
            title: 'Kost 1',
            location: 'Location 1',
            features: 'Features 1',
            price: 'Rp3.700.000/bulan',
            tags: ['Kos Andalan', 'Campur']
        },
        {
            image: 'image2.jpg',
            title: 'Kost 2',
            location: 'Location 2',
            features: 'Features 2',
            price: 'Rp2.500.000/bulan',
            tags: ['Kos Andalan', 'Putri']
        }
        // Add more items as needed
    ];

    return (
        <div>
            <h3>Kost Dekat Binus</h3>
            {kosts.map(kost => (
                <KostCard
                    key={kost.title}
                    image={kost.image}
                    title={kost.title}
                    location={kost.location}
                    features={kost.features}
                    price={kost.price}
                    tags={kost.tags}
                />
            ))}
        </div>
    );
}

export default KostListPage;
