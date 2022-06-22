import './Header.css'
import { FaHome, FaPhone, FaEnvelope, FaMapMarker, FaSuitcase } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="headContainer">
                <div className="headContent">
                    <div className="headLogo">LOGO</div>
                    <div className="headInfo">
                        <a href="#"><i><FaPhone /></i>0999 99 99</a>
                        <div className="headInfoIcons">
                            <a href="#"><i><FaEnvelope /></i></a>
                            <a href="#"><i><FaMapMarker /></i></a>
                            <a href="#"><i><FaSuitcase /></i></a>
                        </div>
                    </div>
                </div>
                <div className="navHead">
                    <a href="/"><i><FaHome /></i></a>
                    <a href="#">BONS PLANS</a>
                    <a href="#">SEJOURS</a>
                    <a href="#">LOCATION</a>
                    <a href="#">CAMPING</a>
                    <a href="#">HOTEL</a>
                    <a href="#">VOL</a>
                </div>
            </div>

        </div>
    );
}


export default Header;