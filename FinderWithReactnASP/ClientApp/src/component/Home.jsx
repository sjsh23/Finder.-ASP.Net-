const Home = () => {
return (
    <div className="App">
    <main>
        <section className="hero">
        <h1>FIN<br></br>DER</h1>
        <h2>Temukan kos yang sesuai untuk dirimu dengan FINDER </h2>
        <button className="hero-button">Temukan Kos</button>
        </section>
        <section className="recommended-areas">
        <h2>Rekomendasi Area Kos</h2>
        <div className="area-cards">
            {[
            'Jakarta', 
            'Bandung', 
            'Tangerang', 
            'Semarang', 
            'Malang', 
            'Surabaya', 
            'Bali', 
            'Yogyakarta'
            ].map((area) => (
            <div key={area} className="area-card">
                <img src={`${process.env.PUBLIC_URL}/Pic/${area.toLowerCase()}.jpg`} alt={area} />
                <p>{area}</p>
            </div>
            ))}
        </div>
        </section>
    </main>
    </div>
);
} 

export default Home