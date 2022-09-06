import { Link } from "react-router-dom";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import gambar1 from "../img/home/Thumbnail-kancil.png"
import gambar2 from "../img/home/mikewazowski.jpg"
import awan1 from "../img/home/awan1.png"
import awan2 from "../img/home/awan2.png"
import awan3 from "../img/home/awan3.png"
import awan4 from "../img/home/awan4.png"
import awan5 from "../img/home/awan5.png"
import awan6 from "../img/home/awan6.png"

import "./Home.css";

const Home = ({ dongengs }) => {

    return (
        <div className="home">
            <div className="bg-1">
                <MouseParallaxContainer  
                    className="parallax-container" 
                    resetOnLeave
                    containerStyles={{ 
                        width:"100%",
                        position:"absolute",
                        height:"100vh",
                        display:"grid",
                        zIndex:"2",
                        gridTemplateColumns:"auto auto auto auto auto auto"
                     }}
                    >
                        <MouseParallaxChild
                            factorX={0.2}
                            factorY={0.1}
                            updateStyles={{ 
                                display:"flex",
                                paddingTop:"80px",
                                marginLeft:"-100px",
                                width:"auto",
                                height:"100%"
                             }}
                        >
                            <img src={awan1} style={{ height: "150px" }} alt="" />
                        </MouseParallaxChild>

                        <MouseParallaxChild
                            factorX={0.3}
                            factorY={0.2}
                            updateStyles={{ 
                                display:"flex",
                                paddingTop:"20px",
                                marginLeft:"70px",
                                width:"auto",
                                height:"100%"
                             }}
                        >
                            <img src={awan2} style={{ height: "110px" }} alt="" />
                        </MouseParallaxChild>

                        <MouseParallaxChild
                            factorX={0.4}
                            factorY={0.2}
                            updateStyles={{ 
                                display:"flex",
                                paddingTop:"200px",
                                marginLeft:"-260px",
                                width:"auto",
                                height:"100%"
                             }}
                        >
                            <img src={awan3} style={{ height: "60px" }} alt="" />
                        </MouseParallaxChild>

                        <MouseParallaxChild
                            factorX={0.3}
                            factorY={0.2}
                            updateStyles={{ 
                                display:"flex",
                                paddingTop:"150px",
                                marginLeft:"60px",
                                width:"auto",
                                height:"100%"
                             }}
                        >
                            <img src={awan4} style={{ height: "50px" }} alt="" />
                        </MouseParallaxChild>

                        <MouseParallaxChild
                            factorX={0.4}
                            factorY={0.2}
                            updateStyles={{ 
                                display:"flex",
                                paddingTop:"20px",
                                marginLeft:"70px",
                                width:"auto",
                                height:"100%"
                             }}
                        >
                            <img src={awan5} style={{ height: "60px" }} alt="" />
                        </MouseParallaxChild>

                        <MouseParallaxChild
                            factorX={0.2}
                            factorY={0.1}
                            updateStyles={{ 
                                display:"flex",
                                paddingTop:"90px",
                                marginLeft:"10px",
                                width:"auto",
                                height:"100%"
                             }}
                        >
                            <img src={awan6} style={{ height: "170px" }} alt="" />
                        </MouseParallaxChild>                    
                </MouseParallaxContainer>
                <motion.div
                    className="matahari"
                    animate={{ rotate: [0,360], x:[0,20,0], y:[0,20,0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                </motion.div>

                <div className="pohon">
                </div>

                <div className="tebing">
                </div>

                <section id="section-one">
                        <div className="logo-home">
                                <motion.div
                                    className="hoverMulai"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale:0.9 }}
                                >
                                    <HashLink to="#section-two">
                                        <button className="mulai">Mulai</button>
                                    </HashLink>
                                </motion.div>
                        </div>
                </section>

                <section id="section-two">
                          <h2 className="list-judul">Daftar Dongeng</h2>
                                <div className="list">
                                        { dongengs.map((dongeng) => (
                                            <motion.div
                                            className="hoverList"
                                            key={dongeng.id}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            >
                                            <div className="card" >
                                                <Link to={ `/${dongeng.id}` }>    
                                                    <img src={gambar1} className="card-img-top" />
                                                    <div className="card-body">
                                                        <div className="card-text">
                                                            <h2 className="judul-dongeng">{ dongeng.judul_dongeng }</h2>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            
                                            </motion.div>
                                        )) }

                                            <motion.div
                                            className="hoverList"
                                            whileHover={{ 
                                                scale: 1.1
                                            }}
                                            >
                                            <div className="card 2">
                                                <img src={gambar2} className="card-img-top" />
                                                <div className="card-body">
                                                    <div className="card-text">
                                                        <h2 className="judul-dongeng">Sangkuriang</h2>
                                                    </div>
                                                </div>
                                                <div className="overlay">
                                                    <div className="segera">Segera!</div>
                                                </div>
                                            </div>
                                            </motion.div>   
                            </div>
                            <motion.div
                                className="lingkaran"
                                animate={{ rotate:[0, 360] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            />

                            <motion.div
                                className="segienam"
                                animate={{ rotate:[0, 360], x:[null, 90, 0], y:[null, 90, 0] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            />

                            <motion.div
                                className="bintang"
                                animate={{ rotate:[0, 360], y:[null, 60, 0] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            />
                        <div className="home-tentang"><Link to="/about" style={{  textDecoration: "none", color: "#66ccff"}}>Tentang</Link></div>
                </section>
            </div>
            
        </div>
        );
}
 
export default Home;

