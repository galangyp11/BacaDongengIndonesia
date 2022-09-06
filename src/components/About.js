import {Link} from "react-router-dom";
import "./Tentang.css";

const About = () => {
    return (
        <div className="about">
            <h2 className="tentangH2">Tentang</h2>
            <p className="tentangP">Baca Dongeng Indonesia adalah sebuah website untuk membaca dongeng-dongeng indonesia</p>
            <table className="pembuat">
                <tr>
                    <td>Pembuat</td>
                    <td>: Galang yudi putra</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>: 3IA20</td>
                </tr>
                <tr>
                    <td>NPM</td>
                    <td>: 52419545</td>
                </tr>
            </table>
            <p className="tentangP">UNIVERSITAS GUNADARMA</p>
            <div className="footer"><Link to="/" style={{  textDecoration: "none", color: "#66ccff"}}>Beranda</Link></div>
        </div>
        );
}
 
export default About;