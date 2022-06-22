import './Header.css'
import { FaHome, FaPhone, FaEnvelope, FaMapMarker, FaSuitcase } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="headContainer">
                <div className="headContent">
                    <div className="headLogo">LOGO</div>
                    <div className="headInfo">
                        <a href="#"><i><FaPhone /></i><span>0999 99 99</span></a>
                        <div className="headInfoIcons">
                            <i><FaEnvelope /></i>
                            <i><FaSuitcase /></i>
                            <i><FaMapMarker /></i>
                        </div>
                        <div className='headInfoNav'>
                            <a href="#">Newlesster</a>
                            <a href="#">Suivi de commande</a>
                            <a href="#">Agences</a>
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