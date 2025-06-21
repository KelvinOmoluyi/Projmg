import '../../css/Main.css'
import '../../css/NotFound.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ArrowBtn from '../../assets/img/btn-arrow.png';

const NotFound = () => {
    return (
        <section className="notfound-section">
            <div className="words">
                <h1>OOPS, Page Not Found :( </h1>
            </div>
            
            <div className="cta-btn-div">
                <Link to="/">
                    <div className="cta-btn-02">
                        <p>Go Back Home!</p>
                        <img src={ArrowBtn} alt="button arrow" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
 
export default NotFound;