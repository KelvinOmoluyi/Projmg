import ArrowBtn from '../../assets/img/btn-arrow.png';
import Schedule from '../../assets/img/schedule-img.png';

const CallToAction = () => {
    return (
        <section className="call-to-action wrapper">
            <div className="call-to-action-content">
                <div className="call-to-action-content-words">
                    <div className="call-to-action-content-words-heading h-text-gradient">
                        <h2>Project Management has never been easier and compact.</h2>
                    </div>
                    <div className="call-to-action-content-words-body">
                        <p>Organize your projects, chat with your team, and get things done — all from one simple workspace.</p>
                    </div>
                    <p></p>
                    <div className="cta-btn-div">
                        <a className="cta-btn-02">
                            <p>Start 14 Days Free Trail</p>
                            <img src={ArrowBtn} alt="button arrow" />
                        </a>
                    </div>
                </div>

                <div className="call-to-action-content-slider">
                    <img src={Schedule} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default CallToAction;