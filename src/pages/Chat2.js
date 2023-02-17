import { motion } from "framer-motion";
import TypeAnimation from "react-type-animation";
import Sound from "react-sound";
import "./pages.css";

import soundChat2 from '.././sound/chat2.mp3';
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';


const Chat2 = ({ dongengChat2 }) => {
    return ( 
        <div className="cerita-detail">
            <Sound
                url={soundChat2}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
            />
            <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <div className="hal-chat-kancil">
            <motion.div 
                className="kancil"
                initial={{ opacity:0 }}
                animate={{ opacity:1, x:[-80,0], y:[80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            />
             
            <motion.div
                className="chat-box kiri"
                initial={{ opacity:0 }}
                animate={{ opacity:1, y:[80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            >
                <h2 className="nametag-kancil">Kancil</h2>
                <TypeAnimation
                    className="chat-box-text"
                    cursor={false}
                    sequence={[ "Kemana aku harus mencari makanan? jika bertahan di hutan ini, bisa-bisa aku mati kelaparan, Dimana ya tempat yang penuh dengan makanan?", 1000 ]}
                    speed={99}
                    wrapper="h3"
                    repeat="1"
                >
                </TypeAnimation>
            </motion.div>
            <motion.div
                className="lingkaran"
                animate={{ rotate:[0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
                className="segienam"
                animate={{ rotate:[0, 360], x:[null, 90, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
                className="bintang"
                animate={{ rotate:[0, 360], y:[null, 60, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            
            </div>
        </div>
     );
}
 
export default Chat2;