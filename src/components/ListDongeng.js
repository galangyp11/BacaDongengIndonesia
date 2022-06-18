import { useState, useEffect} from "react";
import axios from "axios";
import Home from "../Home";

const ListDongeng = ( ) => {
    const [dongengs, setDogeng] = useState([]);

    useEffect(() => {
        getDongeng();

    }, [] );

    const getDongeng = async () => {
        const response = await axios.get('http://localhost:3011/');
        setDogeng(response.data);
    } 

    return ( 
        <div>
            { dongengs && <Home dongengs={dongengs} title="Daftar Dongeng!"/>}
            {/* <table>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Judul Dongeng</th>
                        <th>Sinopsis</th>
                    </tr>
                </thead>
                <tbody>
                    { dongengs.map((dongeng, index) => (
                        <tr key={ dongeng.id }>
                            <td>{ index + 1 }</td>
                            <td>{ dongeng.judul_dongeng }</td>
                            <td>{ dongeng.sinopsis_dongeng }</td>
                        </tr>
                    )) }
                </tbody>
            </table> */}
        </div>
     );
 }
  
 export default ListDongeng;