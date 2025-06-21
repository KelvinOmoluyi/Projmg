import BusinessLogo from './BusinessLogo';
import LogoImg1 from '../../assets/img/business-logo1.png'
import LogoImg2 from '../../assets/img/business-logo2.png'
import LogoImg3 from '../../assets/img/business-logo3.png'
import LogoImg4 from '../../assets/img/business-logo4.png'
import LogoImg5 from '../../assets/img/business-logo5.png'
import { motion } from 'framer-motion';

const Client = () => {
    const title = "Trusted by 45,000+ founders & business owners".split(" ").map(word => word.split(""));

    const Logos = [LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5];
    
    return (
            <section className="business-owners">
                <div className="business-owners-content">
                    <div className="business-owners-content-scroll-container">
                        <div className="business-owners-content-heading-words">
                            {title.map((word, wordIndex) => (
                                <h3
                                className="word-wrapper" key={wordIndex}
                                >
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
                                </h3>
                            ))}
                        </div>
                        <div className="business-owners-content-businesses-list">
                            {Logos.map((logo) => (
                                <BusinessLogo logoPath={logo} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    );
}
 
export default Client;