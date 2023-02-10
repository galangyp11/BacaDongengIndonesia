import { motion } from "framer-motion";
import  TypeAnimation from "react-type-animation";
import "./pages.css";
import Sound from "react-sound";
import soundChat4 from '.././sound/chat4.mp3';

const Chat4 = ({ dongengChat4 }) => {
    return ( 
        <div className="cerita-detail">
            <Sound
                url={soundChat4}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
            />
            <div className="hal-chat-kancil">
           <motion.div 
                className="kancil"
                initial={{ opacity:0 }}
                animate={{ opacity:1, x:[-80,0], y:[80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            >
            </motion.div> 
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
                    sequence={[ "Aku tak perlu lagi kesulitan mencari makanan di hutan. Di ladang Petani, ada banyak sekali makanan", 1000 ]}
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
 
export default Chat4;