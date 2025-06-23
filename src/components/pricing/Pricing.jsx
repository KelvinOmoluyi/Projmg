import ArrowBtn from '../../assets/img/btn-arrow.png';
import '../../css/Pricing.css';
import '../../css/Toggle.css';
import { motion } from "framer-motion";
import PriceBoard from './PriceBoard';
import { useState } from 'react';

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Pricing = () => {
    const pagesLinks = ["Features", "Integrations", "Reviews", "Contact"];

    const title = "Pricing Plans".split(" ").map(word => word.split(""));
    const smallTitle = "Choose a plan that fits your workflow — scale as your team grows.";

    // =====================================================================

    const [planType, setPlanType] = useState("monthly");

    const basePriceBoardData = [
        {
            id: 1, 
            priceType: 'Starter Plan', 
            description: 'Best for freelancers & solo users just getting started', 
            features: ['• 1 Workspace', '• Up to 3 Projects', '• Basic Task Management', '• Team Chat (1:1 only)', '• 500MB File Storage'],
            specialClass: null,
            priceMarker: null,
            buttonText: 'Start Free Trail!'
        },
        {
            id: 2, 
            priceType: 'Team Plan', 
            description: 'Ideal for growing teams who need better collaboration', 
            features: ['• Unlimited Projects', '• 5 Workspaces', '• Real-time Team Chat', '• 10GB Storage per User', '• Priority Support'],
            specialClass: 'best-choice',
            priceMarker: 'best choice',
            buttonText: 'Start 14 Days Free Trail'

        },
        {
            id: 3, 
            priceType: 'Enterprise Plan', 
            description: 'Built for large teams & organizations that need control', 
            features: ['• Everything in Team Plan', '• Unlimited Workspaces & Teams', '• Predictive Analytics Dashboard', '• Dedicated Account Manager', '• SLA & 24/7 Premium Support'],
            specialClass: null,
            priceMarker: null,
            buttonText: 'Subscribe!'
        }
    ]

    const pricing = { 
        monthly: ['Price: Free / $0', 'Price: $9.99', 'Price: $15.99'],
        yearly: ['1 Month Only', 'Price: $90.99', 'Price: custom pricing']
    };

    const priceBoardData = basePriceBoardData.map((item, index) => ({
    ...item,
    price: pricing[planType][index] // dynamically assign price
    }));

    const handleToggle = (e) => {
        setPlanType(e.target.checked ? "yearly" : "monthly")
    }


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
                        <Link to="/"><h3>PROJ.MG</h3></Link>
                    </motion.div>
                </div>
                <div className="nav-sections-link">
                    <ul>
                        {pagesLinks.map((pagelink, index) => (
                            <li key={index}>
                                <Link to={"/#"+pagelink}>
                                    <motion.p
                                    className="upRevealElement-inline"
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.05*index }}
                                    viewport={{ once: true, amount: 1 }}
                                    >{pagelink}</motion.p>
                                </Link>
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
            <div className="main-section-content-price-words">
                <div className="main-section-content-price-words-bigwords h-text-gradient">
                    {title.map((word, wordIndex) => (
                        <h1 key={wordIndex} className="word-wrapper">
                            {word.map((letter, letterIndex) => (
                                <motion.span
                                key={letterIndex}
                                initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.015 * (wordIndex * 13 + letterIndex) }}
                                viewport={{ once: true, amount: 1 }}
                                className="upRevealElement-inline"
                                >
                                {letter}
                                </motion.span>
                            ))}
                        </h1>
                    ))}
                </div>

                <motion.p
                initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.9 }}
                viewport={{ once: true, amount: 1 }}
                className="upRevealElement-block"
                >
                    {smallTitle}
                </motion.p>

                <div className="price-toggle-container">
                    <input 
                    type="checkbox"  
                    id="price-toggle"
                    onChange={handleToggle}
                    checked={planType === "yearly"}
                    />
                    <label htmlFor="price-toggle">
                        <p>Monthly</p>
                        <p>Yearly</p>
                    </label>
                </div>
            </div>
            <div className="main-section-content-price-container">
                {priceBoardData.map((data) => (
                    <li key={data.id}>
                        <PriceBoard priceBoardData={data}/>
                    </li>
                ))}
            </div>
        </div>
    </main>
    );
}
 
export default Pricing;