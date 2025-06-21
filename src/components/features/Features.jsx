import { motion } from 'framer-motion';
import FeatureBox from './FeatureBox';
import Icon1 from '../../assets/img/feature-icon1.png';
import Icon2 from '../../assets/img/feature-icon2.png';
import Icon3 from '../../assets/img/feature-icon3.png';
import Icon4 from '../../assets/img/feature-icon4.png';
import Icon5 from '../../assets/img/feature-icon5.png';
import Icon6 from '../../assets/img/feature-icon6.png';

const Features = () => {

    const title = "Features that work for you".split(" ").map(word => word.split(""));
    const smallTitle = "Gain invaluable predictive analytics and actionable insights, empowering your team to make data-driven decisions and close deal.";

    const FeatureData = [
        {id: 1, icon: Icon1, title: 'Setup Everything Fast'},
        {id: 2, icon: Icon2, title: 'Schedule Campaign'},
        {id: 3, icon: Icon3, title: 'Live Reports'},
        {id: 4, icon: Icon4, title: 'Chat Module in Website'},
        {id: 5, icon: Icon5, title: 'Unlimited Products'},
        {id: 6, icon: Icon6, title: 'Collect Information'}
    ]
    // I excluded the body from the FeatureData obj, because all are the same
    const body = 'Gain invaluable predictive analytics and actionable insights, empowering your to make data-driven decisions.'



    return (
            <section className="for-you" id="Features">            
                <div className="background-gradient"></div>

                <div className="for-you-content">
                    <div className="for-you-content-heading">
                        <div className="for-you-content-heading-big-words h-text-gradient">
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
                        <div className="for-you-content-heading-small-words">
                            <motion.p
                            initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                            viewport={{ once: true, amount: 1 }}
                            className="upRevealElement-block"
                            >
                                {smallTitle}
                            </motion.p>
                        </div>
                    </div>

                    <div className="for-you-content-features-container">
                        {FeatureData.map((data, index) => (
                            <ul key={data.id}>
                                <motion.div
                                className="overflow-hidden-container-inner"
                                initial={{ filter: "blur(10px)", opacity: 0, y: 70 }}
                                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.3*index }}
                                viewport={{ once: true, amount: 0 }}
                                >
                                    <FeatureBox data={data} body={body} />
                                </motion.div>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
    );
}
 
export default Features;