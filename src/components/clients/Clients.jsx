import BusinessLogo from './BusinessLogo';
import LogoImg1 from '../../assets/img/business-logo1.png'
import LogoImg2 from '../../assets/img/business-logo2.png'
import LogoImg3 from '../../assets/img/business-logo3.png'
import LogoImg4 from '../../assets/img/business-logo4.png'
import LogoImg5 from '../../assets/img/business-logo5.png'

const Client = () => {

    const Logos = [LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5];
    
    return (
            <section className="business-owners">
                <div className="business-owners-content">
                    <div className="business-owners-content-scroll-container">
                        <div className="business-owners-content-heading-words">
                            <h3>Trusted by 45,000+ founders & business owners</h3>
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