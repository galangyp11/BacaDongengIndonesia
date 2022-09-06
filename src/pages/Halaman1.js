import "./pages.css";

const Halaman1 = ({ dongengHalaman1 }) => {
    return ( 
        <div className="cerita-detail">
            <p className="isi-dongeng hal1">{ dongengHalaman1 }</p>
            <div className="gambar hal1"></div>
        </div>
     );
}
 
export default Halaman1;