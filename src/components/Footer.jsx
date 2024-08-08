import logo from "../images/main-logo.png";
import facebook from "../images/facebook-app-symbol.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import linkdin from "../images/linkedin.png";
import shipping from "../images/shippingcard.png";
import dhl from "../images/dhl.png";
import visa from "../images/visa.jpg";
import mastercard from "../images/mastercard.jpg";
import paypal from "../images/paypal.jpg";

import { Link } from "react-scroll";


const Footer = () => {

    return (

        <div>

            <footer className="footer">

                <div className="footer-content">

                    <div className="footer-section about">
                        <img src={logo} alt="img" />
                        <p>Nisi, purus vitae, ultrices nunc.  Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>

                        <div className="media-icon">
                            <img src={facebook} alt="svg" />
                            <img src={instagram} alt="svg" />
                            <img src={youtube} className="youtube" alt="svg" />
                            <img src={twitter} className="youtube" alt="svg" />
                            <img src={linkdin} className="youtube" alt="svg" />

                        </div>
                    </div>

                    <div className="footer-section links">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li ><Link to="container" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="container-service" smooth={true} duration={500}>Services</Link></li>
                            <li><Link to="product-container" smooth={true} duration={500}>Products</Link></li>
                            <li><Link to="watch-header" smooth={true} duration={500}>Watches</Link></li>
                            <li><Link to="sale-container" smooth={true} duration={500} >Sale</Link></li>
                            <li><Link to="blog-container" smooth={true} duration={500} >Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section info">
                        <h4>HELP & INFO HELP</h4>
                        <ul>
                            <li><a href="/">TRACK YOUR ORDER</a></li>
                            <li><a href="/">RETURNS POLICIES</a></li>
                            <li><a href="/">SHIPPING + DELIVERY</a></li>
                            <li><a href="/">CONTACT US </a></li>
                            <li><a href="/"> FAQS </a></li>

                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h4>CONTACT US </h4>
                        <p>
                            "Do you have any queries or  suggestions?"
                            <a href="/">youinfo@gmail.com</a>
                        </p>

                        <p>
                            If you need support? Just give us a call.
                            <a href="/">+55 111 222 333 44</a>
                        </p>
                    </div>



                </div>

                    <hr />
                <div className="footer-bottom">

                    <div className="shipping">

                        <div className="img-ship">
                        <p>We ship with : </p>
                            <img src={shipping} alt="svg" />
                            <img src={dhl} alt="svg" />
                        </div>

                    </div>

                    <div className="payment">

                        <div className="img-payment">
                        <p> Payment options  :   </p>
                            <img src={visa} alt="svg" /> 
                             <img src={mastercard} alt="svg" />
                              <img src={paypal} alt="svg" />
                        </div>
                    </div>

                    <div className="copy-rights">

                    <p>&copy; Copyright 2024 MiniStore. Design by <span>TemplatesJungle</span>  Developed by <span>Dilip</span> </p>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;