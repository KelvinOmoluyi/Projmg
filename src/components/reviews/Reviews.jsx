import { motion } from 'framer-motion';
import ClientImg from '../../assets/img/client1.png'

const Reviews = () => {

    const title = "3700+ Happy Customers".split(" ").map(word => word.split(""));

    return (    
        <section className="reviews wrapper h-text-gradient" id="Reviews">
            <div className="reviews-content">
                <div className="reviews-content-heading">
                    <div className="reviews-content-heading-tip">
                        <motion.h5
                        initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        className="upRevealElement-block"
                        >
                            Read Customer’s Review
                        </motion.h5>
                    </div>
                    <div className="reviews-content-heading-big-words">
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
                </div>
            </div>
            <motion.div 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true, amount: 0 }}
            className="reviews-content-reviews-container"
            >
                <div className="review">
                    <motion.div 
                    initial={{ filter: "blur(10px)", opacity: 0, scale: 0.7 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                    viewport={{ once: true, amount: 0 }}
                    className="review-img"
                    >
                        <img src={ClientImg} alt="client picture" />
                    </motion.div>

                    <div className="review-words">
                        <div className="background-gradient"></div>

                        <motion.h4
                        initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.6 }}
                        viewport={{ once: true, amount: 0 }}
                        className="upRevealElement-block"
                        >
                            100% Best Software
                        </motion.h4>

                        <div className="breakpoint1"></div>

                        <motion.p
                        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        viewport={{ once: true, amount: 0 }}
                        className="upRevealElement-block"
                        >
                            Organize your projects, chat with your team, and get things done — all from one simple 
                            workspace.Organize your projects, chat with your team, and get things done — all from 
                            one simple workspace.Organize your projects, chat with your team, and get things done — 
                            all from one simple workspace.
                        </motion.p>

                        <div className="breakpoint2"></div>

                        <motion.h5
                        initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        viewport={{ once: true, amount: 0 }}
                        className="upRevealElement-block"
                        >
                            Michael Johnas
                        </motion.h5>

                        <motion.p
                        initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        viewport={{ once: true, amount: 0 }}
                        className="upRevealElement-block"
                        >
                            Sales & Marketing, LLC
                        </motion.p>

                        <div className='line'></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
 
export default Reviews;