import "./pages.css";

const Halaman2 = ({ dongengHalaman2 }) => {
    return ( 
        <div className="cerita-detail">
            <p className="isi-dongeng hal2">{ dongengHalaman2 }</p>
            <div className="gambar hal2"></div>
        </div>
     );
}
 
export default Halaman2