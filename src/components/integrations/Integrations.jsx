import { motion } from 'framer-motion';
import ArrowBtn from '../../assets/img/btn-arrow.png';
import IntegrationsImg from '../../assets/img/integrations-img.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Integrations = () => {

    const title = "Seamless integration with your favourite tools".split(" ").map(word => word.split(""));

    const smallWords = "Seamlessly integrate with platforms like Zapier, WordPress, Shopify, Slack, Messenger, WhatsApp, Crisp, Intercom, and Zendesk."

    return (
            <section className="seamless-integration wrapper" id="Integrations">
                <div className="background-gradient"></div>

                <div className="seamless-integration-content">
                    <div className="seamless-integration-content-heading">
                        <div className="seamless-integration-content-heading-big-words h-text-gradient">
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

                        <div className="seamless-integration-content-heading-small-words">
                            <motion.p
                            initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                            viewport={{ once: true, amount: 1 }}
                            className="upRevealElement-block"
                            >
                                {smallWords}
                            </motion.p>
                        </div>

                        <motion.div 
                        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.7 }}
                        viewport={{ once: true, amount: 1 }}
                        className="cta-btn-div">     
                            <Link to="/pricing">
                                <div className="cta-btn-02">
                                    <p>Start Free Trail</p>
                                    <img src={ArrowBtn} alt="button arrow" />
                                </div>
                            </Link>
                            <Link to="/pricing">
                                <div className="cta-btn-01">
                                    <p>Request Free Demo</p>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="seamless-integration-content-img">
                        <img src={IntegrationsImg} alt="picture illustrating connection" />
                    </div>
                </div>
            </section>
    );
}
 
export default Integrations;