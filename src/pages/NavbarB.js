import { Link } from "react-router-dom";
import "./pages.css";

function NavbarB ({ handleNext, handleBack, isDisable, dongengJudul, nomorHal }) {
    return (
        <nav className="navbarb">
            <div className="navbarb1">
                <button className="bBack" onClick={handleBack} disabled={isDisable}></button>
                <button className="beranda"><Link to="/"></Link></button>
                <p className="judul-navbar">{dongengJudul}</p>
                <p className="halaman-navbar">Halaman {nomorHal}</p>
                <button className="bNext" onClick={handleNext}></button>
            </div>
        </nav>
      );
}
 
export default NavbarB;