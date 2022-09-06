import "./pages.css";

const Halaman10 = ({ dongengHalaman10 }) => {
    return ( 
        <div className="cerita-detail">
            <p className="isi-dongeng hal10">{ dongengHalaman10 }</p>
            <div className="gambar hal10"></div>
        </div>
     );
}
 
export default Halaman10