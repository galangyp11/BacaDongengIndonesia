import {motion} from "framer-motion";
import  TypeAnimation from "react-type-animation";
import "./pages.css";
import Sound from "react-sound";
import soundChat6 from '.././sound/chat6.mp3';

const Chat6 = ({ dongengChat6 }) => {
    return ( 
        <div className="cerita-detail">
            <Sound
                url={soundChat6}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
            />
            <div className="hal-chat-paktani">
            <motion.div 
                className="paktani"
                initial={{ opacity:0 }}
                animate={{ opacity:1, x:[-80,0], y:[80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            >
            </motion.div> 
            <motion.div
                className="chat-box kanan"
                initial={{ opacity:0 }}
                animate={{ opacity:1, y:[80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            >
                <h2 className="nametag-paktani">Pak Tani</h2>
                <TypeAnimation
                    className="chat-box-text"
                    cursor={false}
                    sequence={[ "Aku harus memberi pelajaran untuk si pencuri. Tapi, bagaimana caranya?", 1000 ]}
                    speed={99}
                    wrapper="h3"
                    repeat="1"
                >
                </TypeAnimation>
            </motion.div>
            <motion.div
                className="lingkaranpt"
                animate={{ rotate:[0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
                className="segienampt"
                animate={{ rotate:[0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
                className="bintangpt"
                animate={{ rotate:[0, 360], y:[null, 60, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            
            </div>
        </div>
     );
}
 
export default Chat6;