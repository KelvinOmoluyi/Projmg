import ClientImg from '../../assets/img/client1.png'

const Reviews = () => {
    return (    
        <section className="reviews wrapper h-text-gradient" id="reviews">
            <div className="reviews-content">
                <div className="reviews-content-heading">
                    <div className="reviews-content-heading-tip">
                        <h5>Read Customer’s Review</h5>
                    </div>
                    <div className="reviews-content-heading-big-words">
                        <h2>3700+ Happy Customers</h2>
                    </div>
                </div>
            </div>
            <div className="reviews-content-reviews-container">
                <div className="review">
                    <div className="review-img">
                        <img src={ClientImg} alt="client picture" />
                    </div>
                    <div className="review-words">
                        <div className="background-gradient"></div>

                        <h4>100% Best Software</h4>
                        <div className="breakpoint1"></div>
                        <p>Organize your projects, chat with your team, and get things done — all from one simple 
                            workspace.Organize your projects, chat with your team, and get things done — all from 
                            one simple workspace.Organize your projects, chat with your team, and get things done — 
                            all from one simple workspace.
                        </p>
                        <div className="breakpoint2"></div>
                        <h5>Michael Johnas</h5>
                        <p>Sales & Marketing, LLC</p>
                        <div className='line'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Reviews;