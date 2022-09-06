// import Typical from 'react-typical';
import "./pages.css";

const Opening = ( {dongengJudul} ) => {
    return ( 
        <div className="dongeng-detail">
            {/* <Typical
                steps={['kimak', 1000,]}
                loop={Infinity}
                wrapper='p'
            /> */}
            <h2 className="judul-dongeng-opening">{ dongengJudul }</h2>
        </div>
     );
}
 
export default Opening;