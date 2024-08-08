import award from "../images/award.png";
import shield from "../images/shield.png";
import tag from "../images/tag.png";
import shopping from "../images/shopping-cart.png";

const Services = () => {

    return (

        <div>
            <div className="company-service">

                <div className="container-service">
                    <div className="row">
                        <div className="col-1 service-item ">
                           <img className="svg" src={shopping}  alt="img" />
                           <div>
                            <h3>FREE DELIVERY</h3>
                            <p>Consectetur adipi elit lorem ipsum <br></br>dolor sit amet.</p>
                           </div>
                        </div>
                        <div className="col-2 service-item">
                            <img className="svg" src={award} alt="img" />
                            <div>

                            <h3>QUALITY GUARANTEE</h3>
                            <p>Dolor sit amet orem ipsu mcons <br></br>ectetur adipi elit.</p>
                            </div>
                        </div>
                        <div className="col-3 service-item">
                            <img className="svg" src={tag} alt="img" />
                            <div>

                            <h3>DAILY OFFERS</h3>
                            <p>Amet consectetur adipi elit loreme<br></br> ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="col-4 service-item">
                            <img className="svg" src={shield} alt="img" />
                            <div>
                                <h3>100% SECURE PAYMENT</h3>
                                <p>Rem Lopsum dolor sit amet, <br></br> adipi elit.

</p>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;