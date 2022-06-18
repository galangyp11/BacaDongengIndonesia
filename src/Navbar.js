import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Baca Dongeng Indonesia</h1>
            <div className="navbar1">
                <Link to="/" >Beranda</Link>
                <Link to="/about">Tentang</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
