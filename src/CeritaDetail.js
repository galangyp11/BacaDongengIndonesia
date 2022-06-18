import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CeritaDetail = () => {
    const [dongeng, setDongengById] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getDongengById();
    }, []);
    
    const getDongengById = async () => {
        const response = await axios.get(`http://localhost:3011/${id}`);
        setDongengById(response.data);
    }
    return ( 
        <div className="cerita-detail">
            {dongeng.map((dongeng) => (
                <article>
                <h2 className="judulCerita">{ dongeng.judul_dongeng }</h2>
                <img src={require('./img/kertas.png')} className="kertas" />
                <p className="isiCerita">{ dongeng.halaman1 }</p>
            </article>
            ))}
        </div>
     );
}
 
export default CeritaDetail;

