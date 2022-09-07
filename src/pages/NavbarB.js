import { Link } from "react-router-dom";
import "./pages.css";

function NavbarB ({ handleNext, handleBack, isDisableBack, isDisableNext, dongengJudul, nomorHal }) {

    // document.addEventListener("keydown", function(event) {
    //     event.preventDefault();
    //     if(event.keyCode === 39) {
    //         document.getElementById("bNext").click();
    //     }
    // })
    return (
        <nav className="navbarb">
            <div className="navbarb1">
                <button className="bBack" onClick={handleBack} disabled={isDisableBack}></button>
                <button className="beranda"><Link to="/"></Link></button>
                <p className="judul-navbar">{dongengJudul}</p>
                <p className="halaman-navbar">Halaman {nomorHal}</p>
                <button className="bNext" onClick={handleNext} disabled={isDisableNext}></button>
                {console.log("tombol back")}
                {console.log(isDisableBack)}
                {console.log("tombol next")}
                {console.log(isDisableNext)}
            </div>
        </nav>
      );
}
 
export default NavbarB;