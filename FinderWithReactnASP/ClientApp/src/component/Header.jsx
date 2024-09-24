const Header = () => {
    return(
        <header className="App-header">
            <nav className="navbar">
            <a href="/"><div className="navbar-brand">FINDER</div></a>
            <div className="navbar-search">
                <input type="text" placeholder="Masukkan nama lokasi/area/alamat" />
                <button>Cari</button>
            </div>
            <div className="navbar-menu">
                <a href="/KostPage">Cari Apa?</a>
                <a href="/RegisterPage"><button>Masuk</button></a>
            </div>
            </nav>
        </header>
    )
    
}

export default Header