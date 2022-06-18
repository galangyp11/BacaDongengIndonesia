import { Link } from "react-router-dom";

const NavbarB = () => {
    return (
        <nav className="navbarb">
            <div className="navbarb1">
                <Link to="/" >Beranda</Link>
                <Link to="#" >Sebelumnya</Link>
                <Link to="#" >
                    <button className="btn">Selanjutnya</button>
                </Link>
            </div>
        </nav>
      );
}
 
export default NavbarB;