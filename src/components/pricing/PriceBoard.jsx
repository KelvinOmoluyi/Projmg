import ArrowBtn from '../../assets/img/btn-arrow.png';

const PriceBoard = ({priceBoardData}) => {

    const {priceType , description, price, features, specialClass, priceMarker, buttonText} = priceBoardData;

    return (
        <div className={`price-board ${specialClass}`}>
            <div className="pricing-type">
                <h3>{priceType}</h3>
                {priceMarker && (
                    <div className="best-choice-tag"><p>best choice</p></div>
                )}
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="price">
                <h4>{price}</h4>
            </div>
            <div className="price-features">
                {features.map((feature, index) => (
                    <li key={index}>
                        <p>{feature}</p>
                    </li>
                ))}
            </div>
            <div className="cta-btn-div">
                <a href="#">
                    <div className="cta-btn-02">
                        <p>{buttonText}</p>
                        <img src={ArrowBtn} alt="button arrow" />
                    </div>
                </a>
            </div>
        </div>
    );
}
 
export default PriceBoard;