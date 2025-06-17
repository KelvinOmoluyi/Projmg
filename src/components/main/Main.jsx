import ArrowBtn from '../../assets/img/btn-arrow.png';

const Main = () => {
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
                <div className="main-section-content-words-snippet">
                    <p>Best Project Management Software Of 2025</p>
                </div>
                <div className="main-section-content-words-big-words h-text-gradient">
                    <h1>Project Management has never been easier and compact.</h1>
                </div>
                <div className="main-section-content-words-small-words">
                    <p>Organize your projects, chat with your team, and get things done — all from one simple workspace.</p>
                </div>
                <div className="cta-btn-div">
                    <a className="cta-btn-02">
                        <p>Start Free Trail</p>
                        <img src={ArrowBtn} alt="button arrow" />
                    </a>
                    <a className="cta-btn-01">
                        <p>Request Free Demo</p>
                    </a>
                </div>
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