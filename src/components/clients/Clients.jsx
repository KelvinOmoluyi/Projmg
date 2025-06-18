import BusinessLogo from './BusinessLogo';
import LogoImg1 from '../../assets/img/business-logo1.png'
import LogoImg2 from '../../assets/img/business-logo2.png'
import LogoImg3 from '../../assets/img/business-logo3.png'
import LogoImg4 from '../../assets/img/business-logo4.png'
import LogoImg5 from '../../assets/img/business-logo5.png'
import { motion } from 'framer-motion';

const Client = () => {
    const title = "Trusted by 45,000+ founders & business owners".split("");

    const Logos = [LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5];
    
    return (
            <section className="business-owners">
                <div className="business-owners-content">
                    <div className="business-owners-content-scroll-container">
                        <div className="business-owners-content-heading-words">
                            <h3>
                                {title.map((word, index) => (
                                    <motion.span
                                    className="upRevealText-inline"
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.02*index }}
                                    viewport={{ once: true, amount: 1 }}
                                    key={index}
                                    >
                                        {word === " " ? "\u00a0" : word}
                                    </motion.span>
                                ))}
                            </h3>
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