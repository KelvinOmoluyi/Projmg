const FeatureBox = ({data, body}) => {
    return (
        <div className="feature">
            <div className="feature-img">
                <img src={data.icon} alt="feature icon" />
            </div>
            <div className="feature-big-words">
                <h5>{data.title}</h5>
            </div>
            <div className="feature-big-words">
                <p>{body}</p>
            </div>
        </div>
    );
}
 
export default FeatureBox;