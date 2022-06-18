import { Link } from "react-router-dom";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import backgroundImg from "./img/home/backgroundHome.png";
import ListDongeng from "./components/ListDongeng";

const Home = ({ dongengs, title}) => {

    return (
        <div className="home">
            <section id="section-one">
            <img src={backgroundImg} className="backgroundImg" alt="background"/>
                <h2 className="h2home">Baca Dongeng Indonesia</h2>
            <motion.div
                className="hoverMulai"
                whileHover={{ 
                    scale: 1.1
                 }}
            >
                <HashLink to="//#section-two">
                    <button className="btn btn-dark btn-lg" id="mulai">Mulai</button>
                </HashLink>
            </motion.div>

            <MouseParallaxContainer
                containerStyles={{ 
                    position: "absolute",
                    width: "99vw",
                    height: "100vh",
                    top: "0",
                    left: "0",
                    zIndex: "-1",
                    border: "1px solid purple"

                 }}
                 resetOnLeave
            >
                <MouseParallaxChild
                factorX={0.05}
                factorY={0.05}
                updateStyles={{
                  display: "flex",
                  border: "1px solid black",
                  float: "left",
                  width: "auto",
                  height: "25vh"
                }}>
                    {/* <img className="awan" src={require('./img/home/awanBesar2.1.png')}/> */}
                </MouseParallaxChild>
            </MouseParallaxContainer>
            </section>

            <section id="section-two">
            <h2 className="judul">{ title }</h2>
            <div className="row g-1 justify-content-center">
                
                    { dongengs.map((dongeng) => (
                        <motion.div
                        className="hoverList"
                        whileHover={{ 
                            scale: 1.05
                        }}
                        >
                        <div className="card">
                        <Link to={ `/cerita/${dongeng.id}` }>
                            
                                
                                {/* <img src={ URL.createObjectURL(cerita.gambar_dongeng) } className="card-img-top" /> */}
                                    <div className="card-body">
                                        <div className="card-text" key={dongeng.id}>
                                            <h2>{ dongeng.judul_dongeng }</h2>
                                        </div>
                                    </div>
                                
                            
                        </Link>
                        </div>
                        </motion.div>
                    )) }
            </div>
            </section>
        </div>
        );
}
 
export default Home;

