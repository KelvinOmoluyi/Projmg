import { motion } from 'framer-motion';
import ArrowBtn from '../../assets/img/btn-arrow.png';
import Schedule from '../../assets/img/schedule-img.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CallToAction = () => {

    const title = "Project Management has never been easier and compact.".split(" ").map(word => word.split(""));

    return (
        <section className="call-to-action wrapper">
            <div className="call-to-action-content">
                <div className="call-to-action-content-words">
                    <div className="call-to-action-content-words-heading h-text-gradient">
                    {title.map((word, wordIndex) => (
                        <h2 key={wordIndex} className="word-wrapper">
                            {word.map((letter, letterIndex) => (
                                <motion.span
                                key={letterIndex}
                                initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.015 * (wordIndex * 13 + letterIndex) }}
                                viewport={{ once: true, amount: 1 }}
                                className="upRevealElement-inline"
                                >
                                {letter}
                                </motion.span>
                            ))}
                        </h2>
                    ))}
                    </div>


                    <div className="call-to-action-content-words-body">
                        <motion.p
                        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        viewport={{ once: true, amount: 0 }}
                        className="upRevealElement-block"
                        >
                            Organize your projects, chat with your team, and get things done — all from one simple workspace.
                        </motion.p>
                    </div>
                    
                    <motion.div 
                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.9 }}
                    viewport={{ once: true, amount: 1 }}
                    className="cta-btn-div">
                        <Link to="/pricing">
                            <div className="cta-btn-02">
                                <p>Start 14 Days Free Trail</p>
                                <img src={ArrowBtn} alt="button arrow" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <div className="call-to-action-content-slider">
                    <img src={Schedule} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default CallToAction;