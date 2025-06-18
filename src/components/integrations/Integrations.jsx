import { motion } from 'framer-motion';
import ArrowBtn from '../../assets/img/btn-arrow.png';
import IntegrationsImg from '../../assets/img/integrations-img.png';

const Integrations = () => {

    const title = "Seamless integration with your favourite tools".split("");

    const smallWords = "Seamlessly integrate with platforms like Zapier, WordPress, Shopify, Slack, Messenger, WhatsApp, Crisp, Intercom, and Zendesk."

    return (
            <section className="seamless-integration wrapper" id="integrations">
                <div className="background-gradient"></div>

                <div className="seamless-integration-content">
                    <div className="seamless-integration-content-heading">
                        <div className="seamless-integration-content-heading-big-words h-text-gradient">
                            {title.map((letter, index) => (
                                <motion.h2
                                className="upRevealElement-inline"
                                initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.03*index }}
                                viewport={{ once: true, amount: 1 }}
                                key={index}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.h2>
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
                            <a className="cta-btn-02">
                                <p>Start Free Trail</p>
                                <img src={ArrowBtn} alt="button arrow" />
                            </a>
                            <a className="cta-btn-01">
                                <p>Request Free Demo</p>
                            </a>
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