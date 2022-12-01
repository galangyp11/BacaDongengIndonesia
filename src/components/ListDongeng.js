import { useState, useEffect} from "react";
import axios from "axios";
import Home from "./Home";

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
            <Home dongengs={dongengs}/>         
        </div>
     );
 }
  
 export default ListDongeng;