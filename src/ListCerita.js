import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ListCerita = ({ cerita, judul_dongeng}) => {

    return ( 
        <div className="list-cerita">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
        <h2>{ judul_dongeng }</h2>    
            {cerita.map((cerita) => (
                <motion.div
                    className="hoverList"
                    whileHover={{ 
                        scale: 1.05
                     }}
                >
                <Link to={ `/cerita/${cerita.judul_dongeng}` }>
                <div className="col">
                    <div className="card">
                    <img src={require('./img/home/kuraplongo.jpg')} className="card-img-top"/>
                        <div className="card-body">
                            <div className="card-text" key={cerita.id_dongeng}>
                                <h2>{ cerita.judul_dongeng }</h2>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                </motion.div>
            ))}
                </div>
            </div>
        </div>  
     );
}
 
export default ListCerita;