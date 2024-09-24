import React from 'react';
import './KosDetail.css'

const KosDetails = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto', border: '1px solid #ddd', borderRadius: '8px' }}>
            <img 
                src="image-url.jpg" 
                alt="Kos Andalas" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            />
            <h2>Kos Andalas / Campur</h2>
            <p>Kost Zelda Apartment Alam Sutera Serpong Utara Tangerang Selatan Kecamatan Serpong Utara</p>
            <p><strong>Temukan lokasi ini di :</strong><br />
                Jln. Alam Utama 10 No. 3, Pakulonan, Serpong Utara, South Tangerang City, Banten 15325.
            </p>
            <h3>Rp3.700.000/bulan</h3>
            <button style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Hubungi Pemilik Kos
            </button>
            <h3>Fasilitas</h3>
            <ul>
                <li>K. Mandi Dalam</li>
                <li>WIFI</li>
                <li>AC</li>
                <li>Kloset Duduk</li>
                <li>Kasur</li>
                <li>Akses 24 Jam</li>
            </ul>
            <h3>Ulasan</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                    <p><strong>Adlan Arya Pradana</strong></p>
                    <p>"Bersih dan Bagus, penjaga kos dan ibu kos baik dan kooperatif"</p>
                    <p>Rating: ★★★★★</p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <p><strong>Anonym</strong></p>
                    <p>"Kosan Bersih, dekat tempat Area Makanan."</p>
                    <p>Rating: ★★★★★</p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <p><strong>Agil Priyanto</strong></p>
                    <p>"Kosannya bersih dan nyaman, bagus sekali."</p>
                    <p>Rating: ★★★★★</p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <p><strong>Anonym</strong></p>
                    <p>"Kos bersih dan pemilik ramah."</p>
                    <p>Rating: ★★★★☆</p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <p><strong>Hans Damantra</strong></p>
                    <p>"Daerah aman dan nyaman, cari makan gampang yg susah nitip mcu makan aja sering blm d/byr.☺"</p>
                    <p>Rating: ★★★★☆</p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <p><strong>Anonym</strong></p>
                    <p>"Bagus tapi wifi nya lemot kalo malem"</p>
                    <p>Rating: ★★★★☆</p>
                </li>
            </ul>
        </div>
    );
}

export default KosDetails;
