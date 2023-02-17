import { useState, useEffect} from "react";
import axios from "axios";
import Sound from "react-sound";
import Home from "./Home";

import homeBS from "../sound/bs-beranda.mp3"

const ListDongeng = ( ) => {
    const [dongengs, setDongengs] = useState([]);

    useEffect(() => {
        getDongeng();
    }, [] );

    const getDongeng = async () => {
        const response = await axios.get('http://localhost:3011/');
        setDongengs(response.data);
    } 

    return ( 
        <div>
            <Sound
                url={homeBS}
                playStatus={Sound.status.PLAYING}
                playFromPosition={100}
                loop={true}
            />       
            <Home dongengs={dongengs}/>         
        </div>
     );
 }
  
 export default ListDongeng;