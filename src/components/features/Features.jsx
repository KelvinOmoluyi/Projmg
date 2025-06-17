import FeatureBox from './FeatureBox';
import Icon1 from '../../assets/img/feature-icon1.png';
import Icon2 from '../../assets/img/feature-icon2.png';
import Icon3 from '../../assets/img/feature-icon3.png';
import Icon4 from '../../assets/img/feature-icon4.png';
import Icon5 from '../../assets/img/feature-icon5.png';
import Icon6 from '../../assets/img/feature-icon6.png';

const Features = () => {

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
            <section className="for-you" id="#features">            
                <div className="background-gradient"></div>

                <div className="for-you-content">
                    <div className="for-you-content-heading">
                        <div className="for-you-content-heading-big-words h-text-gradient">
                            <h2>Features that work for you</h2>
                        </div>
                        <div className="for-you-content-heading-small-words">
                            <p>Gain invaluable predictive analytics and actionable insights, empowering your
                                team to make data-driven decisions and close deal.
                            </p>
                        </div>
                    </div>

                    <div className="for-you-content-features-container">
                        {FeatureData.map((data) => (
                            <li key={data.id}>
                                <FeatureBox data={data} body={body} />
                            </li>
                        ))}
                    </div>
                </div>
            </section>
    );
}
 
export default Features;