import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Opening from "../pages/Opening";
import Halaman1 from "../pages/Halaman1";
import Halaman2 from "../pages/Halaman2";
import Halaman3 from "../pages/Halaman3";
import Halaman4 from "../pages/Halaman4";
import Halaman5 from "../pages/Halaman5";
import Halaman6 from "../pages/Halaman6";
import Halaman7 from "../pages/Halaman7";
import Halaman8 from "../pages/Halaman8";
import Halaman9 from "../pages/Halaman9";
import Halaman10 from "../pages/Halaman10";
import Chat2 from "../pages/Chat2";
import Chat3 from "../pages/Chat3";
import Chat4 from "../pages/Chat4";
import Chat6 from "../pages/Chat6";
import Chat7 from "../pages/Chat7";
import Chat8 from "../pages/Chat8";
import Chat10 from "../pages/Chat10";
import Closing from "../pages/Closing";
import NavbarB from "../pages/NavbarB";

import axios from "axios";

function CeritaDetail () {
    const [dongengById, setDongengById] = useState({});
    const { id } = useParams();

    const [nomorHal, setNomorHal] = useState(1);
    const [isOpening, setIsOpening] = useState(true);
    const [isDisable, setIsDisable] = useState(true);
    const [halamans, setHalamans] = useState();

    useEffect(() => {
        getDongengById();
    }, []);
    
    const getDongengById = async () => {
        const response = await axios.get(`http://localhost:3011/${id}`);
        setDongengById(response.data);
        console.log(response.data);
    }

    const dongeng = dongengById;
    
    function handleNext() {
        setNomorHal(nomorHal + 1)
        setIsOpening(false)

        if (nomorHal >= 1 ) {
            setIsDisable(false)
        }

        if (isOpening === isOpening) {
            if(nomorHal === 1) {
                setHalamans( <Halaman1 dongengHalaman1={dongeng.halaman1}/> )
                
            } 
            else if(nomorHal === 2) {
                setHalamans( <Halaman2 dongengHalaman2={dongeng.halaman2}/> )
                
            }
            else if(nomorHal === 3) {
                setHalamans( <Chat2 dongengChat2={dongeng.chat_box2}/> )
                
            }
            else if(nomorHal === 4) {
                setHalamans( <Halaman3 dongengHalaman3={dongeng.halaman3} /> )
                
            }
            else if(nomorHal === 5) {
                setHalamans( <Chat3 dongengChat3={dongeng.chat_box3}/> )
                
            }
            else if(nomorHal === 6) {
                setHalamans( <Halaman4 dongengHalaman4={dongeng.halaman4} /> )
                
            }
            else if(nomorHal === 7) {
                setHalamans( <Chat4 dongengChat4={dongeng.chat_box4}/> )
                
            }
            else if(nomorHal === 8) {
                setHalamans( <Halaman5 dongengHalaman5={dongeng.halaman5}/> )
                
            } 
            else if(nomorHal === 9) {
                setHalamans( <Halaman6 dongengHalaman6={dongeng.halaman6} /> )
                
            }
            else if(nomorHal === 10) {
                setHalamans( <Chat6 dongengChat6={dongeng.chat_box6}/> )
                
            }
            else if(nomorHal === 11) {
                setHalamans( <Halaman7 dongengHalaman7={dongeng.halaman7} /> )
                
            }
            else if(nomorHal === 12) {
                setHalamans( <Chat7 dongengChat7={dongeng.chat_box7}/> )
                
            }
            else if(nomorHal === 13) {
                setHalamans( <Halaman8 dongengHalaman8={dongeng.halaman8} /> )
                
            }
            else if(nomorHal === 14) {
                setHalamans( <Chat8 dongengChat8={dongeng.chat_box8}/> )
                
            }
            else if(nomorHal === 15) {
                setHalamans( <Halaman9 dongengHalaman9={dongeng.halaman9}/> )
                
            }
            else if(nomorHal === 16) {
                setHalamans( <Halaman10 dongengHalaman10={dongeng.halaman10}/> )
                
            }else if(nomorHal === 17) {
                setHalamans( <Chat10 dongengChat10={dongeng.chat_box10}/> )
                
            }                  
            else {
                setHalamans( <Closing/> )
            }
             
        }
       
    }

    function handleBack() {
        setNomorHal(nomorHal - 1)
        setIsOpening(false)

        if(nomorHal === 2) {
            setIsDisable(true)
        }

        if (isOpening === false) {
            if(nomorHal === 19) {
                setHalamans( <Chat10 dongengChat10={dongeng.chat_box10}/> )
                
            }        
            else if(nomorHal === 18) {
                setHalamans( <Halaman10 dongengHalaman10={dongeng.halaman10} /> )
                
            }
            else if(nomorHal === 17) {
                setHalamans( <Halaman9 dongengHalaman9={dongeng.halaman9}/> )
                
            }
            else if(nomorHal === 16) {
                setHalamans( <Chat8 dongengChat8={dongeng.chat_box8}/> )
                
            }
            else if(nomorHal === 15) {
                setHalamans( <Halaman8 dongengHalaman8={dongeng.halaman8} /> )
                
            }
            else if(nomorHal === 14) {
                setHalamans( <Chat7 dongengChat8={dongeng.chat_box7}/> )
                
            }
            else if(nomorHal === 13) {
                setHalamans( <Halaman7 dongengHalaman7={dongeng.halaman7} /> )
                
            }
            else if(nomorHal === 12) {
                setHalamans( <Chat6 dongengChat6={dongeng.chat_box6}/> )
                
            }
            else if(nomorHal === 11) {
                setHalamans( <Halaman6 dongengHalaman6={dongeng.halaman6} /> )
                
            }
             else if(nomorHal === 10) {
                setHalamans( <Halaman5 dongengHalaman5={dongeng.halaman5}/> )
                
            }
            else if(nomorHal === 9) {
                setHalamans( <Chat4 dongengChat4={dongeng.chat_box4}/> )
                
            }
            else if(nomorHal === 8) {
                setHalamans( <Halaman4 dongengHalaman4={dongeng.halaman4}/> )
                
            }
            else if(nomorHal === 7) {
                setHalamans( <Chat3 dongengChat3={dongeng.chat_box3}/> )
                
            }
            else if(nomorHal === 6) {
                setHalamans( <Halaman3 dongengHalaman3={dongeng.halaman3} /> )
                
            }
            else if(nomorHal === 5) {
                setHalamans( <Chat2 dongengChat2={dongeng.chat_box2}/> )
                
            }
            else if(nomorHal === 4) {
                setHalamans( <Halaman2 dongengHalaman2={dongeng.halaman2} /> )
                
            }                  
            else if(nomorHal === 3) {
                setHalamans( <Halaman1 dongengHalaman1={dongeng.halaman1}/> )

            }
            else {
                setHalamans( <Opening  dongengJudul={dongeng.judul_dongeng}/> )
                
            }
             
        }

    }

   
    
    let opening

    if (isOpening) {
        opening = <Opening  dongengJudul={dongeng.judul_dongeng}/>
    } else {
        opening = halamans
    }
 
    return ( 
        <div>       
            
            {opening}
            {console.log(isDisable)}
            {console.log(nomorHal)}
           
            <NavbarB handleNext={handleNext} handleBack={handleBack} dongengJudul={dongeng.judul_dongeng} nomorHal={nomorHal} isDisable={isDisable}/>  
        </div>
     );
}
 
export default CeritaDetail;