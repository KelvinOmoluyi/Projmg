import ArrowBtn from '../../assets/img/btn-arrow.png';
import '../../css/Pricing.css';
import { motion } from "framer-motion";

const Pricing = () => {

    const pagesLinks = ["Features", "Integrations", "Reviews", "Contact"];

    return (
        <main className="main-section" id="home">
        <header>
            <nav>
                <div className="nav-logo">
                    <motion.div 
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 1 }}
                    className="overflow-hidden-container-inner">       
                        <a href="/"><h3>PROJ.MG</h3></a>
                    </motion.div>
                </div>
                <div className="nav-sections-link">
                    <ul>
                        {pagesLinks.map((pagelink, index) => (
                            <li key={index}>
                                <a href={"/#"+pagelink}>
                                    <motion.p
                                    className="upRevealElement-inline"
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.05*index }}
                                    viewport={{ once: true, amount: 1 }}
                                    >{pagelink}</motion.p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cta-btn-div">

                    <motion.div
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 1 }}
                    className="cta-btn-01">
                            <p>Start Today!</p>
                            <img src={ArrowBtn} alt="button arrow" />
                    </motion.div>
                </div>
            </nav>
        </header>

        <div className="main-section-content wrapper">
            <div className="main-section-content-price-container">
                <div className="price-board">

                </div>
                <div className="price-board">
                    
                </div>
                <div className="price-board">
                    
                </div>
            </div>
        </div>
    </main>
    );
}
 
export default Pricing;