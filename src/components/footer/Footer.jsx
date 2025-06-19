import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="wrapper" id="footer">
            <div className="footer-contents">
                <div className="footer-contents-company-logo">
                    <motion.h3
                    initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    className="upRevealElement-block"
                    >
                        PROJ.MG
                    </motion.h3>
                </div>
                <div className="footer-contents-links-and-summary">
                    <div className="column">
                        <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        viewport={{ once: true, amount: 0 }}
                        className="inner-column"
                        >
                            <div className="data heading"><p>Product</p></div>
                            <div className="data"><p>Pricing & Plans</p></div>
                            <div className="data"><p>Product Features</p></div>
                            <div className="data"><p>Integration</p></div>
                            <div className="data"><p>Integration Details</p></div>     
                        </motion.div>
                    </div> 
                    <div className="column">
                        <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                        viewport={{ once: true, amount: 0 }}
                        className="inner-column"
                        >
                            <div className="data heading"><p>Company</p></div>
                            <div className="data"><p>About</p></div>
                            <div className="data"><p>Product Features</p></div>
                            <div className="data"><p>Changelog</p></div>
                            <div className="data"><p>Contact</p></div>   
                        </motion.div>
                    </div>
                    <div className="column">
                        <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.25 }}
                        viewport={{ once: true, amount: 0 }}
                        className="inner-column"
                        >
                            <div className="data heading"><p>Resources</p></div>
                            <div className="data"><p>Blog</p></div>
                            <div className="data"><p>Blog Details</p></div>
                            <div className="data"><p>Changelog</p></div> 
                        </motion.div>
                    </div>
                    <div className="column">
                        <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.35 }}
                        viewport={{ once: true, amount: 0 }}
                        className="inner-column"
                        >
                            <div className="data heading"><p>Services</p></div>
                            <div className="data"><p>Book A Demo</p></div>
                            <div className="data"><p>Contact</p></div>
                            <div className="data"><p>404</p></div>
                        </motion.div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>&copy; Copyright 2025, All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;