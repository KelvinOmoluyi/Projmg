import ArrowBtn from '../../assets/img/btn-arrow.png';
import IntegrationsImg from '../../assets/img/integrations-img.png';

const Integrations = () => {
    return (
            <section className="seamless-integration wrapper" id="integrations">
                <div className="background-gradient"></div>

                <div className="seamless-integration-content">
                    <div className="seamless-integration-content-heading">
                        <div className="seamless-integration-content-heading-big-words h-text-gradient">
                            <h2>Seamless integration with your favourite tools</h2>
                        </div>
                        <div className="seamless-integration-content-heading-small-words">
                            <p>Seamlessly integrate with platforms like Zapier, WordPress, Shopify, 
                                Slack, Messenger, WhatsApp, Crisp, Intercom, and Zendesk. 
                            </p>
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
                    </div>

                    <div className="seamless-integration-content-img">
                        <img src={IntegrationsImg} alt="picture illustrating connection" />
                    </div>
                </div>
            </section>
    );
}
 
export default Integrations;