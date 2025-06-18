import { big } from 'framer-motion/client';
import ArrowBtn from '../../assets/img/btn-arrow.png';
import { motion } from "framer-motion";


const Main = () => {
    const sentence1 = "Project Management has never been easier and compact.";
    const bigWords = sentence1.split("");

    const smallWords = "";


    return (
        <main className="main-section wrapper">
        <header>
            <nav>
                <div className="nav-logo">
                    <h3>PROJ.MG</h3>
                </div>
                <div className="nav-sections-link">
                    <ul>
                        <li>
                            <a href="#features"><p>Features</p></a>
                        </li>
                        <li>
                            <a href="#integrations"><p>Integrations</p></a>
                        </li>
                        <li>
                            <a href="#reviews"><p>Reviews</p></a>
                        </li>
                        <li>
                            <a href="#footer"><p>Contact</p></a>
                        </li>
                    </ul>
                </div>
                <div className="cta-btn-div">
                    <div className="cta-btn-01">
                        <p>Start Today!</p>
                        <img src={ArrowBtn} alt="button arrow" />
                    </div>
                </div>
            </nav>
        </header>


        <div className="main-section-content">
            <div className="main-section-content-words">
                <div className="overflow-hidden-container-outer">
                    <motion.div 
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 1 }}
                    className="main-section-content-words-snippet">
                        <p>Best Project Management Software Of 2025</p>
                    </motion.div>
                </div>
                <div className="main-section-content-words-big-words h-text-gradient">
                        {bigWords.map((bigWord, index) => (
                            <motion.h1
                            className="upRevealText"
                            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.02*index }}
                            viewport={{ once: true, amount: 1 }}
                            key={index}
                            >
                                {bigWord === " " ? "\u00A0" : bigWord}
                            </motion.h1>
                        ))}
                </div>
                <div className="main-section-content-words-small-words">
                    <div className="overflow-hidden-container-inner">
                        <motion.p
                        initial={{ y:60 }}
                        animate={{ y:0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        viewport={{ once: true }}
                        >
                            Organize your projects, chat with your team, and get things done — all from one simple workspace.
                        </motion.p>
                    </div>
                </div>
                <motion.div className="cta-btn-div">
                    <a className="cta-btn-02">
                        <p>Start Free Trail</p>
                        <img src={ArrowBtn} alt="button arrow" />
                    </a>
                    <a className="cta-btn-01">
                        <p>Request Free Demo</p>
                    </a>
                </motion.div>
                <div className="main-section-content-words-card-note">
                    <p><span>No Credit Card Required</span> <span>•</span> <span>Cancel Everytime</span></p>
                </div>
            </div>
            <div className="main-section-content-dashboard">
            </div>
        </div>
    </main>
    );
}
 
export default Main;